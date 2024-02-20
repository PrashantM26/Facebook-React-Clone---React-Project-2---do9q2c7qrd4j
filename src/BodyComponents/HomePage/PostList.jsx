import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CommentList } from "./CommentList";
import { EssentialsContext } from "../../Context/EssentialsProvider";
import { PostOptionsModal } from "./PostOptionsModal";
import { CreatePostModal } from "./CreatePostModal";

export const PostList = ({ passedPost, searchActive, passedPostOther }) => {
    //const [fetchedPosts, setFetchedPosts] = useState([]);
    const navigate = useNavigate();
    const [imageError, setImageError] = useState(false);
    const [isLiked, setIsLiked] = useState({});
    const [showPostModal, setShowPostModal] = useState({});
    const [postIdL, setPostIdL] = useState('');
    const [comment, setComment] = useState('');
    const [fetchedComments, setFetchedComments] = useState([]);
    const [editActive, setEditActive] = useState({});
    const [showPostModalOptions, setShowPostModalOptions] = useState({});
    const [hidePost, setHidePost] = useState({});
    const { fetchedPosts, setFetchedPosts, searchData, pageNo, setPageNo } = useContext(EssentialsContext);
    const [newFetchedPosts, setNewFetchedPosts] = useState([]);
    const commentDivRef = useRef(null);
    const postListRef = useRef(null);
    //const [activated, setActivated] = useState(false);

    const token = JSON.parse(sessionStorage.getItem("token"));
    const sessionUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get(
                    `https://academics.newtonschool.co/api/v1/facebook/post?limit=${pageNo*20}`,
                    {
                        headers: {
                            projectID: 'ktu17k7gadkn'
                        }
                    }
                );
                setFetchedPosts(response.data.data);
            }
            catch(err){
                console.log(err)
            }
        }
        fetchPosts();

        window.addEventListener('scroll', handleScroll);     //May be removed, volatile to changes
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };

    }, [pageNo])

    useEffect(() =>{
        if(isLiked[postIdL]){
            fetch(`https://academics.newtonschool.co/api/v1/facebook/like/${postIdL}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    projectID: 'ktu17k7gadkn',
                },
            })
            .then(() => {
                axios.get(
                    `https://academics.newtonschool.co/api/v1/facebook/post?limit=${pageNo*20}`,
                    {
                        headers: {
                            projectID: 'ktu17k7gadkn'
                        }
                    }
                )
                .then((response) => {
                    setFetchedPosts(response.data.data);
                  })
                .catch((err) => {
                    console.log(err);
                })
            })
            .catch(error => {
                console.log('Error liking the post:', error);
            });
        }
        else {
            fetch(`https://academics.newtonschool.co/api/v1/facebook/like/${postIdL}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    projectID: 'ktu17k7gadkn',
                },
            })
            .then(() => {
                axios.get(
                    `https://academics.newtonschool.co/api/v1/facebook/post?limit=${pageNo*20}`,
                    {
                        headers: {
                            projectID: 'ktu17k7gadkn'
                        }
                    }
                )
                .then((response) => {
                    setFetchedPosts(response.data.data);
                  })
                .catch((err) => {
                    console.log(err);
                })
            })
            .catch(error => {
                console.log('Error liking the post:', error);
            });
        }
    }, [isLiked])

    const handleFetchComments = (postId, switchPostModal, index) => {
        fetch(`https://academics.newtonschool.co/api/v1/facebook/post/${postId}/comments`, {
            headers: {
                Authorization: `Bearer ${token}`,
                projectID: 'ktu17k7gadkn',
            }
        })
        .then((response) => response.json())
        .then((data) => setFetchedComments(data.data))
        .then(() => {
            if(switchPostModal){
                setShowPostModal(prev => ({                               
                    ...prev,
                    //[index]: !prev[index],
                    [index]: true,
                }));
            }
        })
        .catch((error) => {
            console.log('Error in fetching the comment:', error);
        });
    }

    const handleCreateComment = (postId) => {
        fetch(`https://academics.newtonschool.co/api/v1/facebook/comment/${postId}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    projectID: 'ktu17k7gadkn',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: comment }),  //`${comment}`
        })
        .then(() => {
            setComment('');
            commentDivRef.current.textContent = '';
            handleFetchComments(postId);
            axios.get(
                `https://academics.newtonschool.co/api/v1/facebook/post?limit=${pageNo*20}`,
                {
                    headers: {
                        projectID: 'ktu17k7gadkn'
                    }
                }
            )
            .then((response) => {
                setFetchedPosts(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((error) => {
            console.log('Error in posting the comment:', error);
        });
    }

    const handleDeletePost = (postId) => {
        fetch(`https://academics.newtonschool.co/api/v1/facebook/post/${postId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                projectID: 'ktu17k7gadkn',
                'Content-Type': 'application/json',
            },
        })
        .then(() => {
            axios.get(
                `https://academics.newtonschool.co/api/v1/facebook/post?limit=${pageNo*20}`,
                {
                    headers: {
                        projectID: 'ktu17k7gadkn'
                    }
                }
            )
            .then((response) => {
                setFetchedPosts(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
        })
        .catch((error) => {
            console.log('Error in deleting the post:', error);
        });
    }

    const handleImageError = () => {
        console.log("Was here")
        setImageError(true);
    };

    /*const isImage = (urls) => {
        const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"]; // Add more if needed
    
        return urls.some(url => {
            if (typeof url === 'string') {
                const extension = url.split(".").pop().toLowerCase();
                return imageExtensions.includes(extension);
            }
            return false;
        });
    };*/
    const isImage = (url) => {
        const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp"]; // Add more if needed
        const extension = url.split(".").pop().toLowerCase();
        return imageExtensions.includes(extension);
    };

    const handleLike = (postIdL) => {
        setIsLiked(prev => ({
            ...prev,
            [postIdL]: !prev[postIdL],
        }))
        setPostIdL(postIdL)
    }

    const handlePostOptionsModalOpen = (index) => {
        setShowPostModalOptions((prev) => {
            const newState = Object.fromEntries(Object.keys(prev).map(key => [key, false]));
            newState[index] = !prev[index];
            return newState;
        })
    }

    const handleEditActive = (index) => {
        setEditActive((prev) => ({
            ...prev,
            [index]: !prev[index],
        }))
    }

    const handleHidePost = (index) => {
        setHidePost((prev) => ({
            ...prev,
            [index]: true
        }))
    }

    const handleScroll = () => {
        //console.log("hererere")
        const { scrollY, innerHeight } = window;
        const { scrollHeight } = document.documentElement;
        //console.log(scrollY, innerHeight, scrollHeight)
        /*if (postListRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = postListRef.current;//document.documentElement;//postListRef.current;
          //console.log(scrollTop, scrollHeight, clientHeight);
          // Check if the user has reached the bottom (adjust the threshold as needed)
          if (scrollTop + clientHeight >= scrollHeight - 50) {
            //console.log("HEHAW");
          }
        }*/
        if (scrollY + innerHeight >= scrollHeight) {
            //console.log("HEHAW");
            setPageNo((prev) => prev + 1);
        }
      };
      //console.log(pageNo)
      

    //console.log(fetchedPosts)
    //console.log(passedPostId)
    //console.log("search data", searchData);
    useEffect(() => {
        //console.log("runs")
        if(passedPost && fetchedPosts.length>0){
            const nFetchedPosts = fetchedPosts.filter((post) => (
                post.author._id === passedPost._id
            ))
            //console.log("Filtered posts", nFetchedPosts);
            setNewFetchedPosts(nFetchedPosts);
        }
        else if(passedPostOther && fetchedPosts.length>0){
            const nFetchedPosts = fetchedPosts.filter((post) => (
                post.author._id === passedPostOther.author._id
            ))
            //console.log("Filtered posts", nFetchedPosts);
            setNewFetchedPosts(nFetchedPosts);
        }
        else if(searchActive && fetchedPosts.length>0){
            const nFetchedPosts = fetchedPosts.filter((post) => (
                searchData.some((sData) => (
                    post._id === sData._id
                ))
            ))
            //console.log(searchData.author);
            //console.log("Filtered posts", nFetchedPosts);
            setNewFetchedPosts(nFetchedPosts);
        }
        else{
            fetchedPosts.length>0 && !passedPost && !searchActive && !passedPostOther && setNewFetchedPosts(fetchedPosts);
        }

    }, [passedPost, fetchedPosts, searchData])

    //console.log(showPostModalOptions)

    //console.log("Fetched comments", fetchedComments)
    //console.log(fetchedPosts)
    //console.log("comment",comment)

    {/*const handleSort = () => {               //Was told to implement sort by likes
        setActivated(!activated)
    }

    useEffect(() => {
        if(activated){
            const nFetchedPosts = fetchedPosts.sort((a, b) => b.likeCount-a.likeCount);
            console.log("Sorted", nFetchedPosts);
            setNewFetchedPosts(nFetchedPosts);
        }
        else{
            fetchedPosts.length>0 && !passedPost && !searchActive && !passedPostOther && !activated && setNewFetchedPosts(fetchedPosts)
        }
    }, [activated])*/}
    
    return (
        <div className="post-list-main" /*style={{overflowY: 'auto', height: '500px'}}*/ ref={postListRef} onScroll={handleScroll}>
            {/*<label for="c1"> Sort by likes<input className="c1" type='checkbox' onClick={handleSort}/></label>*/}
            { newFetchedPosts.length>0 &&
                newFetchedPosts.map((post, index) => (
                    <div className={`${showPostModal[index] ? 'post-card-single-modal-container' : ''} ${hidePost[index] ? 'post-hide' : ''}`}>
                        <div className={`${showPostModal[index] ? 'post-card-single-modal' : ''} ${hidePost[index] ? 'post-hide' : ''}`} key={post._id}>
                            {showPostModal[index] ?
                                    <div className="top-header-modal">
                                        <span>{post.author.name}'s post</span>
                                        {/*<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="svg-header-modal" style={{color: '#050505'}}>
                                            <path d="M18.707 5.293a1 1 0 0 0-1.414 0L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414z"></path>
                                        </svg>*/}
                                        <div className="svg-header-modal" onClick={() => {
                                            setShowPostModal(prev => ({                               
                                                ...prev,
                                                //[index]: !prev[index],
                                                [index]: false,
                                            }))
                                        }}>
                                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: '#050505' }}>
                                                <path d="M18.707 5.293a1 1 0 0 0-1.414 0L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                : null
                                }
                            <div className={`post-card-single`}>
                                {editActive[index] && <CreatePostModal passedPost={post} setModalClose={setEditActive} index={index} />}
                                <div className="post-card-r1">
                                    <div className="post-card-pfp" onClick={() => navigate('/mainpage/profile', {state : { post }})}>
                                        <svg aria-label="Your profile" data-visualcompletion="ignore-dynamic" role="img" style={{ height: '40px', width: '40px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" >
                                            <defs>
                                                <mask id="Rqir3aj9emhpapd5aq">
                                                    <circle cx="20" cy="20" fill="white" r="20"></circle>
                                                </mask>
                                            </defs>
                                            <g mask="url(#Rqir3aj9emhpapd5aq)">
                                                <circle className="xbh8q5q x1pwv2dq xvlca1e" cx="20" cy="20" r="20" fill="#2aa4f4"></circle>
                                                <image style={{ height: '40px', width: '40px' }} x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xlinkHref="https://scontent.fbom38-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=2b6aad&amp;_nc_ohc=FaPLa6I4CdUAX8BuYp0&amp;_nc_ht=scontent.fbom38-1.fna&amp;oh=00_AfDNq-CnUsejggdUkR8-trVtQxzBFxty1LqmzMEErZ4fGw&amp;oe=65BC91F8" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="post-card-user-details">
                                        <div className="post-card-user-r1">
                                            <h4>
                                                <strong>
                                                    <span className="post-card-user">{post.author.name}</span>
                                                </strong>&nbsp;.&nbsp;
                                                <span className="post-card-follow">Follow</span>
                                            </h4>
                                        </div>
                                        <span className="post-card-recommended">Recommended post</span>&nbsp;.&nbsp;
                                        <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" title="Shared with Public" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{color: '#65676b', cursor: 'not-allowed'}}>
                                            <title>Shared with Public</title>
                                            <g fill-rule="evenodd" transform="translate(-448 -544)">
                                                <g>
                                                    <path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path>
                                                    <path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path>
                                                    <path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="post-card-dots-cross-container">
                                        <div className="post-card-dots" onClick={() => handlePostOptionsModalOpen(index)}>
                                            <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{color: '#65676b'}}>
                                                <g fill-rule="evenodd" transform="translate(-446 -350)">
                                                    <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className={`post-card-cross ${showPostModal[index] ? 'post-card-cross-modal' : ''}`} onClick={() => handleHidePost(index)}>
                                            <i data-visualcompletion="css-img" className="x1b0d499 x1d69dk1"
                                                style={{
                                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/fCbUcoRfiez.png")',
                                                    backgroundPosition: '0px -468px',
                                                    backgroundSize: '26px 994px',
                                                    width: '20px',
                                                    height: '20px',
                                                    backgroundRepeat: 'no-repeat',
                                                    display: 'inline-block',
                                                }}
                                            ></i>
                                        </div>
                                    </div>
                                    {showPostModalOptions[index] ? <PostOptionsModal post={post} handleEditActive={handleEditActive} handlePostOptionsModalOpen={handlePostOptionsModalOpen} handleDeletePost={handleDeletePost} handleHidePost={handleHidePost} index={index} /> : ''}
                                </div>
                                <div className="post-card-texts">
                                    {post.title? 
                                        <div className="post-card-title">
                                            <h4>{post.title}</h4>
                                        </div>
                                    :   null
                                    }
                                    <div className="post-card-content">
                                        {post.content}
                                    </div>
                                </div>
                                {post.images != '' && (
                                    post.images.map((image) => (
                                        !imageError && isImage(image) ? (
                                            <div key={index} className="post-card-image-container">
                                                <img className={`${showPostModal[index] ? 'post-card-img-modal' : 'post-card-img'}`} src={image} onError={handleImageError} />
                                            </div>
                                        ) : (
                                            <div key={index} className="post-card-errorImg-container">
                                                <img alt="Image not found" />
                                            </div>
                                        )
                                    ))
                                )}
                                <div className="post-like-comment-share-count">
                                    <div className="post-like-count">
                                        <img className="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" width="18"></img>
                                        { post.likeCount>0 && <span>{post.likeCount}</span> }
                                    </div>
                                    <div className="post-comment-share-count">
                                        <div className="post-comment-count">
                                            { post.commentCount>0 && <span>{post.commentCount}</span> }
                                            <i data-visualcompletion="css-img" className="x1b0d499 x1d69dk1"
                                                style={{
                                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/OLf0APoPZES.png")',
                                                    backgroundPosition: '0px -1512px',
                                                    backgroundSize: '26px 1590px',
                                                    width: '16px',
                                                    height: '16px',
                                                    backgroundRepeat: 'no-repeat',
                                                    display: 'inline-block',
                                                    color: '#606770',
                                                }} >
                                            </i>                       
                                        </div>
                                        <div className="post-share-count">
                                            <i data-visualcompletion="css-img" className="x1b0d499 x1d69dk1"
                                                style={{
                                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/OLf0APoPZES.png")',
                                                    backgroundPosition: '0px -1530px',
                                                    backgroundSize: '26px 1590px',
                                                    width: '16px',
                                                    height: '16px',
                                                    backgroundRepeat: 'no-repeat',
                                                    display: 'inline-block',
                                                    color: '#606770',
                                                }} >                                      
                                            </i>
                                        </div>                            
                                    </div>
                                </div>
                                <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                                    <hr style={{ margin: 0, padding: 0, color: 'white' }}></hr>
                                </div>
                                <div className="post-like-comment-share">
                                    <div className="post-like" onClick={() => {handleLike(post._id)}}>
                                        <i className="x1b0d499 x1d69dk1"
                                            style={{
                                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/OLf0APoPZES.png")',
                                                backgroundPosition: isLiked[post._id] ? '0px -730px' : '0px -796px',
                                                //backgroundPosition: '0px -730px',
                                                backgroundSize: '26px 1590px',
                                                width: '20px',
                                                height: '20px',
                                                backgroundRepeat: 'no-repeat',
                                                display: 'inline-block',
                                            }}
                                        />
                                        <span>Like</span>
                                    </div>
                                    <div className="post-comment" onClick={() => {
                                        handleFetchComments(post._id, "switchPostModal", index);
                                        /*setShowPostModal(prev => ({                               
                                            ...prev,
                                            //[index]: !prev[index],
                                            [index]: true,
                                        }));*/
                                    }}>
                                        <i className="x1b0d499 x1d69dk1"
                                            style={{
                                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/OLf0APoPZES.png")',
                                                backgroundPosition: '0px -598px',
                                                backgroundSize: '26px 1590px',
                                                width: '20px',
                                                height: '20px',
                                                backgroundRepeat: 'no-repeat',
                                                display: 'inline-block',
                                            }}
                                        />
                                        <span>Comment</span>
                                    </div>
                                    <div className="post-share">
                                        <i className="x1b0d499 x1d69dk1"
                                            style={{
                                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png")',
                                                backgroundPosition: '0px -950px',
                                                backgroundSize: '26px 1610px',
                                                width: '20px',
                                                height: '20px',
                                                backgroundRepeat: 'no-repeat',
                                                display: 'inline-block',
                                            }}
                                        />
                                        <span>Share</span>
                                    </div>
                                </div>
                                {showPostModal[index] &&
                                    <div style={{ paddingLeft: '15px', paddingRight: '15px', marginTop: '-8px'}}>
                                        <hr style={{ margin: 0, padding: 0, color: 'white' }}></hr>
                                    </div>
                                }
                                {showPostModal[index] && <CommentList fetchedComments={fetchedComments} handleFetchComments={handleFetchComments} postId={post._id} />}
                            </div>

                            {showPostModal[index] && 
                                    <div className="create-comment-modal">
                                        <div>
                                            <svg aria-hidden="true" className="x3ajldb" data-visualcompletion="ignore-dynamic" role="none" style={{ height: '32px', width: '32px', cursor: 'not-allowed' }}>
                                                <mask id="rd6">
                                                    <circle cx="16" cy="16" fill="white" r="16"></circle>
                                                    <circle cx="27" cy="27" fill="black" r="6" className="insideIt"></circle>
                                                </mask>
                                                <g mask={`url(#rd6)`}>
                                                    <image x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%"
                                                        xlinkHref="https://scontent.fbom38-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p48x48&_nc_cat=1&_nc_ccb=1-7&_nc_sid=2b6aad&_nc_ohc=KFZOL86TwZkAX_o92U2&_nc_ht=scontent.fbom38-1.fna&oh=00_AfDvw3dGSMpSPfKWqMO5-4OxvyQfJKMI4DR2395dPa5oPQ&oe=65C40A78"
                                                        style={{ height: '32px', width: '32px' }}
                                                    ></image>
                                                    <circle cx="16" cy="16" r="16" fill="none" style={{strokeWidth: 2}}></circle>
                                                </g>
                                            </svg>
                                            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" style={{ color: 'black', marginLeft: '-10px', cursor: 'not-allowed' }}>
                                                <g fillRule="evenodd" transform="translate(-448 -544)">
                                                    <path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="comment-maker-container">
                                            <div className="comment-maker-r1"
                                                aria-label="Write a comment…"
                                                contentEditable={true}
                                                spellCheck={true}
                                                tabIndex={0}
                                                data-lexical-editor={true}
                                                role="textbox"
                                                onInput={(e) => setComment(e.target.textContent)}
                                                ref={commentDivRef}
                                            >
                                            </div>
                                            {/*<div className="comment-input-container">

                                                <input type="text" className="cursor-input" placeholder="Write a comment..." />

                                            </div>*/}
                                            <div className="comment-maker-icons-sender">
                                                <div className="comment-maker-icons">
                                                    {/*<i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png&quot;); background-position: 0px -1172px; background-size: 26px 1610px; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
                                                    <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png&quot;); background-position: 0px -1316px; background-size: 26px 1610px; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
                                                    <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png&quot;); background-position: 0px -1244px; background-size: 26px 1610px; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
                                                    <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png&quot;); background-position: 0px -1352px; background-size: 26px 1610px; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>
                                                    <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png&quot;); background-position: 0px -1478px; background-size: 26px 1610px; width: 16px; height: 16px; background-repeat: no-repeat; display: inline-block;"></i>*/}
                                                    <i data-visualcompletion="css-img"
                                                        style={{
                                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png")',
                                                        backgroundPosition: '0px -1172px',
                                                        backgroundSize: '26px 1610px',
                                                        width: '16px',
                                                        height: '16px',
                                                        backgroundRepeat: 'no-repeat',
                                                        display: 'inline-block',
                                                        WebkitFilter: 'invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)',
                                                        cursor: 'not-allowed'
                                                        }}
                                                    ></i>
                                                    <i data-visualcompletion="css-img"
                                                        style={{
                                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png")',
                                                        backgroundPosition: '0px -1316px',
                                                        backgroundSize: '26px 1610px',
                                                        width: '16px',
                                                        height: '16px',
                                                        backgroundRepeat: 'no-repeat',
                                                        display: 'inline-block',
                                                        WebkitFilter: 'invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)',
                                                        cursor: 'not-allowed'
                                                        }}
                                                    ></i>
                                                    <i data-visualcompletion="css-img"
                                                        style={{
                                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png")',
                                                        backgroundPosition: '0px -1244px',
                                                        backgroundSize: '26px 1610px',
                                                        width: '16px',
                                                        height: '16px',
                                                        backgroundRepeat: 'no-repeat',
                                                        display: 'inline-block',
                                                        WebkitFilter: 'invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)',
                                                        cursor: 'not-allowed'
                                                        }}
                                                    ></i>
                                                    <i data-visualcompletion="css-img"
                                                        style={{
                                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png")',
                                                        backgroundPosition: '0px -1352px',
                                                        backgroundSize: '26px 1610px',
                                                        width: '16px',
                                                        height: '16px',
                                                        backgroundRepeat: 'no-repeat',
                                                        display: 'inline-block',
                                                        WebkitFilter: 'invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)',
                                                        cursor: 'not-allowed'
                                                        }}
                                                    ></i>
                                                    <i data-visualcompletion="css-img"
                                                        style={{
                                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png")',
                                                        backgroundPosition: '0px -1478px',
                                                        backgroundSize: '26px 1610px',
                                                        width: '16px',
                                                        height: '16px',
                                                        backgroundRepeat: 'no-repeat',
                                                        display: 'inline-block',
                                                        WebkitFilter: 'invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)',
                                                        cursor: 'not-allowed'
                                                        }}
                                                    ></i>
                                                </div>
                                                <div className="comment-maker-sender">
                                                    <i data-visualcompletion="css-img"
                                                        style={{
                                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/a3-51z5PInz.png")',
                                                        backgroundPosition: '0px -1406px',
                                                        backgroundSize: '26px 1610px',
                                                        width: '16px',
                                                        height: '16px',
                                                        backgroundRepeat: 'no-repeat',
                                                        display: 'inline-block',
                                                        filter: `${comment ? 'invert(19%) sepia(70%) saturate(5671%) hue-rotate(203deg) brightness(96%) contrast(101%)' : 'invert(80%) sepia(6%) saturate(200%) saturate(120%) hue-rotate(173deg) brightness(98%) contrast(89%)'}`,
                                                        cursor: `${comment ? 'pointer' : 'not-allowed'}`
                                                        }}
                                                        onClick={() => comment && handleCreateComment(post._id)}
                                                    ></i>                                          
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }

                        </div>
                    </div>
                ))
            }
            
        </div>
    )

}
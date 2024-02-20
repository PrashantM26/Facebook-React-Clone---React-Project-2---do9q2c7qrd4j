import React, { useState, useEffect, useRef, useContext } from "react";
import { EssentialsContext } from "../../Context/EssentialsProvider";
import axios from "axios";

export const CreatePostModal = ({ passedPost, setModalClose, index }) => {
    const {setFetchedPosts, openCreatePostModal, setOpenCreatePostModal } = useContext(EssentialsContext);
    const [postContent, setPostContent] = useState('');
    const [postImage, setPostImage] = useState([]);
    const fileInputRef = useRef(null);
    const editableRef = useRef(null);
    const [fontSize, setFontSize] = useState(24);
    const charLimit = 50;

    const token = JSON.parse(sessionStorage.getItem("token"));
    const sessionUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    useEffect(() => {
        //const placeholderText = "What's on your mind, Prashant?";
        //const trimmedContent = postContent.trim();
        if (postContent.length > charLimit) {
          setFontSize(15);
        } else {
          setFontSize(24);
        }
    }, [postContent, charLimit]);

    //console.log(postContent)

    /*useEffect(() => {
        return () => {
          if (postImage) {
            URL.revokeObjectURL(URL.createObjectURL(postImage));
          }
        };
      }, [postImage]);*/

    const handleImageSelect = (e) => {
        //setPostImage(fileInputRef.current.files[0]);
        setPostImage((prev) => [...prev, e.target.files[0]]);
    }
    //console.log(postImage);
    
    /*const handleCreatePost = () => {
        const formData = new FormData();
        formData.append('content', postContent);

        //const fileInput = document.getElementById('fileInput');
        //const postImage = fileInputRef.current.files[0];
        if(postImage.length>0){
            postImage.forEach((image)=> {
                formData.append('images', image);
            })
        }

        fetch('https://academics.newtonschool.co/api/v1/facebook/post/', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                projectID: 'f104bi07c490',
            },
            body: formData,
        })
        .then(response => {
            if(response.ok) {
                handleCloseModal();
                axios.get(`https://academics.newtonschool.co/api/v1/facebook/post`,
                    {
                        headers: {
                            projectID: 'f104bi07c490'
                        }
                    }
                )
                .then((response) => {
                    setFetchedPosts(response.data.data);
                    //console.log("called");
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }*/

    const handleCreatePost = async () => {
        try {
            const formData = new FormData();
            formData.append('content', postContent);
    
            if (postImage.length > 0) {
                postImage.forEach((image) => {
                    formData.append('images', image);
                });
            }
    
            const config = {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    projectID: 'ktu17k7gadkn',
                },
                body: formData,
            }
            let response = '';
            if(!passedPost){
                response = await fetch('https://academics.newtonschool.co/api/v1/facebook/post/', 
                    config,
                );
            }
            else{
                response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/post/${passedPost._id}`, 
                    {...config, method: 'PATCH'},
                );
            }
    
            if (response.ok) {
                handleCloseModal();
    
                const axiosResponse = await axios.get(
                    'https://academics.newtonschool.co/api/v1/facebook/post',
                    {
                        headers: {
                            projectID: 'ktu17k7gadkn',
                        },
                    }
                );
    
                setFetchedPosts(axiosResponse.data.data);
            }
        } catch (error) {
            console.log('Error in handleCreatePost:', error);
        }
    };
    //console.log(postImage);
    /*if(passedPost && editableRef.current){
        editableRef.current.textContent = passedPost.content;
        setPostContent(passedPost.content);
        setPostImage(passedPost.images);
        setOpenCreatePostModal(true);
        console.log("Hit");
    }*/

    useEffect(() => {
        //console.log("NOTICE THE REF    ",editableRef.current)
        // Make sure fileInputRef.current is not null before setting properties
        if (passedPost && editableRef.current) {
            editableRef.current.innerText = passedPost.content;
            setPostContent(passedPost.content);
            const imgURL = passedPost.images;
            //const imgURL = 'https://newton-project-resume-backend.s3.ap-south-1.amazonaws.com/1706765991732/_7f64c453-189c-450d-86d3-3d1947a14311.jpeg'
            imgURL.forEach((img) => {
                /*fetch(img, { mode: 'no-cors' })
                    .then((response) => response.blob())
                    .then((blob) => {
                        console.log("blob", blob)
                        const file = new File([blob], "image.jpg", { type: "image/jpeg" });
                        console.log(file);
                        setPostImage((prev) => [...prev, file]);
                    })
                    .catch((error) => {
                        console.log("Error converting image", error);
                    })*/
                setPostImage((prev) => [...prev, img]);
            })
            //setPostImage(passedPost.images);
            //console.log("Hit")
        }
    }, [passedPost]);

    console.log("Image post ",postImage);

    const handleCloseModal = () => {
        if(index){
            setModalClose((prev) => ({
                ...prev,
                [index]: false,
            }))
        }
        else {
            setModalClose(false)
        }
    }


    //if(editableRef.current){
        //console.log("Hurray!")
    //}
    //console.log("NOTICE THE REF  AFTER USEEFFECT  ",editableRef.current)

    //console.log("POST re", passedPost.content)

    return(
        <div className="create-post-modal-container">
            <div className="create-post-modal">
                <div className="cpm-top">
                    <h2><span className="cpm-top-text">Create Post</span></h2>
                    <div className="cpm-top-icon" onClick={handleCloseModal}>
                        <i data-visualcompletion="css-img" className="x1b0d499 x1d69dk1"
                            style={{
                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/gTeZkFxX2zy.png")',
                                backgroundPosition: '0px -468px',
                                backgroundSize: '26px 958px',
                                width: '20px',
                                height: '20px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }} >
                        </i>
                    </div>
                </div>
                <div className="cpm-user-details">
                    <div className="cpm-pfp">
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
                    <div className="cpm-username-public">
                        <span>Prashant Mishra</span>
                        <div className="cpm-public-icon-text">
                            <img
                                className="x1b0d499 xep6ejk"
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/L39Daxsxmmw.png"
                                alt="Public"
                                height="12"
                                width="12"
                            />
                            <span className="cpm-public-text">Public</span>
                            <i data-visualcompletion="css-img" className="x1b0d499 xep6ejk"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/6_qkV6EV9UU.png")',
                                    backgroundPosition: '0px -1474px',
                                    backgroundSize: '26px 1488px',
                                    width: '12px',
                                    height: '12px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }} >
                            </i>
                        </div>
                    </div>
                </div>
                <div className="cpm-user-input-body">
                    <div
                        className="cpm-user-input-text"
                        contentEditable={true}
                        role="textbox"
                        spellCheck={true}
                        tabIndex={0}
                        data-lexical-editor={true}
                        ref={editableRef}
                        style={{
                            fontSize: `${fontSize}px`
                        }}
                        onInput={(e) => setPostContent(e.target.textContent)}
                    >
                    </div>
                    {postContent.trim() === '' && <div className="cpm-text-placeholder" style={{fontSize: postImage.length>0? '0.9rem' : ''}}>What's on your mind, Prashant?</div>}
                    {/*Object.values(postImage).every(value => value !== '') &&*/
                        postImage.length>0 &&
                        <div className="cpm-selected-image">
                            {postImage.map((image) => (
                                <img src={image instanceof File ? URL.createObjectURL(image) : image}></img>
                            ))}
                            <div className="cpm-selected-image-close" onClick={() => {fileInputRef.current.value = "";setPostImage('')}}>
                                <i data-visualcompletion="css-img" className="x1b0d499 x1d69dk1"
                                    style={{
                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/7DHbF_QYfZU.png")',
                                        backgroundPosition: '0px -446px',
                                        backgroundSize: '26px 904px',
                                        width: '20px',
                                        height: '20px',
                                        backgroundRepeat: 'no-repeat',
                                        display: 'inline-block',
                                    }} >
                                </i>
                            </div>
                        </div>
                    }
                </div>
                {!postImage && 
                    <div className="cpm-color-emoji">
                        <img height="38" alt="" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" />
                        <i aria-label="Insert an emoji" role="img"
                            style={{
                                height: '24px',
                                width: '24px',
                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/HpYZ6d2Q2UK.png")',
                                backgroundPosition: '0px -64px',
                                backgroundSize: '38px 262px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }} >
                        </i>
                    </div>
                }
                <div className="cpm-post-options">
                    <div className="cpm-post-options-text">
                        Add to your post
                    </div>
                    <div className="cpm-post-options-icons">
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleImageSelect}
                        />
                        <img className="x1b0d499 xl1xv1r" src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png" alt=""
                            style={{ height: '24px', width: '24px', cursor: 'pointer' }}
                            onClick={() => fileInputRef.current.click()}
                        />
                        <img className="x1b0d499 xl1xv1r" src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/MqTJr_DM3Jg.png" alt=""
                            style={{ height: '24px', width: '24px', cursor: 'not-allowed' }}
                        />
                        <img className="x1b0d499 xl1xv1r" src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png" alt=""
                            style={{ height: '24px', width: '24px', cursor: 'not-allowed' }}
                        />
                        <img className="x1b0d499 xl1xv1r" src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/uywzfiZad5N.png" alt=""
                            style={{ height: '24px', width: '24px', cursor: 'not-allowed' }}
                        />
                        <img className="x1b0d499 xl1xv1r" src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/j0Jp-GpONWx.png" alt=""
                            style={{ height: '24px', width: '24px', cursor: 'not-allowed' }}
                        />
                        <i className="x1b0d499 xl1xv1r"
                            style={{
                                height: '24px',
                                width: '24px',
                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/0bVN9jFeDyF.png")',
                                backgroundPosition: '0px -38px',
                                backgroundSize: '38px 122px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                                cursor: 'not-allowed'
                            }} >
                        </i>
                    </div>
                </div>
                <div className="cpm-post-button" 
                    style={{ 
                        backgroundColor: postContent? '#0866FF' : '#E4E6EB', 
                        color: postContent? 'white' : '#BEC3C6' 
                    }}
                    onClick={handleCreatePost}
                >
                    Post
                </div>
            </div>
        </div>
    )
}
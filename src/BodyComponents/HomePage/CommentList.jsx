import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { TimeAgo } from "./TimeAgo";
import { EssentialsContext } from "../../Context/EssentialsProvider";

export const CommentList = ({ fetchedComments, handleFetchComments, postId }) => {         //Removed taking fetchedPosts and setFetchedPosts
    const { fetchedPosts, setFetchedPosts, pageNo } = useContext(EssentialsContext);
    const [newFetchedComments, setNewFetchedComments] = useState([]);
    const [optionPosition, setOptionPosition] = useState({});
    const [isOptionOpen, setOptionOpen] = useState({});
    const [hideComment, setHideComment] = useState({});
    //const divOptionRef = useRef(null);
    const divDelete = useRef(null);
    const token = JSON.parse(sessionStorage.getItem("token"));
    const sessionUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    //console.log(apunkaId._id,"bol bete")
    //const apunKaName = "prashant";
    useEffect(() => {
        // Iterate through API 2 comments and match author IDs
        if(fetchedComments.length>0 && fetchedPosts.length>0) {
            //console.log("COMMENTS",fetchedComments);
            //console.log("Posts", fetchedPosts);
            if(fetchedComments.some(obj => obj.hasOwnProperty('isEdited'))){/*encapsulate till end of returm*}*/    //Alternate approach
            //console.log("POSTS",fetchedPosts);
                const newCommentList = fetchedComments.map(comment => {           // Iterate through API 2 comments and match author IDs
                    let authorName = '';
                    let newAPI1 = [];
                    if(comment.hasOwnProperty('isEdited')){           //check is comment obj is really from fetchedComments, using isEdited key to verify as it is uique to comment only, it is not present in post
                        if(comment.author === sessionUserInfo._id){
                            authorName = sessionUserInfo.name;
                        }
                        else{
                            newAPI1 = fetchedPosts.find(post => post.author._id === comment.author);  // Check if the author ID from API 2 exists in API 1 data       
                            authorName = newAPI1 ? newAPI1.author.name : "Unknown";  // If a match is found, use the name from API 1
                        }
                        
                        return {
                            ...comment,
                            authorName: authorName,
                        };
                    }
                })
        
                //console.log("New comment list", newCommentList);
                setNewFetchedComments(newCommentList);
            }
        }
    }, [fetchedComments, fetchedPosts]);

    const handleOptionClick = (e, index) => {
        //const { target } = e;
        //const pos = target.getBoundingClientRect();
        //const pos = divOptionRef.current.getBoundingClientRect();
        //console.log(pos);
        /*setOptionPosition((prevPositions) => ({
            ...prevPositions,
            [index]: {
              top: pos.top, //+ window.scrollY,
              left: pos.left, //+ window.scrollX,
              height: pos.height,
            },
        }));*/
        /*const { top, left } = e.currentTarget.getBoundingClientRect();
        console.log("TOP !", top, "LEFT !",left);
        setOptionPosition({ top, left });*/
        setOptionOpen((prev) => {
            /*...prev,
            [index]: !prev[index],
        }));*/
        const newState = Object.fromEntries(Object.keys(prev).map(key => [key, false]));

        // Set the specific index to true
        newState[index] = !prev[index];
    
        return newState;
      });
        //console.log(optionPosition[index]);
    }

    //console.log(optionPosition);

    const handleDeleteComment = (commentId, index) => {
        setOptionOpen((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
        fetch(`https://academics.newtonschool.co/api/v1/facebook/comment/${commentId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                projectID: 'ktu17k7gadkn',
            }
        })
        .then(() => {
            handleFetchComments(postId);
            axios.get(                                                              //Removing it does not leads to weird error
                `https://academics.newtonschool.co/api/v1/facebook/post?limit=${pageNo*20}`,
                {
                    headers: {
                        projectID: 'ktu17k7gadkn'
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
        })
        .catch(error => {
            console.log('Error Deleting the comment:', error);
        })
    }

    const handleHideComment = (index) => {
        setHideComment((prev) => ({
            ...prev,
            [index]: true
        }))
    }

    /*if(fetchedComments.length === 0 && divDelete.current){               //comment or remove useRef later
        console.log("dsdfddfgdfgfgfghfghfghghghghhghjhgh")
        const deleteThis = divDelete.current;
        //deleteThis.textContent = '';
        deleteThis.parentNode.removeChild(deleteThis);
    }*/

    return(
        <div className="comments-modal-container">
            {newFetchedComments.length>0 &&
                <div className="all-comments-son">
                    <span>All comments</span>&nbsp;
                    <i className="x1b0d499 x1d69dk1"
                        style={{
                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/e0iPnuKt7kT.png")',
                            backgroundPosition: '0px -828px',
                            backgroundSize: '26px 972px',
                            width: '16px',
                            height: '16px',
                            backgroundRepeat: 'no-repeat',
                            display: 'inline-block',
                        }} >
                    </i>
                </div>
            }
            {newFetchedComments.length>0 && newFetchedComments.map((comment, index) => (
                <div className={`single-comment-modal ${hideComment[index] || fetchedComments.length === 0 ? 'comment-hide' : ''}`} ref={divDelete}>
                    <div className="comments-pfp-modal">
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
                    <div className="comment-option-like-reply">
                        <div className="comment-option-modal">
                            <div className="author-comment-modal">
                                <span>{comment.authorName}</span>
                                <span>{comment.content}</span>
                            </div>
                            <div className="option-hide-delete-comment" key={index} onClick={(e) => handleOptionClick(e,index)}>
                                <i data-visualcompletion="css-img" className="x1b0d499 x1d69dk1"
                                    style={{
                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/e0iPnuKt7kT.png")',
                                        backgroundPosition: '0px -774px',
                                        backgroundSize: '26px 972px',
                                        width: '16px',
                                        height: '16px',
                                        backgroundRepeat: 'no-repeat',
                                        display: 'inline-block',
                                    }} >
                                </i>
                                {isOptionOpen[index] && /*optionPosition[index] &&*/ (
                                    <div /*style={{
                                            position: 'absolute',
                                            //top: optionPosition[index].top + optionPosition[index].height,
                                            //left: optionPosition[index].left,
                                            top: optionPosition.top, //+ optionPosition[index].height,
                                            left: optionPosition.left,
                                            //position: 'absolute',
                                            zIndex: 1000,
                                            //left: "260px",
                                            width: "240px",
                                            border: "1px solid black",
                                            height: "50px"
                                        }}*/ className="option-hide-delete-comment-modal">
                                        {comment.author === sessionUserInfo._id ?
                                            <div className="comment-delete-hide" onClick={() => handleDeleteComment(comment._id, index)}>
                                                <span>Delete</span>
                                            </div>
                                        :
                                            <div className="comment-delete-hide" onClick={() => handleHideComment(index) }>
                                                <span>Hide</span>
                                            </div>
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="date-like-reply-edited">
                            <TimeAgo date={comment.createdAt} />
                            <span>Like</span>
                            <span>Reply</span>
                            {comment.isEdited ?
                                <span className="comment-edited">Edited</span>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
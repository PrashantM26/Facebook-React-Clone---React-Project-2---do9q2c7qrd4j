import React from "react";

export const PostOptionsModal = ({ post, handleEditActive, handlePostOptionsModalOpen, handleDeletePost, handleHidePost, index }) => {
    const sessionUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    //const {setFetchedPosts, openCreatePostModal, setOpenCreatePostModal } = useContext(EssentialsContext);
    //const [editActive, setEditActive] = useState(false);
    //const [deleteActive, setDeleteActive] = useState(false);
    //console.log("Edit activated", editActive);
    //console.log("Delete activated", deleteActive);
    //console.log(post)
    /*useEffect(() => {
        console.log("Edit activated", editActive);
      }, [editActive]);*/

    return(
        <div className="post-options-modal" onClick={(e) =>e.stopPropagation()}>
            {post.author._id === sessionUserInfo._id ?
                
                <>
                    {/*editActive && <CreatePostModal passedPost={post} setModalClose={setEditActive} />*/}
                    <div className="pom-sec">
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/Pl7RmzepjtA.png")',
                                    backgroundPosition: '0px -352px',
                                    backgroundSize: '22px 480px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}>
                            </i>
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Pin post
                            </div>
                        </div>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/bBjudVd4RQk.png")',
                                    backgroundPosition: '0px -70px',
                                    backgroundSize: '26px 356px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}>
                            </i>
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Save Post
                            </div>
                            <div className="pom-text-p">
                                Add this to your saved items.
                            </div>
                        </div>
                    </div>
                    <div className="pom-below-sec-container">
                        <hr class="pom-below-sec"></hr>
                    </div>
                    <div className="pom-sec pom-selectable" onClick={() => {handlePostOptionsModalOpen(index);handleEditActive(index)}}>
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/Pl7RmzepjtA.png")',
                                    backgroundPosition: '0px -198px',
                                    backgroundSize: '22px 480px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}>
                            </i>
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Edit post
                            </div>
                        </div>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/2RPvJzmm8Y6.png" alt="" height="20" width="20" />
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Edit audience
                            </div>
                        </div>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/PQIJVQvxh2V.png")',
                                    backgroundPosition: '0px -48px',
                                    backgroundSize: '26px 552px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}>
                            </i>
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Turn off notifications for this post
                            </div>
                        </div>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/PQIJVQvxh2V.png")',
                                    backgroundPosition: '0px -422px',
                                    backgroundSize: '26px 552px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}>
                            </i>
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Turn off translations
                            </div>
                        </div>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/XSFH6vbsasc.png")',
                                    backgroundPosition: '0px -66px',
                                    backgroundSize: '22px 342px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}>
                            </i>
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Edit date
                            </div>
                        </div>
                    </div>
                    <div className="pom-below-sec-container">
                        <hr class="pom-below-sec"></hr>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/PQIJVQvxh2V.png")',
                                    backgroundPosition: '0px -114px',
                                    backgroundSize: '26px 552px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}>
                            </i>
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Move to archive
                            </div>
                        </div>
                    </div>
                    <div className="pom-sec pom-selectable">
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/bBjudVd4RQk.png")',
                                    backgroundPosition: '0px -312px',
                                    backgroundSize: '26px 356px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}>
                            </i>
                        </div>
                        <div className="pom-text" onClick={() => {handleDeletePost(post._id); handlePostOptionsModalOpen(index)}}>
                            <div className="pom-text-h">
                                Move to Recycle bin
                            </div>
                            <div className="pom-text-p">
                                Items in your Recycle bin are deleted after 30 days.
                            </div>
                        </div>
                    </div>
                </>
        
            :
                <>
                    <div className="pom-sec">
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/iO3BDg4iwDJ.png")',
                                    backgroundPosition: '0px -70px',
                                    backgroundSize: '26px 378px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block'
                                }}
                            />
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Save Post
                            </div>
                            <div className="pom-text-p">
                                Add this to your saved items.
                            </div>
                        </div>
                    </div>
                    <div className="pom-below-sec-container">
                        <hr class="pom-below-sec"></hr>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/M9321ZK0GCT.png")',
                                    backgroundPosition: '0px -290px',
                                    backgroundSize: '26px 1550px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block'
                                }}
                            />
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Turn on notifications for this post
                            </div>
                        </div>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/toNSalB5n0p.png")',
                                    backgroundPosition: '0px -112px',
                                    backgroundSize: '42px 552px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block'
                                }}
                            />
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Embed
                            </div>
                        </div>
                    </div>
                    <div className="pom-below-sec-container">
                        <hr class="pom-below-sec"></hr>
                    </div>
                    <div className="pom-sec pom-selectable" onClick={() => {handleHidePost(index)}}>
                        <div>
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/M9321ZK0GCT.png")',
                                    backgroundPosition: '0px -136px',
                                    backgroundSize: '26px 1550px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block'
                                }}
                            />
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Hide Post
                            </div>
                            <div className="pom-text-p">
                                See fewer posts like this.
                            </div>
                        </div>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/h15jrhghvUR.png" alt="" height="20" width="20" />
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Snooze {post.author.name} for 30 days.
                            </div>
                            <div className="pom-text-p">
                                Temporarily stop seeing posts.
                            </div>
                        </div>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/KHqkjYOwBTc.png" alt="" height="20" width="20" />
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Hide all from {post.author.name}
                            </div>
                            <div className="pom-text-p">
                                Stop seeing posts from this Page.
                            </div>
                        </div>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/BNdV7yOMsDU.png" alt="" height="20" width="20" />
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Report post
                            </div>
                            <div className="pom-text-p">
                                We won't let {post.author.name} know who reported this.
                            </div>
                        </div>
                    </div>
                    <div className="pom-sec">
                        <div>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/4jlthrAbQvA.png" alt="" height="20" width="20" />
                        </div>
                        <div className="pom-text">
                            <div className="pom-text-h">
                                Block {post.author.name}'s profile
                            </div>
                            <div className="pom-text-p">
                                You won't be able to see or contact each other
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
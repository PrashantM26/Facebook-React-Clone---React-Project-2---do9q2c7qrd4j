import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import './ProfilePage.css';
import { CreatePostModal } from "../HomePage/CreatePostModal";
import { EssentialsContext } from "../../Context/EssentialsProvider";
import { PostList } from "../HomePage/PostList";

export const ProfilePage = () => {
    const location = useLocation();
    const { openCreatePostModal, setOpenCreatePostModal } = useContext(EssentialsContext);
    const sessionUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const { post } = location.state || {};
    console.log(post);

    return(
        <div className="profile-page">
            <div className="prof-section1">
                <div className="prof-s1-mid">
                    <div className="prof-s1-mid1"></div>
                    {!post &&
                        <div className="prof-s1-mid2">
                            <div className="prof-s1-icons-container">
                                <div className="prof-s1-icon">
                                    <i
                                        style={{
                                            backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/T4B7--SnuTP.png')",
                                            backgroundPosition: '-22px -94px',
                                            backgroundSize: '42px 644px',
                                            width: '16px',
                                            height: '16px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                            WebkitFilter: 'invert(100%)',
                                        }}
                                        data-visualcompletion="css-img"
                                    ></i>
                                    <span className="prof-s1-icon-text">
                                        Create with avatar
                                    </span>
                                </div>
                                <div className="prof-s1-icon">
                                    <i
                                        style={{
                                            backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/T4B7--SnuTP.png')",
                                            backgroundPosition: '-22px -130px',
                                            backgroundSize: '42px 644px',
                                            width: '16px',
                                            height: '16px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                            WebkitFilter: 'invert(100%)',
                                        }}
                                        data-visualcompletion="css-img"
                                    ></i>
                                    <span className="prof-s1-icon-text">
                                        Add cover Photo
                                    </span>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="prof-s1-mid3">
                        <div className="prof-main-icon">
                            <svg
                                aria-label="Profile picture actions"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 168 168"
                                style={{ height: '168px', width: '168px', borderRadius: '50%', overflow: 'hidden' }}
                                >
                                <mask id="profileMask" fill="white">
                                    <circle cx="84" cy="84" r="84" />
                                </mask>
                                <g mask="url(#profileMask)">
                                    <image
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    xlinkHref="https://scontent.fbom38-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=RzeqyrvNnDsAX_nZxvR&_nc_ht=scontent.fbom38-1.fna&oh=00_AfBkVaOtTJbScIH-FtmF7LaIn2Vm_MzntVMDq7NIRZEjqA&oe=65D6B7B8"
                                    alt="Profile"
                                    />
                                </g>
                            </svg>
                        </div>
                            {/*<div
                                style={{
                                    width: '168px',
                                    height: '168px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                }}
                                >
                                <img
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    src="https://scontent.fbom38-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=RzeqyrvNnDsAX_nZxvR&_nc_ht=scontent.fbom38-1.fna&oh=00_AfBkVaOtTJbScIH-FtmF7LaIn2Vm_MzntVMDq7NIRZEjqA&oe=65D6B7B8"
                                    alt="Profile"
                                />
                            </div>*/}
                        <div className="prof-main-icon-text"><h1>{!post ? sessionUserInfo.name : post.author.name}</h1></div>
                        <div className="prof-story-edit-more">
                            {!post ?
                                <div className="prof-add-story">
                                    <img class="x1b0d499 xaj1gnb" src="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/q-yRM7K9T0l.png" alt="" height="16" width="16" style={{ WebkitFilter: 'invert(100%)' }} />
                                    <div className="prof-add-story-text">Add to story</div>
                                </div>
                            :
                                <div className="prof-add-story">
                                    <img className="x1b0d499 xaj1gnb" src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/1z-5F6qDswz.png" alt="" height="16" width="16" style={{ WebkitFilter: 'invert(100%)' }} />
                                    <div className="prof-add-story-text">Message</div>
                                </div>
                            }
                            {!post ?
                                <div className="prof-edit">
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/tmaz0VO75BB.png" alt="" height="16" width="16" />
                                    <div className="prof-edit-text">Edit profile</div>
                                </div>
                            :   <>
                                    <div className="prof-edit">
                                        <img className="x1b0d499 xep6ejk" src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/9ZZIzT3-JPR.png" alt="" height="16" width="16" />
                                        <div className="prof-edit-text">Like</div>
                                    </div>
                                    <div className="prof-edit">
                                        <img className="x1b0d499 xep6ejk" src="https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/qxDZ_oUxwuU.png" alt="" height="16" width="16" />
                                        <div className="prof-edit-text">Search</div>
                                    </div>
                                </>
                            }
                            {!post &&
                                <div className="prof-more-down">
                                    <i
                                        data-visualcompletion="css-img"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/T4B7--SnuTP.png")',
                                            backgroundPosition: '-22px -148px',
                                            backgroundSize: '42px 644px',
                                            width: '16px',
                                            height: '16px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                        }}
                                    ></i>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="prof-for-border"></div>
                    <div className="prof-options-more">
                        <div className="prof-options">
                            <div>
                                Posts
                            </div>
                            <div>
                                About
                            </div>
                            <div>
                                {!post ? 'Friends' : 'Mentions'}
                            </div>
                            {post &&
                                <div>
                                    Followers
                                </div>
                            }
                            <div>
                                Photos
                            </div>
                            <div>
                                Videos
                            </div>
                            {!post ?
                                <div>
                                    Check-ins
                                </div>
                            :
                                null
                            }
                            <div>
                                <span>More</span>
                                <svg
                                    viewBox="0 0 20 20"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
                                    style={{ 'color': '#65676b' }}
                                    >
                                    <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="prof-more-icon">
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
                                    style={{ 'color': '#65676b' }}
                                    >
                                    <circle cx="12" cy="12" r="2.5"></circle>
                                    <circle cx="19.5" cy="12" r="2.5"></circle>
                                    <circle cx="4.5" cy="12" r="2.5"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prof-section2">
                <div className="prof-s2-mid">
                    <div className="prof-s2-mid1">
                        <div className="prof-s2-intro">
                            <span>Intro</span>
                            {!post ?
                            <>
                                <div className="prof-intro">
                                    <span>Add Bio</span>
                                </div>
                                <div className="prof-intro">
                                    <span>Edit details</span>
                                </div>
                                <div className="prof-intro">
                                    <span>Add Featured</span>
                                </div>
                                </>                         
                            :
                                null
                            }
                        </div>
                        <div className="prof-photo-friend">
                            <div>Photos</div>
                            <div>See All Photos</div>
                        </div>
                        <div className="prof-photo-friend">
                            <div>Friends</div>
                            <div>See all friends</div>
                        </div>
                    </div>
                    <div className="prof-s2-mid2">
                        {!post ?
                            <div className="create-post prof-create-post">
                                <div className="create-post-r1">
                                    <div className="create-post-pfp">
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
                                    <div className="create-post-create" onClick={() => setOpenCreatePostModal(true)}>
                                        What's on your mind?
                                    </div>
                                    {openCreatePostModal && <CreatePostModal setModalClose={setOpenCreatePostModal}/>}
                                </div>
                                <div><hr></hr></div>
                                <div className="create-post-r2">
                                    <div className="create-post-video">
                                        <img height="24" width="24" alt="" className="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png" />
                                        <span className="create-post-video-text">Live video</span>
                                    </div>
                                    <div className="create-post-image">
                                        <img height="24" width="24" alt="" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png" />
                                        <span className="create-post-image-text">Photo/video</span>
                                    </div>
                                    <div className="create-post-activity">
                                        <img height="24" width="24" alt="" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/CenxFlWjtJO.png" />
                                        <span className="create-post-activity-text">Life event</span>
                                    </div>
                                </div>
                            </div>
                        :
                            null
                        }
                        <div className="prof-post-options">
                            <div className="prof-post-options-r1">
                                <div className="prof-post-text">
                                    Posts
                                </div>
                                <div className="prof-post-filter-manage">
                                    <div className="prof-post-filter">
                                        <i
                                            data-visualcompletion="css-img"
                                            className="x1b0d499 xep6ejk"
                                            style={{
                                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/6W7TmmseLN2.png")',
                                                backgroundPosition: '0px -656px',
                                                backgroundSize: '26px 958px',
                                                width: '16px',
                                                height: '16px',
                                                backgroundRepeat: 'no-repeat',
                                                display: 'inline-block',
                                            }}
                                        ></i>
                                        <div>Filter</div>
                                    </div>
                                    {!post ?
                                        <div className="prof-post-manage">
                                            <i
                                                data-visualcompletion="css-img"
                                                className="x1b0d499 xep6ejk"
                                                style={{
                                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/6W7TmmseLN2.png")',
                                                    backgroundPosition: '0px -782px',
                                                    backgroundSize: '26px 958px',
                                                    width: '16px',
                                                    height: '16px',
                                                    backgroundRepeat: 'no-repeat',
                                                    display: 'inline-block',
                                                }}
                                            ></i>
                                            <div>
                                                Manage posts
                                            </div>
                                        </div>
                                    :
                                        null
                                    }
                                </div>
                            </div>
                            <div className="prof-post-options-r2">
                                <div className="prof-post-list-view">
                                    <i
                                        data-visualcompletion="css-img"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/6W7TmmseLN2.png")',
                                            backgroundPosition: '0px -728px',
                                            backgroundSize: '26px 958px',
                                            width: '16px',
                                            height: '16px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                            WebkitFilter: 'invert(19%) sepia(70%) saturate(5671%) hue-rotate(203deg) brightness(96%) contrast(101%)',
                                        }}
                                    ></i>
                                    <div>List view</div>
                                </div>
                                <div className="prof-post-grid-view">
                                    <i
                                        data-visualcompletion="css-img"
                                        className="x1b0d499 x1d69dk1"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/6W7TmmseLN2.png")',
                                            backgroundPosition: '0px -674px',
                                            backgroundSize: '26px 958px',
                                            width: '16px',
                                            height: '16px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                        }}
                                    ></i>
                                    <div>Grid view</div>
                                </div>
                            </div>
                        </div>
                        {!post ?
                            <PostList passedPost = {sessionUserInfo} />
                        :
                            <PostList passedPostOther = {post} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostList } from "./PostList";
import { CreatePostModal } from "./CreatePostModal";

export const MidBody = () => {
    const navigate = useNavigate();
    const [openCreatePostModal, setOpenCreatePostModal ] = useState(false);
    const sessionUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    return (
        <div className="mid-body-main">
            <div className="create-story">
                <div className="create-plus-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg" class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{ color: '#0866FF' }}>
                        <circle cx="50%" cy="50%" r="48%" fill="#EBF5FF" />
                        <path d="M18 11h-5V6a1 1 0 0 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z" fill="currentColor" />
                    </svg>
                </div>
                <div className="create-text">
                    <div className="create-text-h">
                        Create Story
                    </div>
                    <div className="create-story-p">
                        Share a photo or write something.
                    </div>
                </div>
            </div>
            <div className="create-post">
                <div className="create-post-r1">
                    <div className="create-post-pfp" onClick={() => navigate('/mainpage/profile')}>
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
                        What's on your mind, {sessionUserInfo.name}?
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
                        <img height="24" width="24" alt="" class="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png" />
                        <span className="create-post-activity-text">Feeling/activity</span>
                    </div>
                </div>
            </div>
            <div className="create-post-postlist">
                <PostList />
            </div>
        </div>
    )
}
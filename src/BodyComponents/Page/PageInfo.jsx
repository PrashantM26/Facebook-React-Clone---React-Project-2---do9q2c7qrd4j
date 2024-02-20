import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EssentialsContext } from "../../Context/EssentialsProvider";

export const PageInfo = () => {
    const { activePage } = useContext(EssentialsContext);
    console.log("active page",activePage);
    const navigate = useNavigate();

    return(
        <>
            {activePage ?
                <div className="page-info-main">
                    <div className="pgi-s1-main">
                        <div className="pgi-s1-top-text">
                            <h1>Manage Page</h1>
                            <div className="pgi-s1-icon">
                                <i
                                    data-visualcompletion="css-img"
                                    className="x1b0d499 xep6ejk"
                                    style={{
                                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/MqsTTpVec3H.png")',
                                        backgroundPosition: '0px -88px',
                                        backgroundSize: '22px 506px',
                                        width: '20px',
                                        height: '20px',
                                        backgroundRepeat: 'no-repeat',
                                        display: 'inline-block',
                                    }}
                                ></i>
                            </div>
                        </div>
                        <div className="pgi-s1-page-info">
                            <svg aria-label="Your profile" data-visualcompletion="ignore-dynamic" role="img" style={{ height: '40px', width: '40px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" >
                                <defs>
                                    <mask id="Rqir3aj9emhpapd5aq">
                                        <circle cx="20" cy="20" fill="white" r="20"></circle>
                                    </mask>
                                </defs>
                                <g mask="url(#Rqir3aj9emhpapd5aq)">
                                    <circle className="xbh8q5q x1pwv2dq xvlca1e" cx="20" cy="20" r="20" fill="#87D6E4"></circle>
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fill="#297491" fontWeight="bold">
                                        {activePage && activePage.name.charAt(0)}
                                    </text>
                                </g>
                            </svg>
                            <div className="pgi-s1-text">{activePage.name}</div>
                        </div>
                        <div className="pgi-s1-list">
                            <div className="pgi-s1-icon-text">
                                <img
                                    height="24"
                                    width="24"
                                    alt=""
                                    className="xz74otr xep6ejk"
                                    referrerpolicy="origin-when-cross-origin"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/LrVTh7bEQHz.png"
                                />
                                <div className="pgi-s1-text">
                                    Professsional dashboard
                                </div>
                            </div>
                            <div className="pgi-s1-icon-text">
                                <img
                                    height="24"
                                    width="24"
                                    alt=""
                                    className="xz74otr xep6ejk"
                                    referrerpolicy="origin-when-cross-origin"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/8hHFMHDEV4o.png"
                                />
                                <div className="pgi-s1-text">
                                    Insights
                                </div>
                            </div>
                            <div className="pgi-s1-icon-text">
                                <img
                                    height="24"
                                    width="24"
                                    alt=""
                                    className="xz74otr xep6ejk"
                                    referrerpolicy="origin-when-cross-origin"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/K-U-n5F-eH5.png"
                                />
                                <div className="pgi-s1-text">
                                    Ad Center
                                </div>
                            </div>
                            <div className="pgi-s1-icon-text">
                                <img
                                    height="24"
                                    width="24"
                                    alt=""
                                    className="xz74otr xep6ejk"
                                    referrerpolicy="origin-when-cross-origin"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/gluryC-P5uR.png"
                                />
                                <div className="pgi-s1-text">
                                    Create ads
                                </div>
                            </div>
                            <div className="pgi-s1-icon-text">
                                <img
                                    height="24"
                                    width="24"
                                    alt=""
                                    className="xz74otr xep6ejk"
                                    referrerpolicy="origin-when-cross-origin"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/AcrCJ83TJqX.png"
                                />
                                <div className="pgi-s1-text">
                                    Settings
                                </div>
                            </div>
                            <div className="pgi-s1-more-tools">
                                <div className="pgi-s1-more-tools-r1">
                                    <div className="pgi-s1-text">
                                        More tools
                                    </div>
                                    <i
                                        data-visualcompletion="css-img"
                                        className="x1b0d499 xep6ejk"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/MqsTTpVec3H.png")',
                                            backgroundPosition: '0px -186px',
                                            backgroundSize: '22px 506px',
                                            width: '16px',
                                            height: '16px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                        }}
                                    ></i>
                                </div>
                                <div className="pgi-s1-more-tools-r2">
                                    Manage your business across Meta apps
                                </div>
                            </div>
                            <div className="pgi-s1-icon-text">
                                <img
                                    height="24"
                                    width="24"
                                    alt=""
                                    className="xz74otr xep6ejk"
                                    referrerpolicy="origin-when-cross-origin"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/FE67f4IbGqN.png"
                                />
                                <div className="pgi-s1-text">
                                    Meta Business Suite
                                </div>
                            </div>
                        </div>
                        <div className="pgi-btn-above-line"></div>
                        <button className="pgi-btn">
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 xaj1gnb"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/X_51M3g2ohG.png")',
                                    backgroundPosition: '-22px -112px',
                                    backgroundSize: '42px 710px',
                                    width: '16px',
                                    height: '16px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                    WebkitFilter: 'invert(100%)',
                            }}
                            ></i>
                            Advertise
                        </button>
                    </div>
                    <div className="pgi-s2-main">
                        <div className="pgi-s2-info-section1">
                            <div className="pgi-info-s1-mid">
                                <div className="pgi-info-s1-mid1"></div>
                                    <div className="pgi-info-s1-mid2">
                                        <div className="pgi-info-s1-icons-container">
                                            <div className="pgi-info-s1-icon">
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
                                                <span className="pgi-info-s1-icon-text">
                                                    Create with avatar
                                                </span>
                                            </div>
                                            <div className="pgi-info-s1-icon">
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
                                                <span className="pgi-info-s1-icon-text">
                                                    Add cover Photo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                <div className="pgi-info-s1-mid3">
                                    <div className="pgi-main-icon">
                                        <svg aria-label="Your profile" data-visualcompletion="ignore-dynamic" role="img" style={{ height: '168px', width: '168px', borderRadius: '50%', overflow: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" >
                                            <defs>
                                                <mask id="Rqir3aj9emhpapd5aq">
                                                    <circle cx="20" cy="20" r="20" fill="white"></circle>
                                                </mask>
                                            </defs>
                                            <g mask="url(#Rqir3aj9emhpapd5aq)">
                                                <circle className="xbh8q5q x1pwv2dq xvlca1e" cx="20" cy="20" r="20" fill="#87D6E4"></circle>
                                                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fill="#297491" fontWeight="bold">
                                                    {activePage && activePage.name.charAt(0)}
                                                </text>
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
                                    <div className="pgi-main-icon-like-folower-text">
                                        <div className="pgi-main-icon-text"><h1>{activePage.name}</h1></div>
                                        <div className="pgi-like-follower-text">0 likes . 0 followers</div>
                                    </div>
                                    <div className="pgi-advertise-manage-edit">
                                        <div className="pgi-advertise">
                                            <img className="x1b0d499 xaj1gnb" src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/arSmdDAxf-Q.png" alt="" height="16" width="16" style={{ WebkitFilter: 'invert(100%)' }} />
                                            <div className="pgi-advertise-text">Advertise</div>
                                        </div>                           
                                        <div className="pgi-manage-edit">
                                            <img className="x1b0d499 xep6ejk" src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/zmBsOCLJzBR.png" alt="" height="16" width="16" />
                                            <div className="pgi-manage-edit-text">Manage</div>
                                        </div>
                                        <div className="pgi-manage-edit">
                                        <img className="x1b0d499 xep6ejk" src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/tmaz0VO75BB.png" alt="" height="16" width="16" />
                                            <div className="pgi-manage-edit-text">Edit</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pgi-for-border"></div>
                                <div className="pgi-options-more">
                                    <div className="pgi-options">
                                        <div>
                                            Posts
                                        </div>
                                        <div>
                                            About
                                        </div>
                                        <div>
                                            Mentions
                                        </div>
                                        <div>
                                            Reviews
                                        </div>
                                        <div>
                                            Followers
                                        </div>
                                        <div>
                                            Photos
                                        </div>
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
                                    <div className="pgi-more-icon">
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
                        <div className="pgi-s2-info-section2">
                            <div className="pgi-info-s2-mid">
                                <div className="pgi-info-s2-mid1">
                                    <div className="pgi-info-s2-intro">
                                        <span>Intro</span>
                                        <div className="pgi-intro">
                                            <span>Add Bio</span>
                                        </div>
                                        <div className="pgi-property-rated">
                                            <div>
                                                <img className="x1b0d499 xuo83w3" src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/XLGk7XTX1NS.png" alt="" height="20" width="20" style={{ WebkitFilter: 'invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%)' }} />
                                                <span className="pgi-property-text">Page&nbsp;<span className="pgi-property-rated-text">.&nbsp;Property</span></span>
                                            </div>
                                            <div>
                                                <img className="x1b0d499 xuo83w3" src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/99Irq0qq2iV.png" alt="" height="20" width="20" style={{ WebkitFilter: 'invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%)' }} />
                                                <span className="pgi-property-rated-text">Not yet rated (0 reviews)</span>
                                                <i
                                                    className="x1b0d499 x1d69dk1"
                                                    style={{
                                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/QkAcj1Z2AOT.png")',
                                                    backgroundPosition: '-44px -110px',
                                                    backgroundSize: '190px 172px',
                                                    width: '20px',
                                                    height: '20px',
                                                    backgroundRepeat: 'no-repeat',
                                                    display: 'inline-block',
                                                    WebkitFilter: 'invert(39%) sepia(21%) saturate(200%) saturate(109.5%) hue-rotate(174deg) brightness(94%) contrast(86%)',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="pgi-intro">
                                            <span>Edit details</span>
                                        </div>
                                        <div className="pgi-intro">
                                            <span>Add Featured</span>
                                        </div>
                                    </div>
                                    <div className="pgi-photo-friend">
                                        <div>Photos</div>
                                        <div>See All Photos</div>
                                    </div>
                                </div>
                                <div className="pgi-info-s2-mid2">
                                    <div className="create-post pgi-create-post">
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
                                            <div className="create-post-create" /*onClick={() => setOpenCreatePostModal(true)}*/ >
                                                What's on your mind?
                                            </div>
                                            {/*openCreatePostModal && <CreatePostModal setModalClose={setOpenCreatePostModal}/>*/}
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
                                            <img height="24" width="24" alt="" className="xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/eQV2iXPmmtj.png" />
                                                <span className="create-post-activity-text">Reel</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pgi-post-options">
                                        <div className="pgi-post-options-r1">
                                            <div className="pgi-post-text">
                                                Posts
                                            </div>
                                            <div className="pgi-post-filter-manage">
                                                <div className="pgi-post-filter">
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
                                                <div className="pgi-post-manage">
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
                                            </div>
                                        </div>
                                        <div className="pgi-post-options-r2">
                                            <div className="pgi-post-list-view">
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
                                            <div className="pgi-post-grid-view">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            :
                navigate('/mainpage/profile')
            }
        </>
    )
}
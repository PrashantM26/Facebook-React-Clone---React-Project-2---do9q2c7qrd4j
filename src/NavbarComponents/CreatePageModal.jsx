import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EssentialsContext } from "../Context/EssentialsProvider";

export const CreatePageModal = ({ setOpenCreatePageModal }) => {
    const navigate = useNavigate();
    const { activePage } = useContext(EssentialsContext);
    const sessionUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    return(
        <div className="cpgm-main">
            <div className="cpgm-profile">
                <div className="cpgm-prof">
                    <div className="cpgm-main-text">{!activePage ? 'Profile' : 'Page'}</div>
                    {!activePage ?
                        <div className="cpgm-op cpgm-op-prof" onClick={() => {navigate("/mainpage/profile"); setOpenCreatePageModal(false)}}>
                            <svg aria-label="Your profile" data-visualcompletion="ignore-dynamic" role="img" style={{ height: '34px', width: '34px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" >
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
                            <span className="cpgm-op-text">{sessionUserInfo.name}</span>
                        </div>
                    :
                        <div className="cpgm-op cpgm-op-prof" onClick={() => {navigate("/mainpage/pageinfo"); setOpenCreatePageModal(false)}}>
                            <svg aria-label="Your profile" data-visualcompletion="ignore-dynamic" role="img" style={{ height: '40px', width: '40px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" >
                                <defs>
                                    <mask id="Rqir3aj9emhpapd5aq">
                                        <circle cx="20" cy="20" fill="white" r="20"></circle>
                                    </mask>
                                </defs>
                                <g mask="url(#Rqir3aj9emhpapd5aq)">
                                    <circle className="xbh8q5q x1pwv2dq xvlca1e" cx="20" cy="20" r="20" fill="#87D6E4"></circle>
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fill="#297491" fontWeight="bold">
                                        {activePage.name.charAt(0)}
                                    </text>
                                </g>
                            </svg>
                            <span className="side-op-text">{activePage.name}</span>
                        </div>
                    }
                </div>
            </div>
            <div className="cpgm-create">
                <div className="cpgm-main-text">Create</div>
                <div className="cpgm-op cpgm-op-selected" onClick={() => {navigate('/mainpage/pagecreate'); setOpenCreatePageModal(false)}}>
                    <div className="cpgm-op-icon">
                        <i
                            data-visualcompletion="css-img"
                            className="x1b0d499 xep6ejk"
                            style={{
                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/om-GbHrwDpU.png")',
                                backgroundPosition: '0px -224px',
                                backgroundSize: '26px 464px',
                                width: '20px',
                                height: '20px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                                WebkitFilter: 'invert(8%) sepia(10%) saturate(200%) saturate(200%) saturate(166%) hue-rotate(177deg) brightness(104%) contrast(91%)',
                            }}
                        ></i>
                    </div>
                    <div className="cpgm-op-text">Page</div>
                </div>
                <div className="cpgm-op">
                    <div className="cpgm-op-icon">
                        <i
                            data-visualcompletion="css-img"
                            className="x1b0d499 xep6ejk"
                            style={{
                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/g_Q2zaDjS8p.png")',
                                backgroundPosition: '0px -562px',
                                backgroundSize: '34px 836px',
                                width: '20px',
                                height: '20px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                                WebkitFilter: 'invert(8%) sepia(10%) saturate(200%) saturate(200%) saturate(166%) hue-rotate(177deg) brightness(104%) contrast(91%)',
                            }}
                        ></i>
                    </div>
                    <div className="cpgm-op-text">Story</div>
                </div>
                <div className="cpgm-op">
                    <div className="cpgm-op-icon">
                        <i
                            data-visualcompletion="css-img"
                            className="x1b0d499 xep6ejk"
                            style={{
                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/om-GbHrwDpU.png")',
                                backgroundPosition: '0px -48px',
                                backgroundSize: '26px 464px',
                                width: '20px',
                                height: '20px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                                WebkitFilter: 'invert(8%) sepia(10%) saturate(200%) saturate(200%) saturate(166%) hue-rotate(177deg) brightness(104%) contrast(91%)',
                            }}
                        ></i>
                    </div>
                    <div className="cpgm-op-text">Reel</div>
                </div>
                <div className="cpgm-op">
                    <div className="cpgm-op-icon">
                        <i
                            data-visualcompletion="css-img"
                            className="x1b0d499 xep6ejk"
                            style={{
                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/3Vs9JmmKkhn.png")',
                                backgroundPosition: '0px -160px',
                                backgroundSize: '38px 240px',
                                width: '20px',
                                height: '20px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                                WebkitFilter: 'invert(8%) sepia(10%) saturate(200%) saturate(200%) saturate(166%) hue-rotate(177deg) brightness(104%) contrast(91%)',
                            }}
                        ></i>
                    </div>
                    <div className="cpgm-op-text">Life Event</div>
                </div>
                <div style={{border: '1px solid #dadde1', width: '100%'}}></div>
                <div className="cpgm-op">
                    <div className="cpgm-op-icon">
                        <i
                            data-visualcompletion="css-img"
                            className="x1b0d499 xep6ejk"
                            style={{
                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/3Vs9JmmKkhn.png")',
                                backgroundPosition: '0px -182px',
                                backgroundSize: '38px 240px',
                                width: '20px',
                                height: '20px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                                WebkitFilter: 'invert(8%) sepia(10%) saturate(200%) saturate(200%) saturate(166%) hue-rotate(177deg) brightness(104%) contrast(91%)',
                            }}
                        ></i>
                    </div>
                    <div className="cpgm-op-text">Ad</div>
                </div>
                <div className="cpgm-op">
                    <div className="cpgm-op-icon">
                        <i
                            data-visualcompletion="css-img"
                            className="x1b0d499 xep6ejk"
                            style={{
                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/p63XwOSPg9_.png")',
                                backgroundPosition: '0px -126px',
                                backgroundSize: '26px 752px',
                                width: '20px',
                                height: '20px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                                WebkitFilter: 'invert(8%) sepia(10%) saturate(200%) saturate(200%) saturate(166%) hue-rotate(177deg) brightness(104%) contrast(91%)',
                            }}
                        ></i>
                    </div>
                    <div className="cpgm-op-text">Group</div>
                </div>
                <div className="cpgm-op">
                    <div className="cpgm-op-icon">
                        <i
                            data-visualcompletion="css-img"
                            className="x1b0d499 xep6ejk"
                            style={{
                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/g_Q2zaDjS8p.png")',
                                backgroundPosition: '0px -56px',
                                backgroundSize: '34px 836px',
                                width: '20px',
                                height: '20px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                                WebkitFilter: 'invert(8%) sepia(10%) saturate(200%) saturate(200%) saturate(166%) hue-rotate(177deg) brightness(104%) contrast(91%)',
                            }}
                        ></i>
                    </div>
                    <div className="cpgm-op-text">Event</div>
                </div>
            </div>
        </div>
    )
}
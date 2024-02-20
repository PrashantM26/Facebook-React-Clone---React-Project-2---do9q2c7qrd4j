import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EssentialsContext } from "../../Context/EssentialsProvider";

export const SideOptions = () => {
    const { activePage } = useContext(EssentialsContext);
    const sessionUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const navigate = useNavigate();

    return (
        <div className="side-options-main">
            {!activePage ?
                <div className="side-op" onClick={() => navigate("/mainpage/profile")}>
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
                    <span className="side-op-text">{sessionUserInfo.name}</span>
                </div>
            :
                <>
                    <div className="side-op" onClick={() => navigate("/mainpage/pageinfo")}>
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
                    <div className="side-op">
                        <img draggable="false" height="36" width="36" alt="" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/tx2VFwUKc-K.png" />
                        <span className="side-op-text">Ads Manager</span>
                    </div>
                    <div className="side-op">
                        <img draggable="false" height="36" width="36" alt="" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_JPdPzLmp9j.png" />
                        <span className="side-op-text">Ad Center</span>
                    </div>
                    <div className="side-op">
                        <svg aria-hidden="true" className="x3ajldb" data-visualcompletion="ignore-dynamic" role="none" style={{ height: '36px', width: '36px' }}>
                            <mask id="imageMask" fill="white">
                                <rect width="100%" height="100%" rx="8" ry="8" />
                            </mask>
                            <g mask="url(#imageMask)">
                                <image x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" href="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/9iacGJP1ses.png" />
                                <rect className="xbh8q5q x1pwv2dq xvlca1e" width="100%" height="100%" rx="8" ry="8" fill="transparent" stroke="#D5D6D9"   strokeWidth="2" />
                            </g>
                        </svg>
                        <span className="side-op-text">Meta Business Suite</span>
                    </div>
                    <div className="side-op">
                        <img draggable="false" height="36" width="36" alt="" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/BY715y2iJTS.png" />
                        <span className="side-op-text">Professional dashboard</span>
                    </div>
                    <div style={{ borderBottom: '1px solid #ced0d4' }}></div>
                    <div className="side-op">
                        <div className="side-op-text-suggested">
                            Suggested
                        </div>
                    </div>
                    <div className="side-op">
                        <img draggable="false" height="36" width="36" alt="" className="xz74otr" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png" />
                        <span className="side-op-text">Feeds</span>
                    </div>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" className=""
                            style={{
                                backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')",
                                backgroundPosition: '0 -38px',
                                backgroundSize: '32px 570px',
                                width: '32px',
                                height: '32px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}>
                        </i>
                        <span className="side-op-text">Groups</span>
                    </div>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" className=""
                            style={{
                                backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')",
                                backgroundPosition: '0 -532px',
                                backgroundSize: '32px 570px',
                                width: '32px',
                                height: '32px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}>
                        </i>
                        <span className="side-op-text">Video</span>
                    </div>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" className=""
                            style={{
                                backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')",
                                backgroundPosition: '0px -456px',
                                backgroundSize: '38px 570px',
                                width: '36px',
                                height: '36px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block'
                            }}>
                        </i>
                        <span className="side-op-text">Memories</span>
                    </div>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" className=""
                            style={{
                                backgroundImage:
                                "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')",
                                backgroundPosition: '0 -190px',
                                backgroundSize: '32px 570px',
                                width: '32px',
                                height: '32px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}>
                        </i>
                        <span className="side-op-text">Saved</span>
                    </div>
                </>
            }
            {!activePage &&
                <>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" className=""
                            style={{
                                backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')",
                                backgroundPosition: '0 -304px',
                                backgroundSize: '32px 570px',
                                width: '32px',
                                height: '32px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}>
                        </i>
                        <span className="side-op-text">Find friends</span>
                    </div>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" class="" 
                            style={{
                                backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')", 
                                backgroundPosition: '0 -114px', 
                                backgroundSize: '32px 570px', 
                                width: '32px', 
                                height: '32px', 
                                backgroundRepeat: 'no-repeat', 
                                display: 'inline-block'
                            }}>
                        </i>
                        <span className="side-op-text">Pages</span>
                    </div>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" class="" 
                            style={{
                                backgroundImage:
                                "url('https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/vV4w4OL9xUs.png')",
                                backgroundPosition: '0 0',
                                backgroundSize: '32px 38px',
                                width: '32px',
                                height: '32px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}>
                        </i>
                        <span className="side-op-text">Welcome</span>
                    </div>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" className=""
                            style={{
                                backgroundImage:
                                "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')",
                                backgroundPosition: '0 -190px',
                                backgroundSize: '32px 570px',
                                width: '32px',
                                height: '32px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}>
                        </i>
                        <span className="side-op-text">Saved</span>
                    </div>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" className=""
                            style={{
                                backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')",
                                backgroundPosition: '0 -38px',
                                backgroundSize: '32px 570px',
                                width: '32px',
                                height: '32px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}>
                        </i>
                        <span className="side-op-text">Groups</span>
                    </div>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" className=""
                            style={{
                                backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')",
                                backgroundPosition: '0 -532px',
                                backgroundSize: '32px 570px',
                                width: '32px',
                                height: '32px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}>
                        </i>
                        <span className="side-op-text">Video</span>
                    </div>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" className=""
                            style={{
                                backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')",
                                backgroundPosition: '0 -418px',
                                backgroundSize: '32px 570px',
                                width: '32px',
                                height: '32px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}>
                        </i>
                        <span className="side-op-text">Marketplace</span>
                    </div>
                    <div className="side-op">
                        <img draggable="false" height="36" width="36" alt="" className="xz74otr" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png" />
                        <span className="side-op-text">Feeds</span>
                    </div>
                    <div className="side-op">
                        <i data-visualcompletion="css-img" className=""
                            style={{
                                backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/vWSUA-u7jLw.png')",
                                backgroundPosition: '0 -38px',
                                backgroundSize: '32px 76px',
                                width: '32px',
                                height: '32px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}>
                        </i>
                        <span className="side-op-text">Events</span>
                    </div>
                </>
            }
            <div className="side-op">
                <svg width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq">
                    <circle cx="8" cy="8" r="8" fill="#E4E6EB" />
                    <g transform="translate(-448 -544)">
                        <path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z" fill="currentColor" />
                    </g>
                </svg>
                <span className="side-op-text">See more</span>
            </div>
        </div>
    )
}
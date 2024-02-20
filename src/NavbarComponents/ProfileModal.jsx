import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EssentialsContext } from "../Context/EssentialsProvider";

export const ProfileModal = ({setOpenProfileModal}) => {
    const navigate = useNavigate();
    const { activePage, setActivePage } = useContext(EssentialsContext);
    const sessionUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const [selectedPage, setSelectedPage] = useState({});
    const [pageList, setPageList] = useState([]);
    //const localPageInfo = JSON.parse(localStorage.getItem(sessionUserInfo._id));
    //console.log(localPageInfo);

    const handleLogout = () => {
        sessionStorage.clear();
        setOpenProfileModal(false);
        navigate('/');
    }

    useEffect(() => {
        fetch(`https://academics.newtonschool.co/api/v1/facebook/channel?limit=50`, {
            headers: {
                projectID: 'ktu17k7gadkn',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            //setPageList(data.data);
            let pageData = data.data;
            pageData = pageData.filter((page) => (
                page.owner._id === sessionUserInfo._id
            )).slice(0, 5);
            pageData.length>0 && setPageList(pageData);
        })
        .catch((error) => {
            console.log("Error in fetching channel list", error);
        })
    }, [])

    const handleSelectedPage = (index) => {
        setSelectedPage((prev) => {
            const newState = Object.fromEntries(Object.keys(prev).map(key => [key, false]));
            newState[index] = !prev[index];
            return newState;
        })
    }

    console.log("selectedPage:  ", selectedPage);

    return(
        <div className="profile-modal">
            <div className="prm-profile-page-container">
                <div className="prm-profile" onClick={() => {setActivePage(''); setOpenProfileModal(false)}}>
                {activePage ?
                        /*<svg viewBox="0 0 20 20" width="32" height="32" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{ 'color': '#65676b', transitionProperty: 'color, fill, stroke', transitionTimingFunction: 'cubic-bezier(.08, .52, .52, 1)', transitionDuration: '200ms', }}>
                            <g fillRule="evenodd" transform="translate(-446 -398)">
                                <g fillRule="nonzero">
                                    <path d="M96.628 206.613A7.97 7.97 0 0 1 96 203.5a7.967 7.967 0 0 1 2.343-5.657A7.978 7.978 0 0 1 104 195.5a7.978 7.978 0 0 1 5.129 1.86.75.75 0 0 0 .962-1.15A9.479 9.479 0 0 0 104 194a9.478 9.478 0 0 0-6.717 2.783A9.467 9.467 0 0 0 94.5 203.5a9.47 9.47 0 0 0 .747 3.698.75.75 0 1 0 1.381-.585zm14.744-6.226A7.97 7.97 0 0 1 112 203.5a7.967 7.967 0 0 1-2.343 5.657A7.978 7.978 0 0 1 104 211.5a7.978 7.978 0 0 1-5.128-1.86.75.75 0 0 0-.962 1.152A9.479 9.479 0 0 0 104 213a9.478 9.478 0 0 0 6.717-2.783 9.467 9.467 0 0 0 2.783-6.717 9.47 9.47 0 0 0-.747-3.698.75.75 0 1 0-1.381.585z" transform="translate(352 204.5)"></path>
                                    <path d="M109.5 197h-2.25a.75.75 0 1 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 1 0-1.5 0V197zm-11 13h2.25a.75.75 0 1 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 1 0 1.5 0V210z" transform="translate(352 204.5)"></path>
                                </g>
                            </g>
                            <defs>
                                <mask id="Rqir3aj9emhpapd5aq">
                                    <circle cx="20" cy="20" fill="white" r="20"></circle>
                                </mask>
                            </defs>
                            <g mask="url(#Rqir3aj9emhpapd5aq)">
                                <circle className="xbh8q5q x1pwv2dq xvlca1e" cx="20" cy="20" r="20" fill="#2aa4f4"></circle>
                                <image style={{ height: '40px', width: '40px' }} x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xlinkHref="https://scontent.fbom38-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=2b6aad&amp;_nc_ohc=FaPLa6I4CdUAX8BuYp0&amp;_nc_ht=scontent.fbom38-1.fna&amp;oh=00_AfDNq-CnUsejggdUkR8-trVtQxzBFxty1LqmzMEErZ4fGw&amp;oe=65BC91F8" />
                            </g>
                        </svg>*/

                        <div style={{ position: 'relative', width: '40px', height: '40px' }}>
                            <svg viewBox="0 0 20 20" width="32" height="32" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{ 'color': '#65676b', transitionProperty: 'color, fill, stroke', transitionTimingFunction: 'cubic-bezier(.08, .52, .52, 1)', transitionDuration: '200ms', }}>
                                <g fillRule="evenodd" transform="translate(-446 -398)">
                                    <g fillRule="nonzero">
                                        <path d="M96.628 206.613A7.97 7.97 0 0 1 96 203.5a7.967 7.967 0 0 1 2.343-5.657A7.978 7.978 0 0 1 104 195.5a7.978 7.978 0 0 1 5.129 1.86.75.75 0 0 0 .962-1.15A9.479 9.479 0 0 0 104 194a9.478 9.478 0 0 0-6.717 2.783A9.467 9.467 0 0 0 94.5 203.5a9.47 9.47 0 0 0 .747 3.698.75.75 0 1 0 1.381-.585zm14.744-6.226A7.97 7.97 0 0 1 112 203.5a7.967 7.967 0 0 1-2.343 5.657A7.978 7.978 0 0 1 104 211.5a7.978 7.978 0 0 1-5.128-1.86.75.75 0 0 0-.962 1.152A9.479 9.479 0 0 0 104 213a9.478 9.478 0 0 0 6.717-2.783 9.467 9.467 0 0 0 2.783-6.717 9.47 9.47 0 0 0-.747-3.698.75.75 0 1 0-1.381.585z" transform="translate(352 204.5)"></path>
                                        <path d="M109.5 197h-2.25a.75.75 0 1 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 1 0-1.5 0V197zm-11 13h2.25a.75.75 0 1 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 1 0 1.5 0V210z" transform="translate(352 204.5)"></path>
                                    </g>
                                </g>
                            </svg>
                            <svg aria-label="Your profile" data-visualcompletion="ignore-dynamic" role="img" style={{ height: '20px', width: '20px', position: 'absolute', top: '40%', left: '40%', transform: 'translate(-50%, -50%)' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" >
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
                    :
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
                    }
                    <div className="prm-profile-text">
                        {sessionUserInfo.name}
                    </div>
                </div>
                <div className="prm-hr-line">
                    <hr></hr>
                </div>
                {pageList.length>0 && pageList.map((page, index) => (
                    <div className="prm-page" onClick={() => {setActivePage(page); setOpenProfileModal(false)}}>
                        <svg viewBox="0 0 20 20" width="32" height="32" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{ 'color': '#65676b', transitionProperty: 'color, fill, stroke', transitionTimingFunction: 'cubic-bezier(.08, .52, .52, 1)', transitionDuration: '200ms', }}>
                            {page._id !== activePage._id ?
                                <>
                                    <g fillRule="evenodd" transform="translate(-446 -398)">
                                        <g fillRule="nonzero">
                                            <path d="M96.628 206.613A7.97 7.97 0 0 1 96 203.5a7.967 7.967 0 0 1 2.343-5.657A7.978 7.978 0 0 1 104 195.5a7.978 7.978 0 0 1 5.129 1.86.75.75 0 0 0 .962-1.15A9.479 9.479 0 0 0 104 194a9.478 9.478 0 0 0-6.717 2.783A9.467 9.467 0 0 0 94.5 203.5a9.47 9.47 0 0 0 .747 3.698.75.75 0 1 0 1.381-.585zm14.744-6.226A7.97 7.97 0 0 1 112 203.5a7.967 7.967 0 0 1-2.343 5.657A7.978 7.978 0 0 1 104 211.5a7.978 7.978 0 0 1-5.128-1.86.75.75 0 0 0-.962 1.152A9.479 9.479 0 0 0 104 213a9.478 9.478 0 0 0 6.717-2.783 9.467 9.467 0 0 0 2.783-6.717 9.47 9.47 0 0 0-.747-3.698.75.75 0 1 0-1.381.585z" transform="translate(352 204.5)"></path>
                                            <path d="M109.5 197h-2.25a.75.75 0 1 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 1 0-1.5 0V197zm-11 13h2.25a.75.75 0 1 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 1 0 1.5 0V210z" transform="translate(352 204.5)"></path>
                                        </g>
                                    </g>
                                    <circle cx="50%" cy="50%" r="6" fill="grey" />
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="8" fill="black" fontWeight="bold">
                                        {page.name.charAt(0)}
                                    </text>
                                </>
                            :
                                <>
                                    <circle cx="50%" cy="50%" r="9" fill="grey" />
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="11" fill="black" fontWeight="bold">
                                        {page.name.charAt(0)}
                                    </text>
                                </>
                            }
                        </svg>
                        <div className="prm-page-text">
                            {page.name}
                        </div>
                    </div>
                ))}
                <div className="prm-hr-line">
                    <hr></hr>
                </div>
                <div className="prm-see-all-profiles">
                    <i
                        data-visualcompletion="css-img"
                        className="x1b0d499 xep6ejk"
                        style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/RJ2gJMyPGF8.png")',
                        backgroundPosition: '0px -312px',
                        backgroundSize: '26px 330px',
                        width: '16px',
                        height: '16px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        }}
                    ></i>
                    <div className="prm-see-all-profiles-text">
                        See all profiles
                    </div>
                </div>
            </div>
            <div className="prm-op">
                <div className="prm-op-icon">
                    <i
                        data-visualcompletion="css-img"
                        className="x1b0d499 xep6ejk"
                        style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/1gFkxZXWOU8.png")',
                        backgroundPosition: '0px -556px',
                        backgroundSize: '26px 972px',
                        width: '20px',
                        height: '20px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        }}
                    ></i>
                </div>
                <div className="prm-op-text-more">
                    <div>Settings & privacy</div>
                    <i
                        data-visualcompletion="css-img"
                        className="x1b0d499 x1d69dk1"
                        style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/k4PNasG2EFB.png")',
                        backgroundPosition: '0px -26px',
                        backgroundSize: '26px 562px',
                        width: '24px',
                        height: '24px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        }}
                    ></i>
                </div>
            </div>
            <div className="prm-op">
                <div className="prm-op-icon">
                    <i
                        data-visualcompletion="css-img"
                        className="x1b0d499 xep6ejk"
                        style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/RJ2gJMyPGF8.png")',
                        backgroundPosition: '0px -202px',
                        backgroundSize: '26px 330px',
                        width: '20px',
                        height: '20px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        }}
                    ></i>
                </div>
                <div className="prm-op-text-more">
                    <div>Help & support</div>
                    <i
                        data-visualcompletion="css-img"
                        className="x1b0d499 x1d69dk1"
                        style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/k4PNasG2EFB.png")',
                        backgroundPosition: '0px -26px',
                        backgroundSize: '26px 562px',
                        width: '24px',
                        height: '24px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        }}
                    ></i>
                </div>
            </div>
            <div className="prm-op">
                <div className="prm-op-icon">
                    <i
                        data-visualcompletion="css-img"
                        className="x1b0d499 xep6ejk"
                        style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/nLozqnlSfVI.png")',
                        backgroundPosition: '0px -364px',
                        backgroundSize: '34px 724px',
                        width: '20px',
                        height: '20px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        }}
                    ></i>
                </div>
                <div className="prm-op-text-more">
                    <div>Display & accessibility</div>
                    <i
                        data-visualcompletion="css-img"
                        className="x1b0d499 x1d69dk1"
                        style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/k4PNasG2EFB.png")',
                        backgroundPosition: '0px -26px',
                        backgroundSize: '26px 562px',
                        width: '24px',
                        height: '24px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        }}
                    ></i>
                </div>
            </div>
            <div className="prm-op">
                <div className="prm-op-icon">
                    <i
                        data-visualcompletion="css-img"
                        className="x1b0d499 xep6ejk"
                        style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/RJ2gJMyPGF8.png")',
                        backgroundPosition: '0px -70px',
                        backgroundSize: '26px 330px',
                        width: '20px',
                        height: '20px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        }}
                    ></i>
                </div>
                <div className="prm-op-text-more">
                    <div>Give feedback</div>
                    <i
                        data-visualcompletion="css-img"
                        className="x1b0d499 x1d69dk1"
                        style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/k4PNasG2EFB.png")',
                        backgroundPosition: '0px -26px',
                        backgroundSize: '26px 562px',
                        width: '24px',
                        height: '24px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        }}
                    ></i>
                </div>
            </div>
            <div className="prm-op prm-logout" onClick={handleLogout}>
                <div className="prm-op-icon">
                    <i
                        data-visualcompletion="css-img"
                        className="x1b0d499 xep6ejk"
                        style={{
                        backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/sK4D_SM6dVi.png")',
                        backgroundPosition: '0px -244px',
                        backgroundSize: '42px 706px',
                        width: '20px',
                        height: '20px',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block',
                        }}
                    ></i>
                </div>
                <div className="prm-op-text-more">
                    <div>Log out</div>
                </div>
            </div>
        </div>
    )
}
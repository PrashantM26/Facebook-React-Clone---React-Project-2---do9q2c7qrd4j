import React, {useState, useContext, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ProfileModal } from './ProfileModal';
import { CreatePageModal } from './CreatePageModal';
import { EssentialsContext } from '../Context/EssentialsProvider';
import './Navbar.css';

export const Navbar = () => {
    const navigate = useNavigate();
    const [openProfileModal, setOpenProfileModal] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [openSearchInput, setOpenSearchInput] = useState(false);
    const [openCreatePageModal, setOpenCreatePageModal] = useState(false);
    const { searchData, setSearchData, activePage } = useContext(EssentialsContext);
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const config = {
                    headers: {
                        projectID: 'ktu17k7gadkn',
                    },
                }
                const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/post?filter={"content":"${searchInput}"}`,
                    config,
                )
                const data = await response.json();
                data && setSearchData(data.data);
            }
            catch(err){
                console.log("Error in fetching search results: ", err);
            }
        }
        handleSearch();
    }, [searchInput])

    const handleSearchOpened = () => {
        setOpenSearchInput(!openSearchInput)
    }

    console.log(openSearchInput)

    return(
        <div className='navbar-container'>
            <div className='icon-search-nav'>
            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" fill="#1877F2">
                <path d="M21.35 2H2.65C1.52 2 0.635 2.895 0.635 4.018L0.625 19.985C0.625 21.108 1.52 22 2.645 22H12V14.118H9.352V11H12V8.744C12 5.852 13.77 4 16.519 4C17.845 4 18.74 4.116 19.12 4.167V7.096H17.391C15.98 7.096 15.697 7.768 15.697 8.768V11H18.739L18.34 14.118H15.697V22H21.352C22.485 22 23.365 21.105 23.365 19.982V4.018C23.365 2.895 22.484 2 21.35 2Z"/>
            </svg>*/}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet" className={`${openSearchInput && 'icon-search-nav-svg'}`} style={{cursor: 'not-allowed'}} onClick={() => navigate('/mainpage/homepage')}>
                    <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#2aa4f4"></stop>
                        <stop offset="1" stop-color="#007ad9"></stop>
                    </linearGradient>
                    <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                    <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                </svg>
            
                <label className={`search-nav-label ${openSearchInput && 'search-nav-label-full'}`}>
                    <span className="search-nav-svg-container">
                        <svg viewBox="0 0 16 16" width="16" height="16" fill="#65676B" className={`magnify-icon-navbar ${openSearchInput && 'magnify-icon-hide'}`}>
                            <g fill-rule="evenodd" transform="translate(-448 -544)">
                                <g fill-rule="nonzero">
                                    <path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path>
                                    <path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path>
                                    <path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path>
                                    <path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path>
                                </g>
                            </g>
                        </svg>
                    </span>
                    <input dir="ltr" className="search-input-nav" aria-autocomplete="list" aria-expanded="false" aria-label="Search Facebook" role="combobox" placeholder="Search Facebook" autocomplete="off" spellcheck="false" aria-invalid="false" type="search" value={searchInput} onFocus={() => setOpenSearchInput(!openSearchInput)} onBlur={() => setOpenSearchInput(!openSearchInput)} onClick={() => navigate("search")} onChange={(e) => setSearchInput(e.target.value)} />
                </label>
            </div>

            <div className="nav-midIcon-container">
                <div className={currentPath === '/mainpage/homepage' ? `nav-home-button-blue-underline` : ''} onClick={() => navigate("homepage")}>
                    {currentPath === '/mainpage/homepage' ?
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ 'color': '#0866ff' }}>
                            <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path>
                        </svg>
                    :
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{ 'color': '#65676b' }}>
                            <path d="M8.99 23H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H8.99zM7.8 4.9l-2 1.5C4.15 7.638 3.61 8.074 3.317 8.658 3.025 9.242 3 9.937 3 12v4c0 1.442.002 2.424.101 3.159.095.706.262 1.033.485 1.255.223.223.55.39 1.256.485.734.099 1.716.1 3.158.1V14.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5V21c1.443 0 2.424-.002 3.159-.101.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.256.099-.734.101-1.716.101-3.158v-4c0-2.063-.025-2.758-.317-3.342-.291-.584-.832-1.02-2.483-2.258l-2-1.5c-1.174-.881-1.987-1.489-2.67-1.886C12.87 2.63 12.425 2.5 12 2.5c-.425 0-.87.13-1.53.514-.682.397-1.495 1.005-2.67 1.886zM14 21v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h4z"></path>
                        </svg>
                    }
                </div>
                {!activePage ?
                    <>
                        <div>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ 'color': '#65676b' }} >
                                <path d="M8 2.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zM5.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-.25 6A4.75 4.75 0 0 0 .5 17.75 3.25 3.25 0 0 0 3.75 21h8.5a3.25 3.25 0 0 0 3.25-3.25A4.75 4.75 0 0 0 10.75 13h-5.5zM2.5 17.75A2.75 2.75 0 0 1 5.25 15h5.5a2.75 2.75 0 0 1 2.75 2.75c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25zM14 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM17.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 6.5a1 1 0 1 0 0 2h2.3a1.7 1.7 0 0 1 1.7 1.7.8.8 0 0 1-.8.8h-3.2a1 1 0 1 0 0 2h3.2a2.8 2.8 0 0 0 2.8-2.8 3.7 3.7 0 0 0-3.7-3.7h-2.3z"></path>
                            </svg>
                        </div>
                        <div>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{ 'color': '#65676b' }} >
                                <path d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path><path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z"></path>
                            </svg>
                        </div>
                    </>
                :
                    <>
                        <div>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{ 'color': '#65676b' }} >
                                <path d="M7 10a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3H7zm8 0h2v7h-2v-7zm-2-3v10h-2V7h2zm-4 5v5H7v-5h2z"></path>
                                <path d="M14.073 1H9.927c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31-.802.802-1.147 1.813-1.309 3.013C1 6.634 1 8.103 1 9.927v4.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.634 23 8.103 23 9.927 23h4.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449V9.927c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.366 1 15.897 1 14.073 1zM3.88 3.879c.369-.37.887-.61 1.865-.741C6.751 3.002 8.086 3 10 3h4c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866C20.998 6.751 21 8.086 21 10v4c0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-4c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C3.002 17.249 3 15.914 3 14v-4c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865z"></path>
                            </svg>
                        </div>
                        <div>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq" style={{ 'color': '#65676b' }}>
                                    <path d="M23 3.585c0-1.92-2.074-3.123-3.74-2.17l-6.412 3.663A7 7 0 0 1 9.375 6H5.5a5 5 0 0 0-.823 9.933l1.091 5.09A2.5 2.5 0 0 0 8.213 23H8.5a2.5 2.5 0 0 0 2.5-2.5v-4.309a7 7 0 0 1 1.848.731l6.412 3.664c1.666.952 3.74-.251 3.74-2.17V3.584zm-2.748-.434a.5.5 0 0 1 .748.434v14.83a.5.5 0 0 1-.748.434l-6.411-3.663A9 9 0 0 0 9.375 14H5.5a3 3 0 1 1 0-6h3.875a9 9 0 0 0 4.466-1.186l6.41-3.663zM9 16v4.5a.5.5 0 0 1-.5.5h-.287a.5.5 0 0 1-.49-.395L6.738 16H9z"></path>
                            </svg>
                        </div>
                    </>

                }
            </div>
            <div className="nav-leftIcon-container">
                <div className="nav-find-friends">
                    <span>
                        Find friends
                    </span>    
                </div>
                <div className="nav-gridIcon-more" onClick={() => {setOpenCreatePageModal(!openCreatePageModal);setOpenProfileModal(false)}}>
                    <span>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{color: openCreatePageModal ? '#0866ff' : '#050505'}}>
                            <path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                        </svg>
                    </span>
                </div>
                <div className="nav-messenger-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" >
                        <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path>
                    </svg>
                </div>
                <div className="nav-notification">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" >
                        <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path>
                    </svg>
                </div>
                <div className="nav-account-icon" onClick={() => {setOpenProfileModal(!openProfileModal);setOpenCreatePageModal(false)}}>
                    {/*<svg aria-label="Your profile" class="x3ajldb" data-visualcompletion="ignore-dynamic" role="img" style="height:40px;width:40px">
                        <mask id=":Rqir3aj9emhpapd5aq:">
                            <circle cx="20" cy="20" fill="white" r="20"></circle>
                        </mask>
                        <g mask="url(#:Rqir3aj9emhpapd5aq:)">
                            <image style="height:40px;width:40px" x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xlink:href="https://scontent.fbom38-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=2b6aad&amp;_nc_ohc=FaPLa6I4CdUAX8BuYp0&amp;_nc_ht=scontent.fbom38-1.fna&amp;oh=00_AfDNq-CnUsejggdUkR8-trVtQxzBFxty1LqmzMEErZ4fGw&amp;oe=65BC91F8">
                            </image>
                            <circle class="xbh8q5q x1pwv2dq xvlca1e" cx="20" cy="20" r="20"></circle>
                        </g>
                    </svg>*/}
                    {!activePage ?
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
                    :
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
                    }
                    
                </div>
            </div>
            {openProfileModal && <ProfileModal setOpenProfileModal={setOpenProfileModal} />}
            {openCreatePageModal && <CreatePageModal setOpenCreatePageModal={setOpenCreatePageModal} />}
        </div>
    )
}
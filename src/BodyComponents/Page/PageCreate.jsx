import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Page.css';

export const PageCreate = () => {
    const navigate = useNavigate();
    const [pageCreateInput, setPageCreateInput] = useState({ pageName: '', category: '', bio: '' });
    const [pageInputActive, setPageInputActive] = useState({ pageName: false, category: false, bio: false });
    //const [pageList, setPageList] = useState([]);
    const token = JSON.parse(sessionStorage.getItem("token"));
    //const sessionUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));

    const handlePageCreateInput = (e, type) => {
        const val = e.target.value;
        setPageCreateInput((prev) => ({
            ...prev,
            [type]: val,
        }))
    }

    const handlePageInputActive = (type) => {
        if(!pageCreateInput[type].trim()){
            setPageInputActive((prev) => ({
                ...prev,
                [type]: !prev[type]
            }))
        }
    }

    const handleCreatePageSubmit = async() => {
        try {
            const formData = new FormData();
            formData.append('name', pageCreateInput.pageName);
            formData.append('description', pageCreateInput.category);
            const config = {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    projectID: 'ktu17k7gadkn',
                },
                body: formData,
            }
            const response = await fetch('https://academics.newtonschool.co/api/v1/facebook/channel/', 
                config,
            );
    
            if (response.ok) {
                //const data = await response.json();
                //setPageList((prev) => [...prev, data.data]);
                navigate('/mainpage/homepage');
            }
            else{
                alert("Page already exists!");
            }
        } catch (error) {
            console.log('Error in creating a page:', error);
        }
    }

    /*useEffect(() => {
        localStorage.setItem(sessionUserInfo._id, JSON.stringify(pageList));
    }, [pageList])*/

    //console.log(pageInputActive);

    return(
        <div className="page-create-main">
            <div className="page-create-s1">
                <div className="pgc-close-fb-icon">
                    <div className="pgc-close-icon" onClick={() => navigate('/mainpage/homepage')}>
                        <i
                            data-visualcompletion="css-img"
                            style={{
                                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/1gFkxZXWOU8.png")',
                                backgroundPosition: '0px -446px',
                                backgroundSize: '26px 972px',
                                width: '20px',
                                height: '20px',
                                backgroundRepeat: 'no-repeat',
                                display: 'inline-block',
                            }}
                        ></i>
                    </div>
                </div>
                <div className="pgc-text">
                    <div className="pgc-t1">
                        <h1>Create a Page</h1>
                    </div>
                    <div className="pgc-t2">
                        Your Page is where people go to learn more about you. Make sure that yours has all of the information they may need.
                    </div>
                </div>
                <div className="pgc-enter-details">
                    <div className="pgc-label-input-text">
                        <label className={`pgc-label ${pageInputActive.pageName ? 'pgc-label-active' : ''}`}>
                            <span className={`pgc-placeholder ${pageInputActive.pageName ? 'pgc-placeholder-active' : ''}`}>Page name (required)</span>
                            <input className="pgc-input" onFocus={() => handlePageInputActive("pageName")} onBlur={() => handlePageInputActive("pageName")} onChange={(e) => handlePageCreateInput(e, "pageName")}></input>
                        </label>
                        <span className="pgc-label-text">Use the name of your business, brand or organisation, or a name that helps explain your Page. <a>Learn more</a></span>
                    </div>
                    <div className="pgc-label-input-text">
                        <label className={`pgc-label ${pageInputActive.category ? 'pgc-label-active' : ''}`}>
                            <span className={`pgc-placeholder ${pageInputActive.category ? 'pgc-placeholder-active' : ''}`}>Category (required)</span>
                            <input className="pgc-input" onFocus={() => handlePageInputActive("category")} onBlur={() => handlePageInputActive("category")} onChange={(e) => handlePageCreateInput(e, "category")}></input>
                        </label>
                        <span className="pgc-label-text">Enter a category that best describes you.</span>
                    </div>
                    <div className="pgc-label-input-text">
                        <label className={`pgc-label ${pageInputActive.bio ? 'pgc-label-active' : ''}`}>
                            <span className={`pgc-placeholder ${pageInputActive.bio ? 'pgc-placeholder-active' : ''}`}>Bio (optional)</span>
                            <textarea className="pgc-textarea" maxLength={101} rows={4} onFocus={() => handlePageInputActive("bio")} onBlur={() => handlePageInputActive("bio")} onChange={(e) => handlePageCreateInput(e, "bio")}></textarea>
                        </label>
                        <span className="pgc-label-text">Tell people a little about what you do.</span>
                    </div>
                </div>
                <div className="pgc-btn-terms-text">
                    <button className={`pgc-btn ${pageCreateInput.pageName.trim() && pageCreateInput.category.trim() ? 'pgc-btn-active' : ''}`} onClick={handleCreatePageSubmit}>Create Page</button>
                    <span className="pgc-label-text">By creating a Page, you agree to the <a>Pages, Groups and Events Policies</a></span>
                </div>
            </div>
            <div className="page-create-s2">
                <div className="pgc-preview">
                    <div className="pgc-prev-text-icon">
                        <div className="pcg-prev-text">
                            Desktop preview
                        </div>
                        <div className="pgc-prev-icon">
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 xi3auck"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/0_etHRYkr4X.png")',
                                    backgroundPosition: '-52px -664px',
                                    backgroundSize: '222px 690px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 x1d69dk1"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/gu-RGQXow4c.png")',
                                    backgroundPosition: '0px -104px',
                                    backgroundSize: '34px 202px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                        </div>
                    </div>
                    <div className="pgc-prev-scroll">
                        <div className="pgc-prevsc-s1">
                            <div className="pcg-prevsc-prof-icon">
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
                        </div>
                        <div className="pgc-prevsc-s2">
                            <div className={`pgc-prevsc-page-name ${pageCreateInput.pageName.trim() ? 'pgc-prevsc-entered-page-name' : ''}`}>
                                {pageCreateInput.pageName.trim() ? 
                                    pageCreateInput.pageName
                                :
                                    "Page name"
                                }
                            </div>
                            {pageCreateInput.bio.trim() &&
                                <div className="pgc-prevsc-entered-bio">
                                    {pageCreateInput.bio}
                                </div>
                            }
                        </div>
                        <div className="pgc-prevsc-s3">
                            <div className="pgc-options1">
                                <div>
                                    Posts
                                </div>
                                <div>
                                    About
                                </div>
                                <div>
                                    Followers
                                </div>
                                <div>
                                    Photos
                                </div>
                                <div>
                                    Videos
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
                            <div className="pgc-options2">
                                <div>
                                    <i
                                        className="x1b0d499 xmgbrsx"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/CFlO0NmaOiA.png")',
                                            backgroundPosition: '0px -700px',
                                            backgroundSize: '34px 916px',
                                            width: '16px',
                                            height: '16px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                            WebkitFilter: 'invert(80%) sepia(6%) saturate(200%) saturate(120%) hue-rotate(173deg) brightness(98%) contrast(89%)',
                                        }}
                                        data-visualcompletion="css-img"
                                    ></i>
                                    <span>Follow</span>
                                </div>
                                <div>
                                    <i
                                        className="x1b0d499 xmgbrsx"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/1gFkxZXWOU8.png")',
                                            backgroundPosition: '0px -666px',
                                            backgroundSize: '26px 972px',
                                            width: '16px',
                                            height: '16px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                            WebkitFilter: 'invert(80%) sepia(6%) saturate(200%) saturate(120%) hue-rotate(173deg) brightness(98%) contrast(89%)',
                                        }}
                                        data-visualcompletion="css-img"
                                    ></i>
                                    <span>Message</span>
                                </div>
                                <div>
                                    <i
                                        className="x1b0d499 xmgbrsx"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/1gFkxZXWOU8.png")',
                                            backgroundPosition: '0px -774px',
                                            backgroundSize: '26px 972px',
                                            width: '16px',
                                            height: '16px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                            WebkitFilter: 'invert(80%) sepia(6%) saturate(200%) saturate(120%) hue-rotate(173deg) brightness(98%) contrast(89%)',
                                        }}
                                        data-visualcompletion="css-img"
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <div className="pgc-prevsc-s4">
                            <div className="pgc-prevsc-intro">
                                <div className="pgc-prevsc-text-h2"><h2>Intro</h2></div>
                                <div className="pgc-prevsc-follower-page">
                                    <i
                                        data-visualcompletion="css-img"
                                        className="x1b0d499 xuo83w3"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/0RPI4vv-Ch8.png")',
                                            backgroundPosition: '0px -166px',
                                            backgroundSize: '26px 486px',
                                            width: '20px',
                                            height: '20px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                            WebkitFilter: 'invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%)',
                                        }}
                                    ></i>
                                    <span className="pgc-prevsc-text1">0 followers</span>
                                </div>
                                <div className="pgc-prevsc-follower-page">
                                    <i
                                        data-visualcompletion="css-img"
                                        className="x1b0d499 xuo83w3"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/1gFkxZXWOU8.png")',
                                            backgroundPosition: '0px -512px',
                                            backgroundSize: '26px 972px',
                                            width: '20px',
                                            height: '20px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                            WebkitFilter: 'invert(59%) sepia(11%) saturate(200%) saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%)',
                                        }}
                                    ></i>
                                    <span className="pgc-prevsc-text1">Page&nbsp;.&nbsp;<span className="pgc-prevsc-text2">{pageCreateInput.category.trim() ? pageCreateInput.category : 'Category'}</span></span>
                                </div>
                            </div>
                            <div className="pgc-prevsc-post">
                                <div className="pgc-prevsc-text-h2"><h2>Posts</h2></div>
                                <div className="pgc-prevsc-filter">
                                    <i
                                        data-visualcompletion="css-img"
                                        className="x1b0d499 xep6ejk"
                                        style={{
                                            backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/nenl7l8whng.png")',
                                            backgroundPosition: '0px -734px',
                                            backgroundSize: '26px 1036px',
                                            width: '16px',
                                            height: '16px',
                                            backgroundRepeat: 'no-repeat',
                                            display: 'inline-block',
                                        }}
                                    ></i>
                                    <span>Filters</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
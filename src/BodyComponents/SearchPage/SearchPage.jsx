import React, { useContext } from "react";
import './SearchPage.css';
import { PostList } from "../HomePage/PostList";
import { EssentialsContext } from "../../Context/EssentialsProvider";

export const SearchPage = () => {
    const { searchData } = useContext(EssentialsContext);
    return(
        <div>
            <div className="search-filters-main">
                <div className="srch-search-text"><h1>Search results</h1></div>
                <div className="srch-filter-list">
                    <div className="srch-filter-top-text">
                        Filters
                    </div>
                    <div className="srch-filter-icon-text">
                        <div className="srch-filter-icon">
                            <i
                                data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/6W7TmmseLN2.png")',
                                    backgroundPosition: '0px -334px',
                                    backgroundSize: '26px 958px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                        </div>
                        <div className="srch-filter-text">
                            All
                        </div>
                    </div>
                    <div className="srch-filter-icon-text srch-filter-selected">
                        <div className="srch-filter-icon srch-filter-selected-icon">
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 xaj1gnb"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/6W7TmmseLN2.png")',
                                    backgroundPosition: '0px -510px',
                                    backgroundSize: '26px 958px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                    WebkitFilter: 'invert(100%)'
                                }}
                            ></i>
                        </div>
                        <div className="srch-filter-text">
                            Posts
                        </div>
                    </div>
                    <div className="srch-filter-icon-text">
                        <div className="srch-filter-icon">
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 xep6ejk"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/oFJFvbUPS13.png")',
                                    backgroundPosition: '0px -192px',
                                    backgroundSize: '26px 496px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                        </div>
                        <div className="srch-filter-text">
                            People
                        </div>
                    </div>
                    <div className="srch-filter-icon-text">
                        <div className="srch-filter-icon">
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 xep6ejk"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/6W7TmmseLN2.png")',
                                    backgroundPosition: '0px -488px',
                                    backgroundSize: '26px 958px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                        </div>
                        <div className="srch-filter-text">
                            Photos
                        </div>
                    </div>
                    <div className="srch-filter-icon-text">
                        <div className="srch-filter-icon">
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 xep6ejk"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/y-swIxRoGn2.png")',
                                    backgroundPosition: '0px -118px',
                                    backgroundSize: '26px 168px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                        </div>
                        <div className="srch-filter-text">
                            Videos
                        </div>
                    </div>
                    <div className="srch-filter-icon-text">
                        <div className="srch-filter-icon">
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 xep6ejk"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/7sdqDTt_Th4.png")',
                                    backgroundPosition: '-22px -248px',
                                    backgroundSize: '74px 394px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                        </div>
                        <div className="srch-filter-text">
                            Marketplace
                        </div>
                    </div>
                    <div className="srch-filter-icon-text">
                        <div className="srch-filter-icon">
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 xep6ejk"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/6W7TmmseLN2.png")',
                                    backgroundPosition: '0px -92px',
                                    backgroundSize: '26px 958px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                        </div>
                        <div className="srch-filter-text">
                            Pages
                        </div>
                    </div>
                    <div className="srch-filter-icon-text">
                        <div className="srch-filter-icon">
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 xep6ejk"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/7sdqDTt_Th4.png")',
                                    backgroundPosition: '-22px -270px',
                                    backgroundSize: '74px 394px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                        </div>
                        <div className="srch-filter-text">
                            Places
                        </div>
                    </div>
                    <div className="srch-filter-icon-text">
                        <div className="srch-filter-icon">
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 xep6ejk"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/7sdqDTt_Th4.png")',
                                    backgroundPosition: '-44px -226px',
                                    backgroundSize: '74px 394px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                        </div>
                        <div className="srch-filter-text">
                            Groups
                        </div>
                    </div>
                    <div className="srch-filter-icon-text">
                        <div className="srch-filter-icon">
                            <i
                                data-visualcompletion="css-img"
                                className="x1b0d499 xep6ejk"
                                style={{
                                    backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/y-swIxRoGn2.png")',
                                    backgroundPosition: '0px -52px',
                                    backgroundSize: '26px 168px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundRepeat: 'no-repeat',
                                    display: 'inline-block',
                                }}
                            ></i>
                        </div>
                        <div className="srch-filter-text">
                            Events
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-result-main">
                <div className="srch-mid-result">
                    <div className="srch-filter-mobile-view">
                        <div>
                            Posts
                        </div>
                        <div>
                            People
                        </div>
                        <div>
                            Groups
                        </div>
                        <div>
                            Photos
                        </div>
                        <div>
                            Videos
                        </div>
                        <div>
                            Pages
                        </div>
                        <div>
                            Events
                        </div>
                    </div>
                    <div className="srch-border-mobile-view"></div>
                    {searchData && <PostList searchActive={true} />}
                </div>
            </div>
        </div>
    )
}
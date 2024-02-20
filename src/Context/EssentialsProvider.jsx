import React, { createContext, useContext, useState } from "react";

export const EssentialsContext = createContext();

export const EssentialsProvider = ({children}) => {
    const [fetchedPosts, setFetchedPosts] = useState([]);
    const [openCreatePostModal, setOpenCreatePostModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchData, setSearchData] = useState([]);
    const [activePage, setActivePage] = useState('');
    const [pageNo, setPageNo] = useState(1);

    return(
        <EssentialsContext.Provider value={{fetchedPosts, setFetchedPosts, openCreatePostModal, setOpenCreatePostModal, isLoggedIn, setIsLoggedIn, searchData, setSearchData, activePage, setActivePage, pageNo, setPageNo}}>
            {children}
        </EssentialsContext.Provider>
    )
}
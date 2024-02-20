import React from "react";
import { Navbar } from "./NavbarComponents/Navbar";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
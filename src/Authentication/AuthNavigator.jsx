import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { EssentialsContext } from "../Context/EssentialsProvider";

export const AuthNavigator = ({children}) => {
    const { isLoggedIn } = useContext(EssentialsContext);
    console.log("heya", isLoggedIn)
    return isLoggedIn ? (                       
        children
    ) : (
        <Navigate to="/login" />
    );
}
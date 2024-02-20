import React from "react";
import { SideOptions } from "./SideOptions";
import { MidBody } from "./MidBody";
import { CreateGroup } from "./CreateGroup";
import "./MainBody.css";

export const HomePage = () => {
    return(
        <div className="main-body-section">
            <SideOptions />
            <MidBody />
            <CreateGroup />
        </div>
    )
}
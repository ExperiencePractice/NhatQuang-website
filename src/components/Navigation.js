import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/NhatQuang-website/">
                Home
            </NavLink>
            <NavLink to="/NhatQuang-website/About">
                About
            </NavLink>
        </div>
    );
};

export default Navigation;
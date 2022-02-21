import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/NhatQuang-website/">
                        Profile
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/NhatQuang-website/competences">
                        Competences
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/NhatQuang-website/experiences">
                        Experiences
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/NhatQuang-website/hobbies">
                        Hobbies
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/NhatQuang-website/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
            
        </div>
    );
};

export default Navigation;
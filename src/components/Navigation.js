import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <br/>
            <ul>
                <li>⚈
                    <NavLink to="/NhatQuang-website/">
                        PROFIL
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>⚈
                    <NavLink to="/NhatQuang-website/competences">
                        COMPÉTENCE
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>⚈
                    <NavLink to="/NhatQuang-website/experiences">
                        EXPÉRIENCES
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>⚈
                    <NavLink to="/NhatQuang-website/hobbies">
                        CENTRE D'INTÊRETS
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>⚈
                    <NavLink to="/NhatQuang-website/contact">
                        CONTACT
                    </NavLink>
                </li>
            </ul>
            
        </div>
    );
};

export default Navigation;
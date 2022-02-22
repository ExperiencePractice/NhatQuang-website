import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <br/>
            <ul>
                <li>
                    <NavLink to="/NhatQuang-website/">
                        <button>PROFIL</button>
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/NhatQuang-website/skills_edu">
                        <button>COMPÉTENCES & FORMATION</button>
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/NhatQuang-website/experiences">
                        <button>EXPÉRIENCES</button>
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/NhatQuang-website/hobbies">
                        <button>CENTRE D'INTÊRETS</button>
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink to="/NhatQuang-website/contact">
                        <button>CONTACT</button>
                    </NavLink>
                </li>
            </ul>
            
        </div>
    );
};

export default Navigation;
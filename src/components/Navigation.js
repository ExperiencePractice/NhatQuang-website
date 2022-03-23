import React from 'react';
import { NavLink } from "react-router-dom";
import ProfileLogo from "../assets/logos/profile.png";
import SkillsLogo from "../assets/logos/skills.png";
import ExperiencesLogo from "../assets/logos/experiences.png";
import HobbiesLogo from "../assets/logos/hobbies.png";
import ContactLogo from "../assets/logos/contact.png";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/NhatQuang-website/profil">
                        <img alt="profile_logo" src={ProfileLogo}/>
                        <button>PROFIL</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/NhatQuang-website/skills_edu">
                        <img alt="skill_edu_logo" src={SkillsLogo}/>
                        <button>COMPÉTENCES & FORMATION</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/NhatQuang-website/experiences">
                        <img alt="experiences_logo" src={ExperiencesLogo}/>
                        <button>EXPÉRIENCES</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/NhatQuang-website/hobbies">
                        <img alt="hobbies_logo" src={HobbiesLogo}/>
                        <button>CENTRE D'INTÊRETS</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/NhatQuang-website/contact">
                        <img alt="contact_logo" src={ContactLogo}/>
                        <button>CONTACT</button>
                    </NavLink>
                </li>
            </ul>  
        </div>
    );
};

export default Navigation;
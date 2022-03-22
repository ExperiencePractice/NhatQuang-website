import React from 'react';
import Navigation from '../components/Navigation';
import Github_1 from "../assets/images/github-1.png";
import Github_2 from "../assets/images/github-3.png";
import Linkedin from "../assets/images/linkedin.png";
import Twitter from "../assets/images/twitter.png";


const Contact = () => {
    return (
        <div className='contact'>
            <Navigation/>
            <div className="contactContent">
                <h1>Contact</h1>
                <div className='contactCard'>
                    <h3>Email: <a href="mailto:nhatquang.ho.96@gmail.com">nhatquang.ho.96@gmail.com</a></h3>
                    <p>---------------------------------</p>
                    <ul className='logoList'>
                        <li>
                        <a href="https://www.github.com/nhatquang-ho" target="_blank" rel="noreferrer"><img alt="github-1" src={Github_1}/></a>
                        </li>
                        <li>
                            <a href="https://www.github.com/boyquang96" target="_blank" rel="noreferrer"><img alt="github-1" src={Github_2}/></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/nhat-quang-ho-473b2a195/" target="_blank" rel="noreferrer"><img alt="linkedin" src={Linkedin}/></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/quangho96" target="_blank" rel="noreferrer"><img alt="twitter" src={Twitter}/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react'
import Navigation from '../components/Navigation';
import Education from '../components/Skills_Edu/Education';
import Languages from '../components/Skills_Edu/Languages';
import Skills from '../components/Skills_Edu/Skills';

const Competences = () => {
    return (
        <div className='skills_edu'>
            <Navigation />            
            <div className="Skills_EduContent">
                <h1>Compétences & Formation</h1>
                <Skills/>
                <Education/>
                <Languages/>
            </div>
        </div>
    );
};

export default Competences;
import React from 'react';
import Navigation from '../components/Navigation';
import Exp1 from '../components/Experiences/Exp1';
import Exp2 from '../components/Experiences/Exp2';
import Exp3 from '../components/Experiences/Exp3';
import Exp4 from '../components/Experiences/Exp4';
import Exp5 from '../components/Experiences/Exp5';
import Exp6 from '../components/Experiences/Exp6';
import Exp7 from '../components/Experiences/Exp7';

const Experiences = () => {
    return (
        <div className='experiences'>
            <Navigation/>
            <div className="experiencesContent">
                <h1>Experiences professionelles</h1>
                <Exp7/>
                <Exp6/>
                <Exp5/>
                <Exp4/>
                <Exp3/>
                <Exp2/>
                <Exp1/>
            </div>
        </div>
    );
};

export default Experiences;
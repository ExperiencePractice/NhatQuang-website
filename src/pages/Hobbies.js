import React from 'react';
import Navigation from '../components/Navigation';
import Sport from '../components/Hobbies/Sport';
import Music from '../components/Hobbies/Music';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <Navigation/>
            <div className="hobbiesContent">
                <h1>Centre d'intérêts</h1>
                <Sport/>
                <Music/>
            </div>
        </div>
    );
};

export default Hobbies;
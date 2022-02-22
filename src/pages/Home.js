import React from 'react';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className='Home'>
            <Navigation />
            <div className='homeContent'>
                <h1>
                    BONJOUR<br/>
                    BIENVENUE SUR MON CV<br/><br/>
                    VEUILLEZ CHOISIR LES PAGES DANS LE MENU POUR CONSULTER
                </h1>
            </div>
        </div>
    );
};

export default Home;
import React, { useState } from 'react';

const Exp2 = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    }
    return (
        <div className='expContent' onClick={handlePopup}>

            <h3>2019:</h3>
            <h4>Projet en équipe: Mini jeu en Java - The Legend of Shellda</h4>
            

            {
                showPopup && (
                    <div className='showInfos'>
                        <div className='infosContent'>
                            <button onClick={handlePopup}>X</button>
                            <h2>Projet en équipe</h2>
                            <h5>(2019)</h5>

                            <p className='text'>
                                <b>Descriptif:</b> Mini jeu (The Legend of Shellda) en java en utilisant la librairie Java Swing pour l’interface graphique<br/>
                                <b>Code source:</b> <a href='https://github.com/tom-graugnard/PLA' target='_blank' rel='noreferrer'>lien</a><br/>
                                <b>Équipes & méthodes:</b> 5 personnes<br/>
                                <b>Tâches:</b><br/>
                                - Contribuer à faire des maquettes<br/>
                                - Créer un menu pour changer les automates des entités<br/>
                                - Améliorer l’interface graphique (changement de scène, bouton pour désactiver la musique, etc.)<br/>
                                <b>Outils & technologies:</b> Java / Java Swing / Github / Eclipse
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Exp2;
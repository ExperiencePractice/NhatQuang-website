import React, {useState} from 'react';

const Exp5 = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    }
    return (
        <div className='expContent' onClick={handlePopup}>

            <h3>Février - Mars 2021:</h3>
            <h4>Projet en équipe - GenderedNews</h4>
            

            {
                showPopup && (
                    <div className='showInfos'>
                        <div className='infosContent'>
                            <button onClick={handlePopup}>X</button>
                            <h2>Projet en équipe - Genderednews</h2>
                            <h5>(Février - Mars 2021)</h5>

                            <p className='text'>
                                <b>Descriptif:</b> C’était un projet de fin d’étude (GenderedNews) qui consiste à réaliser un système qui
                                                    collecte des données, les analyse puis affiche les résultats sous forme d’un site web<br/>
                                <b>Code source:</b> <a href='https://air.imag.fr/index.php/GenderedNews' target='_blank' rel='noreferrer'>lien du sujet</a> (le dépôt est toujours en privé)<br/>
                                <b>Équipes & méthodes:</b> 4 personnes + Scrum<br/>
                                <b>Tâches:</b><br/>
                                - Faire des recherches pour les technologies<br/>
                                - Contribuer à faire la conception<br/>
                                - Faire quelques prototypes des fonctionnalités<br/>
                                - Créer des pages de base pour le site web<br/>
                                - Faire des tests unitaires<br/>
                                - Internationalisation du site (Français et Anglais)<br/>
                                - Faire un script pour faire un tweet toutes les semaines des résultats obtenus (TwitterBot)<br/>
                                <b>Outils & technologies:</b> Python / MongoDB / Gitlab / Metabase / Jekyll / Visual Studio Code
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Exp5;
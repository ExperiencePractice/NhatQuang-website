import React, {useState} from 'react';

const Exp4 = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    }
    return (
        <div className='expContent' onClick={handlePopup}>

            <h3>Octobre 2020 - Février 2021:</h3>
            <h4>Projet en équipe: Application web - Uwind</h4>
            

            {
                showPopup && (
                    <div className='showInfos'>
                        <div className='infosContent'>
                            <button onClick={handlePopup}>X</button>
                            <h2>Projet en équipe</h2>
                            <h5>(Octobre 2020 - Février 2021)</h5>

                            <p className='text'>
                                <b>Descriptif:</b> L’objectif est de réaliser une application web pour l'école UWind, pour que les étudiants puissent s’inscrire à des cours de voile<br/>
                                <b>Code source:</b> <a href='https://github.com/2020-2021-ECOM-INFO5-G04/App' target='_blank' rel='noreferrer'>lien</a><br/>
                                <b>Équipes & méthodes:</b> 4 personnes + Scrum<br/>
                                <b>Tâches:</b><br/>
                                - Contribuer à faire la conception<br/>
                                - Faire quelques tests unitaires<br/>
                                - Afficher les informations selon l’utilisateur connecté<br/>
                                - Générer automatiquement un « username » selon le nom et prénom de l’utilisateur<br/>
                                - Rendre le footer responsive<br/>
                                - Récupérer la liste des étudiants et créer un bouton pour télécharger sous format csv<br/>
                                - Réparer les bugs<br/>
                                <b>Outils & technologies:</b>  Java / Javascript / Angular / Github / Jhypster / Html / Visual Studio Code
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Exp4;
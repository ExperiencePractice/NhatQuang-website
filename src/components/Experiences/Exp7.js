import React, {useState} from 'react';

const Exp7 = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    }
    return (
        <div className='expContent' onClick={handlePopup}>

            <h3>Février - Mars 2022:</h3>
            <h4>Projet personnel - Mon CV</h4>
            

            {
                showPopup && (
                    <div className='showInfos'>
                        <div className='infosContent'>
                            <button onClick={handlePopup}>X</button>
                            <h2>Projet personnel - Mon CV</h2>
                            <h5>(Février - Mars 2022)</h5>

                            <p className='text'>
                                <b>Descriptif:</b> Un mini projet afin de découvrir le framework React, ainsi de pouvoir montrer mon CV plus en détails<br/>
                                <b>Code source:</b> <a href='https://github.com/ExperiencePractice/NhatQuang-website' target='_blank' rel='noreferrer'>lien</a><br/>
                                <b>Tâches:</b><br/>
                                - Faire la maquettes des pages et des composants<br/>
                                - Créer la barre de navigation<br/>
                                - Créer les pages (Expériences, Compétences, etc.)<br/>
                                - Rendre les pages responsive (pour PC et téléphone)<br/>
                                - Mettre en place le github-pages<br/>
                                <b>Outils & technologies:</b> React / Visual Studio Code / Github
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Exp7;
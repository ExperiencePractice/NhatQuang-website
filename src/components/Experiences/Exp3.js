import React, {useState} from 'react';

const Exp3 = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    }
    return (
        <div className='expContent' >

            <div onClick={handlePopup}>
                <h3>Été 2020:</h3>
                <h4>Projet personnel - Bibliomaison</h4>
            </div>

            {
                showPopup && (
                    <div className='showInfos'>
                        <div className='infosContent'>
                            <button onClick={handlePopup}>X</button>
                            <h2>Projet personnel</h2>
                            <h5>(Été 2020)</h5>

                            <p className='text'>
                                <b>Descriptif:</b> C’était mon projet personnel pour découvrir le Php et MySQL (J’ai récemment le
                                                    déplacer dans un dépôt git ainsi de faire quelques mise à jour). C’est un site web qui
                                                    nous permet de stocker les informations des livres que l’on a dans la maison.<br/>
                                <b>Code source:</b> <a href='https://github.com/nhatquang-ho/bibliomaison/' target='_blank' rel='noreferrer'>lien</a><br/>
                                <b>Tâches:</b><br/>
                                - Créer les pages de base<br/>
                                - Se connecter à la base de données MySql<br/>
                                - Créer une interface pour que l’on puisse se logger<br/>
                                - Ajouter des fonctionnalités (insérer, supprimer, mettre à jour les données des livres)<br/>
                                - Créer des variables environnement pour que les valeurs (mot de passe, etc.) ne s’affichent pas dans le code<br/>
                                - Créer des logging<br/>
                                - Rendre le site plus jolie avec le CSS<br/>
                                - Service mail (pour la page report + création d’un compte)<br/>
                                - Ajouter la langue vietnamienne<br/>
                                <b>Outils & technologies:</b> Php / Html / Css / MySql / Javascript / Github / Visual Studio Code
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Exp3;
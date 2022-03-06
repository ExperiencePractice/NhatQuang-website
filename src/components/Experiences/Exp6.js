import React, {useState} from 'react';

const Exp6 = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    }
    return (
        <div className='expContent' onClick={handlePopup}>

            <h3>Mai - Octobre 2021:</h3>
            <h4>Stage au laboratoire LIG - Suite du projet Genderednews</h4>
            

            {
                showPopup && (
                    <div className='showInfos'>
                        <div className='infosContent'>
                            <button onClick={handlePopup}>X</button>
                            <h2>Stage au laboratoire LIG - Suite du projet Genderednews</h2>
                            <h5>(Mai - Octobre 2021)</h5>

                            <p className='text'>
                                <b>Descriptif:</b> Mini jeu (The Legend of Shellda) en java en utilisant la librairie Java Swing pour l’interface graphique<br/>
                                <b>Code source:</b> <a href='http://gendered-news.imag.fr/' target='_blank' rel='noreferrer'>lien du site résultat</a>(le dépôt est toujours en privé)<br/>
                                <b>Équipes & méthodes:</b> Je travaillais principalement avec une doctorante et 2 chercheurs<br/>
                                <b>Tâches:</b><br/>
                                - Ajouter plus de données à collecter<br/>
                                - Changer la méthode de collecter les données<br/>
                                - Intégrer l’algorithme pour une autre méthode d’analyse (2 e analyse) des données<br/>
                                - Faire tourner le 2 e analyse sur un autre serveur plus puissant et qui puisse se connecte à la base de données du 1 er serveur<br/>
                                - Réparer les bugs (sur le serveur + dans le code)<br/>
                                - Améliorer le temps de chargement des graphiques<br/>
                                - Ajouter des pages pour afficher plus de données<br/>
                                - Rendre les pages + logos responsive<br/>
                                - Compléter la documentation<br/>
                                - Améliorer le TwitterBot<br/>
                                - Intégrer Google Analyti<br/>
                                <b>Outils & technologies:</b> Python / Jekyll / Gitlab / MongoDB / Metabase / Visual Studio Code
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Exp6;
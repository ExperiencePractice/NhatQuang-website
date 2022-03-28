import Navigation from "../components/Navigation";
import ProfilePhoto from "../assets/images/photoprofile.png";

const Home = () => {
    return (
        <div className="profile">
            <Navigation />
            <div className="profileContent">
                <h1>Profil</h1>
                <br/>
                <img src={ProfilePhoto} alt="ProfilePhoto" />
                <br/>
                <br/>
                <h2>Nhat Quang HO</h2>
                <br/>
                <h3>Ingénieur Informatique</h3>
                <br/>
                <p>
                Jeune diplômé, passionné par l’Informatique. Dynamique, l’esprit équipe, autonome. <br/>
                Je suis à la recherche d’un CDI<br/>
                (Disponibilité immédiate)
                <br/><br/><br/>
                    <h3>
                        * DÉVELOPPEMENT WEB (FULL STACK)<br/>
                        * FORTE CAPACITÉ D’ADAPTATION<br/>
                        * CAPACITÉ À EFFECTUER DES ACTIVITÉS DE RECHERCHE<br/>
                        * CURIEUX, ESPRIT D’ÉQUIPE, AUTONOME, POLYVALENT
                    </h3>
                </p>
            </div>
            
        </div>
    );
}

export default Home;
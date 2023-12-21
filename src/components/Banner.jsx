import Navbar from "./Navbar"
import '../styles/banner.css'
import Button from "./Button"
import mousedown from '../assets/scroll-down.svg'
import background from '../assets/background.png'

function Banner(){
    function ScrollDown(){
        window.scrollTo({
            top: window.scrollY + window.innerHeight * 0.7,
            behavior: 'smooth' // Pour une animation de défilement fluide
        });
    }

    return(
        <header style={{backgroundImage: `url(${background})`}}>
            <Navbar />
            <div className="hero">
                <h1><span className="jaune">JE M'APPELLE</span> AUBIN MANCEAU <br /><span className="jaune">ET JE SUIS </span>ETUDIANT / DÉVELOPPEUR JUNIOR.</h1>
                <p>J'ai 19 ans et je suis en deuxième année de bachelor en développement web à MyDigitalSchool Angers. Actuellement, je recherche un stage de 40 jours débutant le 25 mars 2024, tout en étant à la recherche d'une alternance pour la rentrée 2024 !</p>
                <div className="buttons">
                    <Button name="Projets" link="#projets" />
                    <Button name="Contact" link="#contact" />
                </div>
                <div className="mousedown">
                    <img src={mousedown} alt={mousedown} onClick={ScrollDown} />
                </div>
            </div>
        </header>
    )
}

export default Banner
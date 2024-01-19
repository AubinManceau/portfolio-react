import Navbar from "./Navbar";
import '../styles/banner.css';
import Button from "./Button";
import mousedown from '../assets/scroll-down.svg';
import background from '../assets/background.png';
import { Link as ScrollLink } from "react-scroll";

function Banner() {
    function ScrollDown() {
        window.scrollTo({
            top: window.scrollY + window.innerHeight * 0.7,
            behavior: 'smooth' // Pour une animation de défilement fluide
        });
    }

    return (
        <header style={{ backgroundImage: `url(${background})` }}>
            <Navbar />
            <div className="hero">
                <h1><span className="jaune">JE M'APPELLE</span> AUBIN MANCEAU <br /><span className="jaune">ET JE SUIS </span>ETUDIANT / DÉVELOPPEUR JUNIOR.</h1>
                <p>J'ai 19 ans et je suis en deuxième année de bachelor en développement web à MyDigitalSchool Angers. Actuellement, je recherche une alternance pour la rentrée 2024 !</p>
                <div className="buttons">
                    <ScrollLink to="projets" smooth={true} duration={500}><Button name="Projets" link="" blank={false} /></ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={500}><Button name="Contact" link="" blank={false} /></ScrollLink>
                </div>
                <div className="mousedown">
                    <img src={mousedown} alt="Scroll Down" onClick={ScrollDown} />
                </div>
            </div>
        </header>
    );
}

export default Banner;

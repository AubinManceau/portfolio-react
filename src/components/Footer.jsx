import '../styles/footer.css'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Footer(){
    function automaticYear(){
        const date = new Date();
        const annee = date.getFullYear();
        return annee;
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return(
        <footer>
            <div className="footer-logo">
                <ScrollLink to="/" onClick={scrollToTop}><p>Aubin Manceau</p></ScrollLink>
            </div>
            <p>copyright © - tous droits réservés</p>
            <p>{automaticYear()}</p>
        </footer>
    )
}

export default Footer
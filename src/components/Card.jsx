import PropTypes from "prop-types";
import '../styles/card.css';
import { Link } from "react-router-dom";


function Card({ couverture, url }){

    Card.propTypes = {
        couverture: PropTypes.string,
        url: PropTypes.string.isRequired,
    };

    return(
        <Link to={`/projets/${url}`}>
            <figure className="caseProjects">
                <img src={couverture} alt=""></img>
            </figure>
        </Link>  
    )
}
export default Card
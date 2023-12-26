import PropTypes from "prop-types";
import '../styles/button.css'

function Button({name, link}){
    Button.propTypes = {
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      };
    
    return(
        <div className="container-button">
            <a className="button" href={link}>{name}</a>
        </div>
    )
}

export default Button
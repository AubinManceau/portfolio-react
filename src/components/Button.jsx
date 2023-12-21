import PropTypes from "prop-types";
import '../styles/button.css'

function Button({name, link}){
    Button.propTypes = {
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      };
    
    return(
        <a className="button" href={link}>{name}</a>
    )
}

export default Button
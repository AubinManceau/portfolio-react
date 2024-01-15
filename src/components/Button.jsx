import PropTypes from "prop-types";
import '../styles/button.css'

function Button({name, link, blank}){
    Button.propTypes = {
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        blank: PropTypes.bool,
    };

    const haveBlank = () => {
        if (blank === true) {
            return ("_blank")
        }else{
            return ("_self")
        }
    }
    
    return(
        <div className="container-button">
            <a className="button" href={link} target={haveBlank()} rel="noopener noreferrer">{name}</a>
        </div>
    )
}

export default Button
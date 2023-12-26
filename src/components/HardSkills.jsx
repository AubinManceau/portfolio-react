import PropTypes from "prop-types";
import '../styles/hardSkills.css'

function HardSkills({ name, pourcentage, id }) {

    HardSkills.propTypes = {
        name: PropTypes.string,
        pourcentage: PropTypes.number,
        id: PropTypes.string
    };

    return (
        <li key={id} className="contentProgressBar">
            <div role="progressbar" aria-valuenow={pourcentage} aria-valuemin="0" aria-valuemax="100" style={{'--value': pourcentage}}></div>
            <p>{name}</p>
        </li>
    )
}

export default HardSkills

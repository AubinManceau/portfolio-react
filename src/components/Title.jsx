import '../styles/title.css'
import PropTypes from "prop-types";

function Title({name}){
    Title.propTypes = {
        name: PropTypes.string.isRequired,
      };

    return(
        <div className='title'>
            <h2>{name}</h2>
        </div>
    )
}

export default Title
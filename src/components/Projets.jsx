import NavProjects from './NavProjects.jsx'
import Title from './Title.jsx'
import '../styles/projets.css'

function Projets(){
    return(
        <div id='projets'>
            <Title name="projets" />
            <div>
                <nav className='navProjects'>
                    <NavProjects />
                </nav>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Projets
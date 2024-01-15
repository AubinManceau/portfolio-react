import { projets } from "../datas/projets"
import { useLocation } from 'react-router-dom';
import Title from "./Title";
import Slider from "./Slider";
import '../styles/ProjectDetail.css';
import Button from "./Button";

function ProjectDetail(){
    const location = useLocation();
    const projectUrl = location.pathname.replace('/projets/', '');
    const project = projets.find((p) => p.url === projectUrl);

    const haveLink = () => {
        if (project.link !== undefined && project.link !== null) {
            return <Button name="Découvrir le projet" link={project.link} blank={true}/>
        }
    }

    return(
        <div id="project-detail">
            <nav className="nav-project">
                <p>Aubin Manceau</p>
                <a href="../">Retour</a>
            </nav>
            <div className="container">
                <Slider className="slider-projet" img1={project.couverture} img2={project.img2} img3={project.img3} img4={project.img4} />
                <div className="content-projet">
                    <Title name={project.name}/>
                    <ul>
                        <li><p>{project.domaine}</p></li>
                        <li><p>{project.logiciel}</p></li>
                        <li><p>{project.temps}</p></li>
                    </ul>
                    <p>{project.description}</p>
                    {haveLink()}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
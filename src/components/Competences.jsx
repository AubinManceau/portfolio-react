import { hardskills } from "../datas/hardskills"
import HardSkills from "./HardSkills"
import SoftSkills from "./SoftSkills"
import Title from "./Title"
import '../styles/competences.css'

function Competences() {
    return (
        <div id="competences">
            <Title name="Compétences" />

            <div className="skills">
                <ul className="containerSkills">
                    {hardskills.map(({ id, name, pourcentage }) => (
                        <HardSkills key={id} name={name} pourcentage={pourcentage} />
                    ))}
                </ul>
                <div className="containerSoft">
                    <SoftSkills />
                </div>
            </div>
        </div>
    )
}

export default Competences
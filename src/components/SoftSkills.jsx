import '../styles/softSkills.css'

function SoftSkills(){
    const softSkills = ['curieux', 'autodidacte', 'organisé', "esprit d'équipe", "discret"];
    return(
        <ul>
            {softSkills.map((softSkill) => (
                <li key={softSkill}>
                    <p>{softSkill}</p>
                </li>
            ))}
        </ul>
    )
}

export default SoftSkills
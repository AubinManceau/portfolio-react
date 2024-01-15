import { projets } from "../../datas/projets";
import Card from "../Card";

function WebDevelopment(){
    const projetsWebDevelopment = projets.filter(projet => projet.domaine.includes("Développement web"));

    return (
        <div className="imgProjets">
            {projetsWebDevelopment.map(({ couverture, id, name, url }) => (
                <Card key={id} couverture={couverture} name={name} url={url}/>
            ))}
        </div>
    );
}

export default WebDevelopment
import { projets } from "../../datas/projets";
import Card from "../Card";

function WebDesign() {
    const projetsWebDesign = projets.filter(projet => projet.domaine.includes("WebDesign"));

    return (
        <div className="imgProjets">
            {projetsWebDesign.map(({ couverture, id, name, url }) => (
                <Card key={id} couverture={couverture} name={name} url={url}/>
            ))}
        </div>
    );
}

export default WebDesign;

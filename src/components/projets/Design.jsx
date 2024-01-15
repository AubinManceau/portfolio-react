import { projets } from "../../datas/projets";
import Card from "../Card";

function Design() {
    const projetsDesign = projets.filter(projet => projet.domaine.includes("Création numérique"));

    return (
        <div className="imgProjets">
            {projetsDesign.map(({ couverture, id, name, url }) => (
                <Card key={id} couverture={couverture} name={name} url={url}/>
            ))}
        </div>
    );
}

export default Design;

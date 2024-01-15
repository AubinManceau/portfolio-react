import { projets } from "../../datas/projets"
import Card from "../Card"

function All(){
    return(
        <div className="imgProjets">
            {projets.map(({ couverture, name, url }) => (
                <Card key={name} couverture={couverture} name={name} url={url}/>
            ))}
        </div>
    )
}

export default All
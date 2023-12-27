import '../styles/apropos.css'
import aboutimg from '../assets/about.png'
import Title from './Title'
import Button from './Button'

function APropos(){
    return (
        <div className='apropos'id='apropos' >
            <img src={aboutimg} alt={aboutimg} />
            <div className="content">
                <Title name="A Propos" />
                <div>
                    <p>Je m'appelle Aubin Manceau, et j'ai 19 ans. Je suis actuellement en deuxième année de bachelor en développement web à MyDigitalSchool Angers. La curiosité et l'autonomie sont deux de mes principales caractéristiques, car j'aime relever des défis et apprendre constamment de nouvelles compétences pour me perfectionner.</p>

                    <p>En dehors du développement web, j'ai une autre passion : le football. Sur le terrain, j'ai découvert la cohésion d'équipe, l'esprit de compétition et le dépassement de soi, des valeurs que j'essaie de retranscrire dans mon travail.</p>

                    <p>Un des grands objectifs de ma vie serait d'explorer de nouvelles cultures et de voyager. Des paysages à la culture, la diversité du monde me fascine.</p>
                </div>
                <Button name="Télécharger mon CV" link=""/>
            </div>
        </div>
    )
}

export default APropos
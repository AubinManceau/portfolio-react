import '../styles/contact.css'
import Button from './Button'
import Title from './Title'

function Contact(){
    return (
        <div id="contact">
            <Title name="Contact" />
            <div className="form">
                <p>Vous souhaitez parler d'un projet, vous recherchez un stagiaire ou un alternant ? Alors utilisez le formulaire de contact ou mes informations personnelles ci-dessous !</p>
                <form>
                    <div className="names">
                        <input type="text" placeholder="Nom" />
                        <input type="text" placeholder="Prénom" />
                    </div>
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <Button name="Envoyer" link="" blank={false} />
                </form>
            </div>
            <div className="infos">

            </div>
        </div>
    )
}

export default Contact
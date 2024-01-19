import '../styles/contact.css'
import Title from './Title'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'


function Contact(){

    const form = useRef();
  const [message, setMessage] = useState(null);
  const [messageClass, setMessageClass] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const lastname = form.current.elements.lastname.value.trim();
    const name = form.current.elements.name.value.trim();
    const email = form.current.elements.email.value.trim();
    const messageText = form.current.elements.message.value.trim();

    // Vérifications des champs
    if (!lastname || !name || !email || !messageText) {
      setMessage("Veuillez remplir tous les champs du formulaire.");
      setMessageClass("error-message");
      return;
    }

    if (!isValidEmail(email)) {
      setMessage("Veuillez entrer une adresse e-mail valide.");
      setMessageClass("error-message");
      return;
    }

    if (messageText.length < 50) {
      setMessage("Veuillez entrer un message d'au moins 50 caractères.");
      setMessageClass("error-message");
      return;
    }

    // Envoi de l'e-mail uniquement si toutes les vérifications sont réussies
    emailjs.sendForm('portfolio-mail', 'portfolio-mail', form.current, 'SLXAmOUZIeVenEOh0')
      .then(() => {
        setMessage("Votre e-mail a été envoyé avec succès!");
        setMessageClass("success-message");
        form.current.reset();
      })
      .catch(() => {
        setMessage("Une erreur s'est produite lors de l'envoi de l'e-mail.");
        setMessageClass("error-message");
      });
  };

  const isValidEmail = (email) => {
    // Fonction pour vérifier si l'e-mail est valide (vous pouvez utiliser une expression régulière plus complexe ici si nécessaire)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };


    return (
        <div id="contact">
            <Title className="title" name="Contact" />
            <div className="contact">
                <div className="form">
                    <p>Vous souhaitez parler d'un projet, vous recherchez un stagiaire ou un alternant ? Alors utilisez le formulaire de contact ou mes informations personnelles ci-dessous !</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="names">
                            <input name='lastname' type="text" placeholder="Nom" />
                            <input name='name' type="text" placeholder="Prénom" />
                        </div>
                        <input name='email' type="email" placeholder="Email" />
                        <textarea name='message' placeholder="Message"></textarea>
                        <div className="button">
                            <input type="submit" value='Envoyer' />
                        </div>
                        <div className={`message ${messageClass}`}>
                            {message}
                        </div>
                    </form>
                </div>
                <div className="infos">
                    <h3>Informations</h3>
                    <div className="info">
                        <p>Email :</p>
                        <a href="mailto:aubinmanceau0@gmail.com">aubinmanceau0@gmail.com</a>
                    </div>
                    <div className="info">
                        <p>Téléphone :</p>
                        <a href="tel:+763575212">07 63 57 52 12</a>
                    </div>
                    <div className="info">
                        <p>Réseaux sociaux :</p>
                        <figure className="iconFooter">
                                <a href="https://www.linkedin.com/in/aubin-manceau/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} />
                                </a>
                                <a href="https://www.instagram.com/aubin.portfolio/" target="_blank" rel="noopener noreferrer">
                                    <img src={instagram} />
                                </a>
                                <a href="https://github.com/AubinManceau" target="_blank" rel="noopener noreferrer">
                                    <img src={github} />
                                </a>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
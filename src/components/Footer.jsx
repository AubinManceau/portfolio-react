import '../styles/footer.css'

function Footer(){
    function automaticYear(){
        const date = new Date();
        const annee = date.getFullYear();
        return annee;
    }

    return(
        <footer>
            <div className="footer-logo">
                <a href="./">Aubin Manceau</a>
            </div>
            <p>copyright © - tous droits réservés</p>
            <p>{automaticYear()}</p>
        </footer>
    )
}

export default Footer
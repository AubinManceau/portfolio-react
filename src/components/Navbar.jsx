import '../styles/navbar.css'

function Navbar(){
    const navs = [{navname:'A propos', link:'#apropos'}, {navname:'Compétences', link:'#competences'}, {navname:'Projets', link:'#projets'},{navname:'Contact', link:'#contact'}]
    return(
        <nav>
            <div className="nav-logo">
                <a href="./">Aubin Manceau</a>
            </div>
            <div className="nav-name">
                <ul>
                    {navs.map((nav) => (
                        <li key={nav.navname}>
                            <a href={nav.link}>{nav.navname}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
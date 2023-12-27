import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import '../styles/navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navs = [
    { navname: 'A propos', link: 'apropos' },
    { navname: 'Compétences', link: 'competences' },
    { navname: 'Projets', link: 'projets' },
    { navname: 'Contact', link: 'contact' }
  ];

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 8) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navHeader ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">
        <ScrollLink to="/" onClick={scrollToTop}>Aubin Manceau</ScrollLink>
      </div>
      <div className="nav-name">
        <ul>
          {navs.map((nav) => (
            <li key={nav.navname}>
              <ScrollLink to={nav.link} smooth={true} duration={500}>{nav.navname}</ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

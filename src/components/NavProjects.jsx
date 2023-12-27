import { NavLink } from "react-router-dom";
import '../styles/navProjects.css'

function NavProjects() {
  return (
    <ul className="container-projects">
      <li><NavLink to="/webDesign">WebDesign</NavLink></li>
      <li><NavLink to="/design">Design</NavLink></li>
      <li><NavLink to="/webDevelopment">Web Development</NavLink></li>
      <li><NavLink to="/">All</NavLink></li>
    </ul>
  );
}

export default NavProjects;

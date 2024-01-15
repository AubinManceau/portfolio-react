import NavProjects from './NavProjects.jsx'
import Title from './Title.jsx'
import { Route, Routes } from "react-router-dom";
import '../styles/projets.css'
import All from './projets/All.jsx';
import WebDevelopment from './projets/WebDevelopment.jsx'
import Design from './projets/Design.jsx';
import WebDesign from './projets/WebDesign.jsx';

function Projets(){
    return(
        <div id='projets'>
            <Title name="projets" />
            <div className='navEtProjets'>
                <nav className='navProjects'>
                    <NavProjects />
                </nav>
                <Routes>
                    <Route path="/" element={<All />}></Route>
                    <Route path="/webDevelopment" element={<WebDevelopment />}></Route>
                    <Route path="/design" element={<Design />}></Route>
                    <Route path="/webDesign" element={<WebDesign />}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default Projets
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import APropos from './components/APropos.jsx'
import Competences from './components/Competences.jsx'
import Projets from './components/Projets.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'
import { projets } from './datas/projets.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <div>
            <Banner />
            <APropos />
            <Competences />
            <Projets />
            <Contact />
            <Footer />
          </div>
        } />
        {projets.map((projet) => (
          <Route key={projet.name} path={`/projets/${projet.url}`} exact element={<ProjectDetail />} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

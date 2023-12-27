import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import APropos from './components/APropos.jsx'
import Competences from './components/Competences.jsx'
import Projets from './components/Projets.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contact from './components/Contact.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Banner />
      <APropos />
      <Competences />
      <Projets />
      <Contact />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)

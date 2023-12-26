import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import APropos from './components/APropos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banner />
    <APropos />
    <Footer />
  </React.StrictMode>,
)

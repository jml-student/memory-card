import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Cards />
    <Footer />
  </StrictMode>
)

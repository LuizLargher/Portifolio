import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Head from './components/Head.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import '../src/styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head />
    <Main />
    <Footer />
  </StrictMode>,
)

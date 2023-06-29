import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/styles.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
ReactDOM.createRoot(document.getElementById('root')).render(
 //nav y footer en main
  <React.StrictMode>
   <BrowserRouter >
    <Navbar />
    <App />
    <Footer />
</BrowserRouter>
  </React.StrictMode>,

)

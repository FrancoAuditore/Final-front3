import  './styles/styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacto from './routes/Contacto'
import Detail from './routes/Detail'
import Favorites from './routes/Favorites'
import Home from './routes/Home'

function App(){



  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contacto' element={<Contacto />}/>
      <Route path='/dentist' element={<Detail /> }/>
      <Route path='/favs' element={<Favorites />} />
      <Route path='*' element={<Home />}/>
    </Routes>   
    </>
  )
  }

export default App

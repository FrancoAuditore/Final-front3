import  './styles/styles.css'
import { Route, Routes } from 'react-router-dom'
import Contacto from './routes/Contacto'
import Detail from './routes/Detail'
import Favs from './routes/Favs'
import Home from './routes/Home'

function App(){



  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contacto' element={<Contacto />}/>
      <Route path='/dentist' element={<Detail /> }/>
      <Route path='/favs' element={<Favs />} />
      <Route path='*' element={<Home />}/>
    </Routes>   
    </>
  )
  }

export default App

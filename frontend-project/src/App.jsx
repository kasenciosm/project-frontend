import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Registrar from './pages/Registrar'
import Nosotros from './pages/Nosotros'
import TiendaVirtual from './pages/TiendaVirtual'
import Ingresar from './pages/Ingresar'
import Carrito from './pages/Carrito'
import LayoutBase from './layouts/LayoutBase'
import NuestrosProductos from './pages/NuestrosProductos'

function App() {
  return (
    <BrowserRouter>
    <LayoutBase>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Registrar' element={<Registrar />} />
        <Route path='/Nosotros' element={<Nosotros />} />
        <Route path='/NuestrosProductos' element={<NuestrosProductos />} />
        <Route path='/TiendaVirtual' element={<TiendaVirtual />} />
        <Route path='/Ingresar' element={<Ingresar />} />
        <Route path='/carrito' element={<Carrito />} />
      </Routes>
    </LayoutBase>
  </BrowserRouter>
      
  )
}

export default App
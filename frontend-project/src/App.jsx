import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Registrar from './pages/Registrar'
import Nosotros from './pages/Nosotros'
import Tiendita from './pages/Tiendita'
import Ingresar from './pages/Ingresar'
import Carrito from './pages/Carrito'
import LayoutBase from './layouts/LayoutBase'
import NuestrosProductos from './pages/NuestrosProductos'
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <LayoutBase>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Registrar' element={<Registrar />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/NuestrosProductos' element={<NuestrosProductos />} />
            <Route path='/Tiendita' element={<Tiendita />} />
            <Route path='/Ingresar' element={<Ingresar />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
        </LayoutBase>
      </BrowserRouter>
    </UserProvider>
      
  )
}

export default App
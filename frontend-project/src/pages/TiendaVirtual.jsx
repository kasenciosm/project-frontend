import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
// import axios from 'axios'

const TiendaVirtual = () => {
 const [productos, setProductos] = useState()

 const fetchProductos = async () => {
  const response = await fetch('https://app-uggglcnc2a-uc.a.run.app/api/productos')
  const data = await response.json()
  // console.log(response.data)
  setProductos(data)
 }

 useEffect(() => {
  fetchProductos()
    // .then(data => setProductos(data.productos))
 }, [])

  return (
    <>
      <h1 className="text-center pt-20 text-lime-900 font-bold pb-10">NUESTRA TIENDITA</h1>
      <section className="items-center text-center flex justify-center gap-20 pb-20 pt-10 pl-10">
        <section className="w-10/12 mx-auto mt-5">
          <Link to='/'>Regresar al Home</Link>
          <div>Detalle del Producto</div>
          <div className="text-center">
              <h1 className="text-4xl capitalize"></h1>
                       </div>
        </section>
       </section> 
    </>
  )
}

export default TiendaVirtual
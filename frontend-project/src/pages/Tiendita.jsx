import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import Header from "../tiendita/Header"

const TiendaVirtual = () => {
  const [productos, setProductos] = useState([])

  const fetchProductos = async () => {
  const getResponse = await fetch('https://app-uggglcnc2a-uc.a.run.app/api/productos')
  const data = await getResponse.json()
  console.log(data)
  setProductos(data)
 }

 useEffect(() => {
  fetchProductos()
 }, [])


  return (
    <>
      <Header />
          <div className="pl-20 grid grid-cols-4 gap-8 pt-10 pb-16 pr-20">
            {productos.map(producto =>{
              return (
                <div key= {producto.id} className="capitalize flex flex-col gap-2 text-lime-900 font-semibold text-sm ">
                    <img src="https://placehold.co/600x400/png"/>
                  <article className="flex flex-row gap-12">
                    <div>
                      <h3 className="text-start w-36">{producto.name}</h3>
                      <h3>Precio S/.{producto.price}</h3>
                      <h3>Peso {producto.weigth}</h3>
                    </div>
                    <div>
                      <button className="text-xs border-blue-900 bg-lime-400 rounded-lg px-2 py-2">Agregar</button>
                    </div>
                  </article>
                </div> 

              )
            })}
          </div>   
          <div className="text-center pb-10 text-green-800 font-semibold hover:underline">
            <Link to='/'>Regresar al Home</Link>
          </div>
    </>
  )
}

export default TiendaVirtual
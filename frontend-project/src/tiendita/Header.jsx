import React from 'react'

const Header = () => {
  return (
    <>
        <h1 className="container pl-6 pt-20 text-lime-900 font-bold pb-2">NUESTRA TIENDITA</h1>
      <section>
          <div className="text-center">
              <h1 className="text-2xl capitalize pb-10 text-center text-lime-900 font-bold">LISTA DE PRODUCTOS</h1>
          </div>
          <div className="pl-10 flex flex-grow gap-4 font-semibold">
            <label htmlFor="price">Precio</label>
            <input type="range" id="price" min='0' max='100' />
          </div>
        </section>
    </>
  )
  }
export default Header
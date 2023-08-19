import React from 'react'
import { Fondo2 } from '../utils/Fondo2'
const Nosotros = () => {
  return (
    <section className='flex flex-row gap-10 pt-28 px-6 py-6 items-center pl-20'>
        <article className='flex flex-col w-96 text-gray-800'>
            <h1 className='font-bold px-8 pb-6 text-center'>NUESTRA HISTORIA</h1>
            <h2 className='font-semibold'>Somos una familia de agricultores <span className='text-blue-950'>Organicos</span> que ofrece lo mejor de la tierra del Oriente Peruano.
            Esta gran aventura comenzó con la vision de nuestro fundador el Sr.<span className='text-blue-950 font-bold'>Felix Asencios</span>, cuyo trabajo comenzó hace 10 años aproximadamente. 
            Siendo el cacao el primer producto en ser sembrado en nuestra finca, siguiendole el plátano, papaya y citricos como la mandarina y tangelo.
            Esta gran vision lo llevó a sembrar también arboles como: caoba, cedro, tornillo, shaina, bolainas, entre otros.
            Actualmente venimos desarrollando uno de nuestros proyectos mas ambiciosos, que es la crianza de peces. Siendo nuestra principal menta la crianza del paiche.</h2>
        </article>
        <Fondo2/>
    </section>
  )
}

export default Nosotros
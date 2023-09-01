import { Cacao } from '../utils/Cacao'
import { Ajies } from '../utils/Ajies'
import { Citricos } from '../utils/Citricos'
import { Platanos } from '../utils/Platanos'

const NuestrosProductos = () => {
  return (
    <section className='flex flex-col gap-10 pt-28 px-6 py-6 items-center pl-10'>
        <article className='flex flex-row gap-10 pl-10 text-gray-800'>
            <div className='text-center w-96 items-center pt-16'>
                <h1 className='font-bold px-8 pb-6 '>CACAO</h1>
                <h2 className='font-semibold'>Nuestro producto estrella, cocechado con mucha dedicacion y pasion. Teniendo variedades como el Aromatico y clones CCN.</h2>            
            </div>
            <div>
                <Cacao/>
            </div>
        </article>
        <article className='flex flex-row-reverse gap-10 pl-10 text-gray-800'>
            <div className='text-center w-96 items-center pt-40'>
                <h1 className='font-bold px-8 pb-6 '>AJIES</h1>
                <h2 className='font-semibold'>Ajies de la zona, tales como, charapita, "pinchito de mono", aji dulce. Haciendo un trabajo de investigación, pudimos rescatar un aji de "monte" que es una variedad salvaje del aji charapita y logramos adaptar a nuestro clima el aji tabasco.</h2>            
            </div>
            <div>
                <Ajies/>
            </div>
        </article>
        <article className='flex flex-row gap-10 pl-10 text-gray-800'>
            <div className='text-center w-96 items-center pt-40'>
                <h1 className='font-bold px-8 pb-6 '>CITRICOS</h1>
                <h2 className='font-semibold'>Nuestros citricos fueron los que siguieron con esta aventura despues del cacao, contamos con limon nativo, el limon sotil y naranja e injertos, como el limon mandarina y tangelo</h2>            
            </div>
            <div>
                <Citricos/>
            </div>
        </article>
        <article className='flex flex-row-reverse gap-10 pl-10 text-gray-800'>
            <div className='text-center w-96 items-center pt-60'>
                <h1 className='font-bold px-8 pb-6 '>PLATANO</h1>
                <h2 className='font-semibold'>Nuestro caballito de batalla, el que nunca falta y nunca falla. Amamos nuestra variedad de platanos, bellaco, inguiri, seda, "muquicho" y manzano.</h2>            
            </div>
            <div>
                <Platanos/>
            </div>
        </article>
        
    </section>
  )
}

export default NuestrosProductos
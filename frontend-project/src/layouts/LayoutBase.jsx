import { Link } from "react-router-dom"
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { GrFacebook, GrInstagram, GrYoutube } from 'react-icons/gr'
import { LuMapPin } from 'react-icons/lu'

const LayoutBase = (props) => {
  return (
    <>
        <header className="fixed top-0 w-full px-4 py-6 bg-sky-100">
            <div className="container mx-auto flex justify-between">
                <h1 className="pl-4 font-bold">ASMATI FOODS</h1>
                <nav className="flex gap-12 font-semibold">
                    <Link to= '/' className="hover:underline hover:text-blue-950">Home</Link>
                    <Link to= '/Nosotros' className="hover:underline hover:text-blue-950">Nosotros</Link>
                    <Link to= '/NuestrosProductos' className="hover:underline hover:text-blue-950">Nuestros Productos</Link>
                    <Link to= '/TiendaVirtual' className="hover:underline hover:text-blue-950">Tienda Virtual</Link>
        
                </nav>
                <nav className="flex gap-8 font-semibold pr-6">
                    <Link to= '/Carrito' className="hover:underline hover:text-yellow-400">Carrito</Link>
                    <Link to= '/Ingresar' className="hover:underline hover:text-yellow-400">Ingresar</Link>
                </nav>
            </div>
        </header>
        <main>
            {props.children}
        </main>
        <footer className="bg-slate-950 text-white flex justify-between  items-center pt-6 px-6 py-6">
            <div className="w-96 flex flex-col gap-10">
                <h1 className="font-bold">ASMATI FOODS</h1>
                <p className="font-semibold">En ASMATI nos preocupamos por darte lo mejor, por eso todos nuestros procesos estan debidamente regulados. Nuestro principal objetivo es comer saludable.</p>
            </div>
            <div>
                <h1 className="font-semibold pb-4">Contacto</h1>
                <article className="flex flex-col gap-4 pb-6">
                 <p className="flex flex-row gap-4 text-center items-center"><HiOutlinePhone/> 01-934589634</p> 
                 <p className="flex flex-row gap-4 text-center items-center"><HiOutlineMail/>asmatifoods@contacto.com</p>
                 <p className="flex flex-row gap-4 text-center items-center"><LuMapPin/> Carretera FBT- Cs.Puerto Rico- Nvo. Progreso</p>
                </article>
                <Link to= '/PoliticaDeEntrega' className="hover:underline hover:text-blue-950 font-semibold">Politica de Entrega</Link>
            </div>
            <div className="flex flex-col gap-6 pr-10">
                <a className="hover:text-blue-800" href="#"><GrFacebook/></a>
                <a className="hover:text-pink-900" href="#"><GrInstagram/></a>
                <a className="hover:text-red-700" href="#"><GrYoutube/></a>
            </div>
        </footer>
    </>
  )
}

export default LayoutBase
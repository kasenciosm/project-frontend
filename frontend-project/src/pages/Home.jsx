import {BackgroundImage} from "../utils/BackgroundImage.jsx"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
      <section className="flex gap-20 bg-emerald-300">
        <div className="items-center pl-.5">
            <BackgroundImage />
        </div>
        <div className="fixed top-32 left-32 right-32 text-left font-extrabold text-slate-900 text-2xl items-center flex flex-col">
          <p className="pb-4 text-center">BIENVENIDOS</p>
          <p className="pb-4 text-center">A</p>
          <p className="pb-6 text-center">ASMATI FOODS</p>
          <div className="">
            <button className="items-center text-center font-light text-xs rounded-lg px-2 py-2 hover:font-medium hover:text-slate-900 bg-emerald-200">
            <Link to= '/Ingresar' className="text-center">VISITA NUESTRA TIENDITA</Link>
            </button>
          </div>
        </div>
      </section>
    </>

  )
}

export default Home
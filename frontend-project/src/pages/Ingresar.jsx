import { Link } from "react-router-dom"
import { useState, useContext } from "react"

import { useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { UserContext } from "../context/UserContext"

const MySwal = withReactContent(Swal)

const Ingresar = () => {
  const { storeUser }   = useContext(UserContext)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = form.email
    const password = form.password
    
    const url = `https://64e38e6dbac46e480e78f3f6.mockapi.io/api/v1/usuarios?email=${email}&password=${password}`

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    setForm({ email: '', password: '' })
    
    if (data.length === 1) {
      const cloneData =  { ...data[0] }
      
      delete cloneData.password
      storeUser(cloneData)
      navigate('/')

    } else {
      MySwal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas!'
      })
    }

  }

  return (
    <section className="bg-[url('./public/ajies.jpg')]">
      <form className='w-96 mx-auto pt-20 pb-10' onSubmit={handleSubmit}>
          <h1 className='text-center text-3xl font-semibold mb-3'>INGRESAR</h1>
          <div className='flex flex-col gap-4 bg-sky-100 p-8 rounded-lg shadow-lg'>
              <label className='font-medium'>
                  Email 
                  <input 
                  type="text" 
                  name="email"
                  placeholder='asmati@realfood.com' 
                  className='border rounded-lg w-full p-3'
                  onChange={handleChange}
                  required
                  value={form?.email} 
                  />
              </label>
              <label className='font-medium'>
                  Password
                  <input 
                  type="password"
                  name="password"
                  placeholder='*******' 
                  className='border rounded-lg w-full p-3'
                  onChange={handleChange}
                  required
                  value={form?.password}
                  />
              </label>
              <input 
              type='submit'
              value= "Login" 
              className='w-full bg-emerald-400 rounded-lg p-3 font-medium'
              />
              <h3 className="text-center">¿Aún no tienes cuenta?</h3>
              <Link to= '/Registrar' className="hover:underline hover:text-blue-950 text-center">Registrarse</Link>

          </div>


      </form>
    </section>
  )
}

export default Ingresar
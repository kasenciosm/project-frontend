import { useState } from "react"

import { useNavigate } from "react-router-dom"

const Registrar = () => {
    const [ form, setForm] = useState({
        name:'',
        email:'',
        password:'',
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setForm({ 
            ...form,
            [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'https://64e38e6dbac46e480e78f3f6.mockapi.io/api/v1/usuarios'
        const options = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(form)
        }
        
        const response = await fetch (url, options)
        const data = await response.json()
        console.log(data)
        
        setForm({ email:'', password:'' })

        navigate('/Ingresar')
    }
  return (
    <section className="bg-[url('./public/ajies.jpg')]">
      <form className='w-96 mx-auto pt-20 pb-10' onSubmit={handleSubmit}>
          <h1 className='text-center text-3xl font-semibold mb-3'>REGISTRAR</h1>
          {JSON.stringify(form)}
          <div className='flex flex-col gap-4 bg-sky-100 p-8 rounded-lg shadow-lg'>
              <label className='font-medium'>
                  Nombre
                  <input 
                  type="text" 
                  name="name"
                  placeholder='Nombre completo' 
                  className='border rounded-lg w-full p-3'
                  onChange={handleChange}
                  required
                  value={form?.name} 
                  />
              </label>
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
              <label className='font-medium'>
                  Confirmar Password
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
              value= "Registrar" 
              className='w-full bg-emerald-400 rounded-lg p-3 font-medium'
              onChange={handleChange}
              />
        

          </div>


      </form>
    </section>
  )
}

export default Registrar
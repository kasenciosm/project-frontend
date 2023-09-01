import appFirebase from '../credenciales'

import {getFirestore, collection, adDoc} from 'firebase/firestore'
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'

const db = getFirestore(appFirebase)
const storage = getStorage(appFirebase)

const Form = () => {

    let urlImg;

    const guardarInfo = async(event) =>{
      event.preventDefault()

      const nombre = event.target.nombre.value;
      const precio = event.target.precio.value;

      const newProduct = {
        nombre: nombre,
        precio: precio,
        imagen: urlImg
      }


      try {
        await adDoc(collection(db, 'productos'),{
          ...newProduct
        })
      } catch (error){
        console.log(error)
      }

      event.target.nombre.value;
      event.target.precio.value;
      event.target.file.value;
      


    }

    const fileHandler = async (event) => {
      const archivo = event.target.files[0]

      const refArchivo = ref(storage, `documento/${archivo.name}`)
      await uploadBytes(refArchivo, archivo)

      urlImg = await getDownloadURL(refArchivo)
    }
    


  return (
    <div className='card card-body'>
      <h1 className='text-center'>Agregar Productos</h1>
      <form>
        <label>Nombre:</label>
          <div className=''>
            <input type='text' placeholder='Ingresar producto' id='nombre' className='' required/>
          </div>
        <label>Precio</label>
          <div>
          <input type='text' placeholder='Ingresar precio' id='precio' className='' required/>
          </div>
        <label>Ingresar Imagen</label>
          <input type='text' id='file' placeholder='agregar imagen' onChange={fileHandler} />
      </form>

    </div>
  )
}

export default Form
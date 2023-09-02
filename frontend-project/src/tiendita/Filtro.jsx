
const Filtro = () => {
    const [producto] = useState('')
const [filters, setFilters] = useState({
  minPrice: 0
})

const filterProducts = (productos) => {
  return productos.filter(producto => {
    producto.price >= filters.minPrice
  })
}
  return (
    <div>Filtro</div>
  )
}

export default Filtro
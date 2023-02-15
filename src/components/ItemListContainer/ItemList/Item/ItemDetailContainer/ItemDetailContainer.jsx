import { useParams } from "react-router-dom"

const ItemDetailConainer = () => {

  const { idProducto } = useParams()
  console.log(idProducto)
  return (
    <div>ItemDetailConainer id: {idProducto}</div>
  )
}

export default ItemDetailConainer

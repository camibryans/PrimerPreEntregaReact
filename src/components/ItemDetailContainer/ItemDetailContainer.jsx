import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../utiles/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProducto } = useParams()

  useEffect(() => {
    gFetch(idProducto)
    .then(resp => setProduct(resp))
    .catch(err => setProduct(err))
  },[])

  console.log(product)
  return (
    <ItemDetail product = {producto}/>
  )
}

export default ItemDetailContainer


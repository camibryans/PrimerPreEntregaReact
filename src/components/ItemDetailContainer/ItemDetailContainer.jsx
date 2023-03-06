import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  { gFetch } from "../../utiles/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProd } = useParams()


  useEffect(()=>{
      
  //     gFetch(idProducto)
  //     .then(resp => setProduct(resp))
  //     .catch(err => setProduct(err))
  // },[])

  // setProduct([])

  gFetch()
  .then(resp => setProduct(resp.find( prod => prod.id === idProd)))
  .catch(error => console.log(error))
}, [idProd])
console.log(product)
  
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer


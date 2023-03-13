import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  { gFetch } from "../../utiles/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct } = useParams()


  useEffect(()=>{
      
  //     gFetch(idProduct)
  //     .then(resp => setProduct(resp))
  // },[])

  // setProduct([])

  gFetch()
  .then(resp => setProduct(resp.find( product => product.id === idProduct)))
  .catch(error => console.log(error))
}, [idProduct])
console.log(product)
  
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer


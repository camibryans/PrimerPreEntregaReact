import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  { gFetch } from "../../utiles/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { idProduct } = useParams()

  useEffect(()=>{
    
  gFetch()
  .then(resp => setProduct(resp.find( product => product.id === idProduct)))
  .catch(error => console.log(error))
  .finally(() => setLoading(false))
}, [idProduct])
  
  return (
      <>
            { loading ? 
                      <h2>Cargando...</h2>
                  : 
                           <ItemDetail product={product}/>
               } 
      </>
    )
}

export default ItemDetailContainer


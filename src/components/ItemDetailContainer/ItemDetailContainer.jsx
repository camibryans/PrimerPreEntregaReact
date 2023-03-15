import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { idProduct } = useParams()


useEffect(()=>{
  const db = getFirestore()
  const queryDoc = doc(db, 'Items', idProduct)
  getDoc(queryDoc)
  .then(respProd => setProduct(  { id: respProd.id, ...respProd.data() }  ))
  .catch(err => console.error(err))
  .finally(()=> setLoading(false)) 
},[])


  return (
      <>
            { loading ? 
                      <Loading/>
                  : 
                           <ItemDetail product={product}/>
               } 
      </>
    )
}

export default ItemDetailContainer


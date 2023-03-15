import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import Loading from "../Loading/Loading"
 
export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()
    

    useEffect(()=>{
        const db = getFirestore()        
        const queryCollection = collection(db, 'Items')
        

        if(idCategory) {
        const queryFilter = query(queryCollection, where( 'category', '==' , idCategory))              

        getDocs(queryFilter)
        .then(respCollection => setProducts( respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() })) ))
        .catch(err => console.error(err))
        .finally(()=> setLoading(false))   
    } else {
        getDocs(queryCollection)
        .then(respCollection => setProducts( respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() })) ))
        .catch(err => console.error(err))
        .finally(()=> setLoading(false)) 
    }

    }, [idCategory])



return(
    <>
 { loading ? 
                    <Loading/>
                : 
                    <>
                        <h2>{greeting}</h2>
                      
                            <ItemList products={products}/>
                    </>
            }
        </>
    )
}
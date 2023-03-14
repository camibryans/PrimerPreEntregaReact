import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../utiles/gFetch"
import ItemList from "../ItemList/ItemList"
 
const Loading = () => {
    useEffect (() => {
        return () => console.log('stop loading...')
    } )
    return (
        <h2>Cargando ...</h2>
    )
}


export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()


    useEffect(()=>{
        if (idCategory) {
            gFetch()
            .then(resp => setProducts(resp.filter(product=> product.category === idCategory)))
            .catch( err => console.log(err))
            .finally( ()=> setLoading(false))            
            
        } else {
            gFetch()
            .then(resp => setProducts(resp))
            .catch( err => console.log(err))
            .finally( ()=> setLoading(false))            
        }
    }, [idCategory])
    
console.log(idCategory)

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
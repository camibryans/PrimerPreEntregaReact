import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../utiles/gFetch"
import ItemList from "../ItemList/ItemList"
 

export const ItemListContainer = ({saludos}) => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()


    useEffect(()=>{
        if (idCategoria) {
            gFetch()
            .then(resp => setProductos(resp.filter(producto=> producto.categoria === idCategoria)))
            .catch( err => console.log(err))
            .finally( ()=> setLoading(false))            
            
        } else {
            gFetch()
            .then(resp => setProductos(resp))
            .catch( err => console.log(err))
            .finally( ()=> setLoading(false))            
        }
    }, [idCategoria])
    
console.log(idCategoria)

return(
    <>
 { loading ? 
                    <h2>Cargando ...</h2>
                : 
                    <>
                        <h2>{saludos}</h2>
                        <ItemList productos={productos}/>
                    </>
            }
        </>
    )
}
import { useEffect, useState } from "react";
import { gFetch } from "../../utiles/gFetch";

export const Item = ( { saludos}) => {
        const [productos, setProductos] = useState ([])
        const [loading, setLoading] = useState(true)

    useEffect(() => {
    gFetch()
    .then(resp => setProductos(resp))
    .catch(err => console.log(err))
    .finally( () => setLoading(false))
},[])

    // console.log(productos)
    return (
        <>
            <h2>{saludos}</h2>
         { loading ?
            <h2>Cargando...</h2>
        :
                <div style ={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    
                {productos.map( producto => 
                <div key={producto.id} className="card w-35 mt-4"> 
                    <div className="card-header"> 
                    Nombre: {producto.name}
                    </div>
                    <div className="card-body"> 
                        <img className="w-100" src={producto.imagen}/>
                        <br/>
                        <label> Categoria: {producto.categoria}</label>
                        <label> Precio: {producto.price}</label>
                        <label> Stock: {producto.stock}</label>
                    </div>
                    <div className="card-footer"> 
                        <button className="btn btn-outline-dark w-40">Detalle</button>
                        <button className="btn btn-outline-dark w-60">Agregar al carrito</button>
                    </div>

                </div>)
            }
            </div>
        }   
        </>
    )
}
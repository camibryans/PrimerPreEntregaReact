import { gFetch } from "../../utiles/gFetch";
import { useCartContext } from "../CartContext/CartContext";
import { ItemCount } from "../ItemCount/ItemCount"


const ItemDetail = ({product}) => {

    const { agregarCart } = useCartContext()

        function onAdd(cantidad){
        console.log(cantidad)
        agregarCart( { ...product, cantidad } )
    }

    return (
        <div>
            <div className="row">
                <div className="col-6">       
                    <div> 
                        <img src={product.img} className="w-50"/>
                        <br/>
                        <p> {product.name}</p>
                        <p>Categoria: {product.categoria}</p>
                        <p>Precio: {product.price}</p>
                        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                    </div>
                </div>
                <div className="col-6">
                    <button className="btn btn btn-outline-dark w-50">Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount"


const ItemDetail = ({product}) => {
    const [Buy, setBuy] = useState(true)
    const { addCart } = useCartContext()

    function onAdd(quantity){
    console.log(quantity)
    addCart( { ...product, quantity } ) 
    setBuy(false)
    }

    return (
        <div>
            <div className="row">
                <div className=" card col-6 ">       
                    <div> 
                        <p className="card-header container d-flex justify-content-center"> {product.name}</p>
                        <div className="card-body">
                            <img src={product.img} className="w-50"/>
                            <br/>            
                            <label>Categoria: {product.category}</label>
                            <br/>
                            <label>Precio: {product.price}</label>
                            <br/>
                            <label>Stock: {product.stock}</label>
                        </div>
                    </div>
                </div>
                
                    {Buy ? 
                        <div className="card-footer ">
                            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
                        </div>
                        :
                    <>     
                        <div className="col-6">              
                            <Link to="/" className="btn btn btn-outline-dark w-50">Continuar comprando</Link>
                            <Link to="/cart" className="btn btn btn-outline-dark w-50">Finalizar compra</Link>
                        </div>  
                    </>
                }   
            </div>
                      
            
        </div>
    )
}

export default ItemDetail
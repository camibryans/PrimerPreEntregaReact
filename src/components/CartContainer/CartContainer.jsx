import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {

    const { cartList,emptyCart, removeItem, finalPrice, totalQuantity} = useCartContext()

    return(
        <div>    
            
          {cartList.length === 0  ? (
            <div>
                <div>
                    <h2>Tu carrito está vacío!</h2>
                    <h4>Te invitamos a ver nuestros productos</h4>
                    <Link to="/"> <button className='btn btn-success' >Ir a Tienda</button></Link>
                </div>
            </div> 
                ) : (
                   <div>
                    { cartList.map(prodCart=> (
                            
                            <div key={prodCart.id} className='w-100'>
                                    {/* <div className="w-50"> */}
                                        <img src={prodCart.img} className='w-25' />
                                    {/* </div> */}
                                    Nombre: {prodCart.name} -
                                    Cantidad: {prodCart.quantity} -
                                    Precio: ${prodCart.price} 
                                    <button className='btn btn-danger' onClick={()=> removeItem(prodCart.id)}>Eliminar item</button>               
                            </div>
                             ))}  
                                <span><h3>Estás llevando {totalQuantity()} producto(s)</h3></span>
                                <span><h3>Total a pagar : ${finalPrice()}</h3></span>
                                <br/>
                                <button onClick={emptyCart}>Vaciar carrito</button>     
                     </div>  )}
        </div>
    )       
}


export default CartContainer
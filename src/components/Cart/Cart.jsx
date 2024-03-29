import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import EmptyCart from "../EmptyCart/EmptyCart"


const Cart = () => {
    const { cartList,emptyCart, removeItem, finalPrice, totalQuantity} = useCartContext()


return(
    <div>    
        
      {cartList.length === 0  ? (
        <EmptyCart/>

            ) : (    
                           
                 <div>
                { cartList.map(prodCart=> (
                        
                        <div key={prodCart.id} className='w-100'>
                                    <img src={prodCart.img} className='w-25' />
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
                            <Link to={`/checkout`}>Crea tu Orden de Compra</Link>
                 </div>    
                  )}
    </div>
)}


export default Cart
  
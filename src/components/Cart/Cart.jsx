import { useCartContext } from "../../context/CartContext"
import EmptyCart from "../EmptyCart/EmptyCart"
import Form from "../Form/Form"


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
                            <Form/>
                 </div>    
                  )}
    </div>
)}


export default Cart
  
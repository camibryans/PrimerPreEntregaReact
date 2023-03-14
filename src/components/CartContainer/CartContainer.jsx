import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {

    const { cartList,emptyCart, removeItem} = useCartContext()

    // function TextComponent({ condition = false }) {

    //     return (
    //         <>
    //             <h2> { condition ? 'Hay Stock' : 'No Hay stock'} </h2>     
    //         </>
    //     )
    // }
    
     
    return(
        <div>
            {
                cartList.map(prodCart=> (
               
                    <p key={prodCart.id} className='w-50'>
                        {/* <div className="w-50"> */}
                            <img src={prodCart.img} className='w-25' />
                        {/* </div> */}
                        Nombre: {prodCart.name} -
                        Cantidad: {prodCart.quantity} -
                        Precio: {prodCart.price}    
                     <button onClick={()=> removeItem(prodCart.id)}>Eliminar item</button>  
                     {/* <TextComponent/>                   */}
                  
                    </p>
                    
                
                ))
            } 
           
        <button onClick={emptyCart}>Vaciar carrito</button>
        </div>
    )
}


export default CartContainer
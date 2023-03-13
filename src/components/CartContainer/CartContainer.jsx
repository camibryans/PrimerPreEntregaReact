import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {

    const { cartList,emptyCart, removeItem} = useCartContext()

    return(
        <div>
            {
                cartList.map(prodCart => (
                    <label>
                        <img src={prodCart.img} className='w-25' />
                        Nomnbre: {prodCart.name}
                        Cantidad: {prodCart.quantity}
                        Precio: {prodCart.price}
                    </label>
                    // <p key={prodCart.id} className='w-50'>
                    //     {/* <div className="w-50"> */}
                    //         <img src={prodCart.img} className='w-25' />
                    //     {/* </div> */}
                    //     Nombre: {prodCart.name} -
                    //     Cantidad: {prodCart.quantity} -
                    //     Precio: {prodCart.price}
                    //     <button onClick={removeItem}>Eliminar item</button>
                    // </p>
                ))
            }
        <button onClick={emptyCart}>Vaciar carrito</button>
        </div>
    )
}

export default CartContainer
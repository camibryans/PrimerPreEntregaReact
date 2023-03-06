const CartContainer = () => {

    const { cartList,vaciarCarrito} = useCartContext()

    return(
        <div>
            {
                cartList.map(prodCart => (
                    <p key={prodCart.id}>
                        {/* <div className="w-50"> */}
                            <img src={prodCart.foto} className='w-25' />
                        {/* </div> */}
                        Nombre: {prodCart.name} -
                        Cantidad: {prodCart.cantidad} -
                        Precio: {prodCart.price}
                    </p>
                ))
            }
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}

export default CartContainer
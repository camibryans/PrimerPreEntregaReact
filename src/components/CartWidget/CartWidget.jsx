import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {totalQuantity} = useCartContext()
  
    return (
        <div>
            <FaShoppingCart size={'2rem'} color={'black'}/> { totalQuantity() > 0 && totalQuantity() }
        </div>
    )
}

export default CartWidget 
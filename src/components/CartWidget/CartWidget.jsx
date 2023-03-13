import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {totalQuantity} = useCartContext()
    console.log(totalQuantity())
  
    return (
        <div>
            {/* <FaShoppingCart size={'2rem'} color={'brown'}/>
            <span>1</span> */}
            <FaShoppingCart size={'2rem'} color={'black'}/> { totalQuantity() > 0 && totalQuantity() }
        </div>
    )

}

export default CartWidget 
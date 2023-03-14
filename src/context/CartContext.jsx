import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
} 

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addCart = ( product ) => {
            const existsInCart = cartList.find(prod => prod.id === product.id)
                if(existsInCart) {
                    const updateCart = cartList.map((item) => {
                        if(item.id === product.id) {
                            return {...item, quantity:item.quantity + product.quantity}
                        }else{
                            return item
                    }})
                setCartList(updateCart)
            } else{
                setCartList( [
                    ...cartList,
                    product
                ])}
    }

    const totalQuantity = () => cartList.reduce((count, product) => count += product.quantity, 0)

    const finalPrice = () => cartList.reduce((count, product) => count += (product.quantity * product.price), 0)

    const emptyCart = () =>{ setCartList([]) }
 
    const removeItem = 
    (id) =>setCartList(cartList.filter(prod => prod.id!== id))
        
    
    return (
        <CartContext.Provider value={{
            cartList, 
            addCart,
            emptyCart,
            removeItem,
            finalPrice,
            totalQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}
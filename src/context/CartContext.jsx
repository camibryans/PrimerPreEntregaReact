import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
} 

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addCart = ( product ) => {
        const idxProduct = cartList.findIndex(product => product.id === product.id)
            if (idxProduct!==-1){
                cartList[idxProduct].quantity += product.quantity
                setCartList([...cartList])
             return
            }   
        setCartList( [
            ...cartList,
            product
        ] )
    }

    const totalQuantity = () => cartList.reduce((count, product) => count += product.quantity, 0)

    const finalPrice = () => cartList.reduce((count, product) => count += (product.quantity * product.price), 0)

    const emptyCart = () =>{ setCartList([]) }
 
    const removeItem = (id) =>
        setCartList(cartList.filter(product => product.id!== id))
    

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


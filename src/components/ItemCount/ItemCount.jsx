import { useState } from "react"

export const ItemCount = ({saludo, componente}) => {
    const [count, setCount] = useState(0)
    const [boleano, setBoleano] = useState(true)

    let titulo = 'Eclair Coffee'

    const AddItem = () => {
        setCount(count + 1)
    }

    const removeItem = () => {
        if (count > 0) {
        setCount(count => count - 1)
    }
    };

    return (
        <>
      <button onClick={removeItem}> - </button>  
      <h2>Contador: {count} </h2>    
      {/* {componente} */}
      <button onClick={AddItem}> + </button>  
      </>
      )
    }
         
        
    
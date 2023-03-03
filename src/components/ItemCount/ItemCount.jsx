import { useState } from "react"

export const ItemCount = ({initial  = 0, stock=10, onAdd}) => {
    const [count, setCount] = useState(0)
    
    const AddItem = () => {
        if (count < stock) {
        setCount(count + 1)
        }
    }

    const removeItem = () => {
        if (count > initial) {
        setCount(count => count - 1)
    }
    }

    return (
    <div className="card mt-5 w-50" >
            <div className="card-body row">
                <div className="col">
                    <button className="btn btn-outline-dark w-100" onClick={removeItem}> - </button>
                </div>
                <div className="col">
                    <center>
                     <label>{count}</label>
                    </center> 
                </div>
                <div className="col">
                     <button className="btn btn-outline-dark w-100" onClick={AddItem}> + </button>
                </div>
            </div>
                <div className="card-footer">
                    <button className="btn btn-outline-dark w-100" onClick={()=>onAdd(count)}>Agregar al carrito</button>
                </div>
        </div>
      )
    }
         
        
    
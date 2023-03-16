import { memo } from "react"
import Item from "../Item/Item"

const ItemList = memo (({ products}) => {
    return (
        <div style={{display:'flex', flexDirection: 'row ', flexWrap:'wrap'}} 
            className="justify-content-center align-item-center" >     

            {products.map( product => 
            <Item  key={product.id} product={product}/> 
            )}
        </div>
    )}
)

export default ItemList
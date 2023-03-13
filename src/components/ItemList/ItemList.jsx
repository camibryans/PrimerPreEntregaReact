import Item from "../Item/Item"

const ItemList = ( { products}) => {

return (
    <div style={{display:'flex', flexDirection: 'row ', flexWrap:'wrap'}} className="justify-content-center align-item-center"
        // style={styleCards}
     >         
                {products.map( product => 
            
                <Item key={product.id} product={product}/> )
                      }
    </div>
)
}

export default ItemList
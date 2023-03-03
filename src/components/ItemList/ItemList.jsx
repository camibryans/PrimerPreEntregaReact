import Item from "../Item/Item"

const ItemList = ( { productos}) => {

return (
    <div className="justify-content-center align-item-center"
        // style={styleCards}
     >         
            {productos.map( producto => <Item producto={producto}/> )
        }
    </div>
)
}

export default ItemList
import { Link } from "react-router-dom"


const Item = ({producto}) => {
    return (
      <div key={producto.id} className="card w-25 m-5 shadow ">
        
                          <div className="card-header">
                               {producto.name}
                          </div>
                          <div className="card-body">
                              <img className="w-100" src={producto.img} />
                              <br />
                              <label>Categoría: {producto.category}</label>
                              <label>Precio: {producto.price}</label>
                              <label>Stock: {producto.stock}</label>
                          </div>
                          <div className="card-footer">
                                     <Link to={`/detalle/${producto.id}`}>
                                            <button className="btn btn-outline-dark w-100">Detalle</button>
                                     </Link>
                          </div>
        </div>
    )
  }
  
  export default Item
  
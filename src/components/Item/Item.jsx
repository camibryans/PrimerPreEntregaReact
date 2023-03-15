import { Link } from "react-router-dom"


const Item = ({product}) => {
    return ( 
               <div key={product.id} className="card w-25 m-4 shadow">
                                    <div className="container d-flex justify-content-center card-header">
                                        {product.name}
                                    </div>
                                    <div className="card-body">
                                        <img className="w-100" src={product.img} />
                                        <br />
                                        <label>Categoría: {product.category}</label>
                                        <br/>
                                        <label>Precio: {product.price}</label>
                                        <br/>
                                        <label>Stock: {product.stock}</label>
                                    </div>
                                    <div className="card-footer">
                                              <Link to={`/detalle/${product.id}`}>
                                                    <button className="btn btn-outline-dark w-100">Detalle</button>
                                              </Link>
                                    </div>
                  </div>
    )
  }
  
  export default Item
  
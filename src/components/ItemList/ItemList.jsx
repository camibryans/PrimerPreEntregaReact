      
                {productos.map( producto => 
                    <div key={producto.id} className="card w-35 mt-4"> 
                        <div className="card-header"> 
                        Nombre: {producto.name}
                        </div>
                        <div className="card-body"> 
                            <img className="w-100" src={producto.imagen}/>
                            <br/>
                            <label> Categoria: {producto.categoria}</label>
                            <label> Precio: {producto.price}</label>
                            <label> Stock: {producto.stock}</label>
                        </div>
                        <div className="card-footer"> 
                            <button className="btn btn-outline-dark w-40">Detalle</button>
                            <button className="btn btn-outline-dark w-60">Agregar al carrito</button>
                        </div>
    
                    </div>)
                }
import { Link } from "react-router-dom"

const EmptyCart = () =>  {

    return (
        <div className="container d-flex justify-content-center">
            <div>
                <h2>Tu carrito está vacío!</h2>
                <h4>Te invitamos a ver nuestros productos</h4>
                <Link to="/"> <button className='btn btn-success' >Ir a Tienda</button></Link>
            </div>
        </div> 
    )

}

export default EmptyCart
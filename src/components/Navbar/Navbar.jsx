import CartWidget from "../CartWidget/CartWidget"
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom"


function Navbar() {  
    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Eclair E-commerce</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink className={({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary' } to='/'>Home</NavLink>
                <li className="nav-item dropdown">
                  
                  <NavLink className="nav-link dropdown-toggle btn btn-outline-primary"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tienda</NavLink>
                {/* {categories.map(cat => <NavLink key = {cat.id} className= {({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary' } to={cat.path}>{cat.name}</NavLink>)}   */}
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className= {({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary' } to='/categoria/Cafeteras'>Cafeteras</NavLink>
                    <NavLink className= {({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary' } to='/categoria/Cafes'>Cafe en grano</NavLink> 
                    <NavLink className={({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary' } to='/categoria/Herramientas'>Herramientas Barista</NavLink>
                  </ul>
                  
                  
{/* const categories = [
  {id:c1, path:'/categoria/Cafeteras', name: 'Cafeteras', description:'Cafeteras en venta'},
  {id:c2, path:'/categoria/Cafes', name: 'Cafe en grano', description:'Cafe en grano'},
  {id:c3, path:'/categoria/Herramientas', name: 'Herramientas', description:'Herramientas de Barista'}
 ] */}
                </li>   
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
            <NavLink to='/cart'>
              <CartWidget/>
            </NavLink>
        </div>
      </nav>
    )    
  }
  
  export default Navbar
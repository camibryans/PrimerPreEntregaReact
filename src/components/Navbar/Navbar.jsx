import CartWidget from "../CartWidget/CartWidget"


function Navbar() {
  
    return (
      <nav className = 'navbar navbar-expand-lg fixed-top'>
        <div className="container-fluid">
        <label className="navbar-brand">Eclair E-commerce</label>

          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tienda</a>
          <ul class="dropdown-menu">Tienda
            <li><a class="dropdown-item" href="#">Cafe en grano</a></li>
            <li><a class="dropdown-item" href="#">Cafe molido</a></li>
            <li><a class="dropdown-item" href="#">Cafeteras</a></li>
          </ul>
       
        <p>Acerca</p>
        <p>Capacitaciones</p>
        <p>Ubicacion</p>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
        < CartWidget/>
        </div>
      </nav>
     
    )    
  }


  export default Navbar
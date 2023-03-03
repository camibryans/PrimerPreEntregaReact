import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import Formulario from './components/Formulario/Formulario'
import Titulo from './components/Titulo/Titulo'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ItemCount } from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/Navbar'
import { CartContextProvider } from './components/CartContext/CartContext'

 
function App() {
  
  return (
    <BrowserRouter>
      <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Para los verdaderos coffee lovers' />} />
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
        <Route path='*' element={ <Navigate to='/' />} />  
        {/* <Route path='cart' elemento={<CartContainer/>} /> */}
   
      </Routes>
      {/* <ItemCount inital={1} stock={10} onAdd={()=>{}} /> */}
    {/* <Titulo titulo={titulo} subtitulo='Soy sub de app'/> */}
    {/* <Formulario /> */}
      </CartContextProvider>
    </BrowserRouter>
    
  )
}

export default App

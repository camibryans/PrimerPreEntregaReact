import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import Form from './components/Form/Form'
import Title from './components/Title/Title'
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
        {/* <Route path='/cart' element={<CartContainer/>} /> */}
   
      </Routes>
      {/* <ItemCount inital={1} stock={10} onAdd={()=>{}} /> */}
    {/* <Title title={title} subtitle='Soy sub de app'/> */}
    {/* <Form /> */}
      </CartContextProvider>
    </BrowserRouter>
    
  )
}

export default App

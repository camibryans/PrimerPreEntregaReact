import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/Navbar'
import { CartContextProvider } from './context/CartContext'
import CartContainer from './components/CartContainer/CartContainer'



function App() {
  
  return (
    <BrowserRouter>
      <CartContextProvider>
          <Navbar />
          <Routes>
              <Route path='/' element={<ItemListContainer saludo='Para los verdaderos coffee lovers' />} />
              <Route path='/detalle/:idProduct' element={<ItemDetailContainer/>} />
              <Route path='/categoria/:idCategory' element={<ItemListContainer/>} />
              <Route path='*' element={ <Navigate to='/' />} />  
              <Route path='/cart' element={<CartContainer/>} />
          </Routes>            
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App

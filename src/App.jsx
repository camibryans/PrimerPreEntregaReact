import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Formulario from './components/Formulario/Formulario'
import Titulo from './components/Titulo/Titulo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemCount } from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
 
function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo='Para los verdaderos coffee lovers' />} />
        <Route path='detalle' element={<ItemDetailContainer/>} />
        {/* <Route path='cart' elemento={<CartContainer/>} /> */}
      </Routes>
      <ItemCount inital={1} stock={10} onAdd={()=>{}} />
    {/* <Titulo titulo={titulo} subtitulo='Soy sub de app'/> */}

    {/* <Formulario /> */}
    
    </BrowserRouter>
  )
}

export default App

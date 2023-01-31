import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
 
function App() {
  return (
    <>
    {/*Elemento */}
    {/* <Navbar /> */}
    <Navbar/>
    <ItemListContainer saludo='Bienvenidos a Eclair!' />
    </>
  )
}

export default App

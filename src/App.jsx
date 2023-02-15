import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Formulario from './components/Formulario/Formulario'
import Titulo from './components/Titulo/Titulo'
 
function App() {
  let titulo = "Soy titulo de app"
  return (
    <>
    
    {/*Elemento */}
    {/* <Navbar /> */}

    <Navbar />

    <Titulo titulo={titulo} subtitulo='Soy sub de app'/>

    <ItemListContainer saludo='Bienvenidos a Eclair!' />

    <Formulario />
    
    </>
  )
}

export default App

import Titulo from "../Titulo/Titulo"


export const ItemListContainer = ({saludo}) => {
    let count = 0
    let titulo = 'Eclair Coffee'
    return (
        <>
        <Titulo titulo={titulo} subtitulo='Stay Happy'/>
        <p>{saludo}</p>

{/* <section>
  <label>click: {count}</label>
</section>

<section>
<Titulo titulo='Form' subtitulo='Form subtitulo'/>
<form>
  <input type = "text" placeholder ="ingrese un nombre"/>
</form>
</section> */}
        
        
        </>
    )
}
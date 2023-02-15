import Titulo from "../Titulo/Titulo"


const Formulario = () => {
    return (
        <section>
        <Titulo titulo='soy titulo de form' subtitulo='soy subt de form'/>
        
        <form>
            <input type="text" placeholder="ingrese su nombre"/>
        </form>
            </section>       
    )
}

export default Formulario
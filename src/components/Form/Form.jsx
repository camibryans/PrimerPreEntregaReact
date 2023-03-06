import Titulo from "../Title/Title"


const Form = () => {
    return (
        <section>
        <Titulo titulo='soy titulo de form' subtitulo='soy subt de form'/>
        
        <form>
            <input type="text" placeholder="ingrese su nombre"/>
        </form>
            </section>       
    )
}

export default Form
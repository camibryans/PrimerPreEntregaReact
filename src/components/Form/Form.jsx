import Titulo from "../Title/Title"


const Form = () => {
    return (
        <section>
        <Titulo titulo='soy titulo de form' subtitulo='soy subt de form'/>
        <div className="container d-flex justify-content-center" >
            <form className="form-group w-50">
                <h3>Ingrese sus datos</h3>

                <input 
                type="text"
                className="form-control"
                name="name" 
                placeholder="Nombre"
                // onChange={handleOnChange}
                // value= {dataForm.name}
                />
                <input 
                type="text"
                className="form-control"
                name="phone" 
                placeholder="Número teléfonico"
                // onChange={handleOnChange}
                // value= {dataForm.phone}
                />
                <input 
                type="text"
                className="form-control"
                name="email" 
                placeholder="Email"
                // onChange={handleOnChange}
                // value= {dataForm.email}
                />

                <button className="btn btn-success">Generar orden de compra</button>
            </form>
        </div>
        </section>       
    )
}

export default Form
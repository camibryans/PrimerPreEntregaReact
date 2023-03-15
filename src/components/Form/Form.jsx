import { useState } from "react"
import Titulo from "../Title/Title"
import {addDoc, collection, getFirestore} from "firebase/firestore"

// console.log(dataForm)

const Form = () => {

    const [id, setId] = useState('')
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const createOrder = (event) => {
        event.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.totalPrice = totalPrice()
        order.products = cartList.map(({id, name, price}) => ({id, name, price}))
    }

    const db = getFirestore()
const queryCollection = collection(db, 'Orders')

addDoc(queryCollection, order)
.then(resp => setId(resp.id))
.catch(err => console.log(err))
.finally(() => {
    emptyCart()
    setDataForm({
        name:'',
        phone:'',
        email:''
    })
})

const handleOnChange = (event) => {
    setDataForm ({
        ...dataForm,
        [event.target.name]: event.target.value
    })
}

    return (
        // { id !== '' && <h2> {id} </h2> }
        
        <section>
        <Titulo titulo='soy titulo de form' subtitulo='soy subt de form'/>
        <div className="container d-flex justify-content-center" >
            <form className="form-group w-50" onSubmit={createOrder}>
                <h3>Ingrese sus datos</h3>

                <input 
                type="text"
                className="form-control"
                name="name" 
                placeholder="Nombre"
                onChange={handleOnChange}
                value= {dataForm.name}
                />
                <input 
                type="text"
                className="form-control"
                name="phone" 
                placeholder="Número teléfonico"
                onChange={handleOnChange}
                value= {dataForm.phone}
                />
                <input 
                type="text"
                className="form-control"
                name="email" 
                placeholder="Email"
                onChange={handleOnChange}
                value= {dataForm.email}
                />

                <button className="btn btn-success">Generar orden de compra</button>
            </form>
        </div>
        </section>       
    )
}

export default Form
import { useState } from "react"
import {addDoc, collection,  getFirestore} from "firebase/firestore"
import Title from "../Title/Title"

const Form = () => {

    const [id, setId] = useState('')
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const createOrder = (event) => {
        const {finalPrice} = useCartContext()

        event.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.finalPrice = finalPrice()
        order.products = cartList.map(({id, name, price}) => ({id, name, price}))
   

    const db = getFirestore()
    const queryCollection = collection(db, 'Orders')

    addDoc(queryCollection, order)
    .then(resp => setId(resp.id))
    .catch(err => console.log(err))
    // .finally (() => setId(resp.id))
    .finally(() => {
        emptyCart()
        setDataForm({
            name:'',
            phone:'',
            email:''
        })
    })
}

const handleOnChange = (event) => {
    setDataForm ({
        ...dataForm,
        [event.target.name]: event.target.value
    })
}

    return (
        <>
        {!id?          
            <section>
                <Title title='Crea tu orden de compra' subtitle='Gracias por elegirnos!'/>
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
            :  <h2> Tu número de Orden de Compra es:{id} </h2> }
        </>                
    )}

export default Form
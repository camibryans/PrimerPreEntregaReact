import { useEffect } from "react"

const Loading = () => {
    useEffect (() => {
        return () => console.log('stop loading...')
    } )
    return (
        <h2 className='container d-flex justify-content-center'>Cargando ...</h2>
    )
}

export default Loading
import { useEffect } from "react"

const Loading = () => {
    useEffect (() => {
        return () => console.log('stop loading...')
    } )
    return (
        <h2>Cargando ...</h2>
    )
}

export default Loading
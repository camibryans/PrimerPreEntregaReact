import { ItemCount } from "../ItemCount/ItemCount"
import Titulo from "../Titulo/Titulo"
import { ItemList } from "./ItemList/ItemList"

export const ItemListContainer = ({saludo}) => {
    let count = 0
    let titulo = 'Eclair Coffee'
    return (
        <>
        <Titulo titulo={titulo} subtitulo='Stay Happy'/>
        <p>{saludo}</p>     
        <ItemList/>
        <ItemCount/>       
        </>
         )
        }
      
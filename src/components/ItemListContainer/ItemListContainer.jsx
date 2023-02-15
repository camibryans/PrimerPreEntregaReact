import { Item } from "../Item/Item"
import { ItemCount } from "../ItemCount/ItemCount"
import Titulo from "../Titulo/Titulo"


export const ItemListContainer = ({saludo}) => {
    let count = 0
    let titulo = 'Eclair Coffee'
    return (
        <>
        <Titulo titulo={titulo} subtitulo='Stay Happy'/>
        <p>{saludo}</p>     
        <Item/>
        <ItemCount/>       
        </>
         )
        }


        
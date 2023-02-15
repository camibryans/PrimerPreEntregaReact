let productos = [
    {id:"1", categoria: "cafeteras", name: "Chemex", price: "$ 200", stock: "4", img: "imagenes/Chemex coffeemaker.jpg"},
    {id:"2", categoria: "cafeteras", name: "AeroPress", price: " $ 200",stock: "2", img: "imagenes/AeroPress.jpg"},
    {id:"3", categoria: "cafeteras", name: "Filtros para Chemex", price: "$ 200", stock: "3", img: "imagenes/Chemex filters.jpg"}
]

export const gFetch = () => new Promise((res, rej) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            res(productos)
        }, 2000)
    } else {
        rej('Todo mal')
    }
})
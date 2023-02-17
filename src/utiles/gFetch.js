let productos = [
    {id:"1", categoria: "cafeteras", name: "Chemex", price: "$ 5000", stock: "4", img: "imagenes/Chemex coffeemaker.jpg"},
    {id:"2", categoria: "cafeteras", name: "AeroPress", price: " $ 5000",stock: "2", img: "imagenes/AeroPress.jpg"},
    {id:"3", categoria: "cafeteras", name: "Filtros para Chemex", price: "$ 1000", stock: "3", img: "imagenes/Chemex filters.jpg"},
    {id:"4", categoria: "cafeteras", name: "Prensa Francesa", price: "$ 5000", stock: "5", img: "imagenes/prensa francesa.jpg"},
    {id:"5", categoria: "cafeteras", name: "Mocca Italiana", price: " $ 6000",stock: "1", img: "imagenes/Mocca.jpg"},
    {id:"6", categoria: "cafeteras", name: "Espresso para el hogar", price: "$ 8000", stock: "3", img: "imagenes/espresso.jpg"}
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
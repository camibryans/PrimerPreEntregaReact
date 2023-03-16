let products = [
    {id:"1", category: "Cafeteras", name: "Chemex", price: "20000", stock: "4", img: "/imagenes/Chemex coffeemaker.jpg"},
    {id:"2", category: "Cafeteras", name: "AeroPress", price: " 30000",stock: "2", img: "/imagenes/AeroPress.jpg"},
    {id:"3", category: "Cafeteras", name: "Filtros para Chemex", price: "9000", stock: "3", img: "/imagenes/Chemex filters.jpg"},
    {id:"4", category: "Cafeteras", name: "Prensa Francesa", price: "5000", stock: "5", img: "/imagenes/prensa francesa.jpg"},
    {id:"5", category: "Cafeteras", name: "Mocca Italiana", price: "8000",stock: "1", img: "/imagenes/Mocca.jpg"},
    {id:"6", category: "Cafeteras", name: "Espresso para el hogar", price: "45000", stock: "3", img: "/imagenes/espresso.jpg"},
    {id:"7", category: "Herramientas", name: "Tamper", price: "2000", stock: "3", img: "/imagenes/tamper.jpg"},
    {id:"8", category: "Herramientas", name: "Knock Box", price: "7000",stock: "1", img: "/imagenes/knock box.jpg"},
    {id:"9", category: "Herramientas", name: "Termometro", price: "1000", stock: "1", img: "/imagenes/termometro.jpg"},
    {id:"10", category: "Herramientas", name: "Pitcher", price: "3000", stock: "5", img: "/imagenes/pitcher.jpg"},
    {id:"11", category: "Cafes", name: "Puerto Blest - Colombia", price: "3000",stock: "5", img: "/imagenes/Puerto Blest Colombia.jpg"},
    {id:"12", category: "Cafes", name: "Puerto Blest - Nicaragua", price: "3000", stock: "3", img: "/imagenes/Puerto Blest Nicaragua.jpg"},
    {id:"13", category: "Cafes", name: "Puerto Blest - Peru", price: "3000", stock: "3", img: "/imagenes/Puerto Blest Peru.jpg"},
    {id:"14", category: "Cafes", name: "Puerto Blest - Guatemala", price: "3000", stock: "3", img: "/imagenes/Puerto Blest Guatemala.jpg"},
    {id:"15", category: "Cafes", name: "Puerto Blest - Kenya", price: "3000", stock: "3", img: "/imagenes/Puerto Blest Kenya.jpg"}
]

export default products;

export const gFetch = () => new Promise((res, rej) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            res(products)
        }, 2000)
    } else {
        rej('Algo salió mal')
    }
})
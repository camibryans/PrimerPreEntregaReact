let productos = [
    {id:"1", categoria: "cafeteras", name: "Chemex", price: "$ 200", imagen: "..\..\public\Chemex filters.jpg"},
    {id:"2", categoria: "cafeteras", name: "AeroPress", price: " $ 200", imagen: "C:\Users\camil\OneDrive\Documents\Curso React\proyecommerce\public\Chemex filters.jpg"},
    {id:"3", categoria: "cafeteras", name: "Prensa Francesa", price: "$ 200", imagen: "C:\Users\camil\OneDrive\Documents\Curso React\proyecommerce\public\Chemex filters.jpg"}
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
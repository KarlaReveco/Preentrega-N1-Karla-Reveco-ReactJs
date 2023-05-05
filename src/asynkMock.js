
const productos = [
    {id: "1",
    nombre: "Crema Facial Aloe Vera",
    precio: "CLP 15.000",
    categoria: "Crema Facial",
    imagen: "",
    stock: "10" ,
    descripcion:"Crema facial natural Aloe Vera"
}, 
{id: "2", nombre: "Crema Facial Rosa Mosqueta", precio: "CLP 15.000", categoria: "Crema Facial", imagen: "" , stock: "10" , descripcion:"Crema facial natural Rosa Mosqueta"}, 
{id: "3", nombre: "Sérum Nocturno Aclarante", precio: "CLP 18.000", categoria: "Sérum", imagen: "", stock: "10" , descripcion:"Sérum nocturno"}, 
{id: "4", nombre: "Sérum Vitamina C", precio: "CLP 18.000", categoria: "Sérum", imagen: "" , stock: "10" , descripcion:"Sérum Vitamina C"}, 
{id: "5", nombre: "Shampoo Stop Caída", precio: "CLP 13.000", categoria: "Shampoo", imagen: "" , stock: "10" , descripcion:"Producto capilar"}, 
{id: "6", nombre: "Acondicionador Stop Caída", precio: "CLP 13.000", categoria: "Shampoo", imagen: "", stock: "10" , descripcion:"Producto capilar"}, 

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(productos)
        }, 500)
    } )
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(productos.find(elemento => elemento.id === productId))
        }, 500)
    } )
}


export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(productos.find(elemento => elemento.id === categoryId))
        }, 500)
    } )
}




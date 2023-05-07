import crema1 from './Components/ItemListContainer/Assets/crema1.jpg'
import crema2 from './Components/ItemListContainer/Assets/crema2.webp'
import serum1 from './Components/ItemListContainer/Assets/serum1.png'
import serum2 from './Components/ItemListContainer/Assets/serum2.webp'
import capilares1 from './Components/ItemListContainer/Assets/shampoo.webp'
import capilares2 from './Components/ItemListContainer/Assets/acondicionador.jpg'
const productos = [
    {id: "1",
    nombre: "Crema Facial Aloe Vera",
    precio: "CLP 15.000",
    categoria: "cremas",
    imagen: crema1,
    stock: "10" ,
    descripcion:"Crema facial natural Aloe Vera"
}, 
{id: "2", nombre: "Crema Facial Rosa Mosqueta", precio: "CLP 15.000", categoria: "cremas", imagen: crema2 , stock: "10" , descripcion:"Crema facial natural Rosa Mosqueta"}, 
{id: "3", nombre: "Sérum Nocturno Aclarante", precio: "CLP 18.000", categoria: "serums", imagen: serum1, stock: "10" , descripcion:"Sérum nocturno"}, 
{id: "4", nombre: "Sérum Vitamina C", precio: "CLP 18.000", categoria: "serums", imagen: serum2, stock: "10" , descripcion:"Sérum Vitamina C"}, 
{id: "5", nombre: "Shampoo Stop Caída", precio: "CLP 13.000", categoria: "capilares", imagen: capilares1 , stock: "10" , descripcion:"Producto capilar"}, 
{id: "6", nombre: "Acondicionador Stop Caída", precio: "CLP 13.000", categoria: "capilares", imagen: capilares2, stock: "10" , descripcion:"Producto capilar"}, 

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
            resolve(productos.filter(elemento => elemento.categoria === categoryId))
        }, 500)
    } )
}




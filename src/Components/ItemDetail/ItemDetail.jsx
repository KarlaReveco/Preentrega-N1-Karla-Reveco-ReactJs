import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { ContenidoCarrito } from '../../Contenido/ContenidoCarrito'


export const ItemDetail = ({id, nombre, precio, categoria, imagen, stock, descripcion}) => {
    const [quantityAdded, setQuantityAdded] = useState (0)

    const   { addItem } = useContext (ContenidoCarrito)

    const handleOnAdd = (cantidad) => {
        setQuantityAdded(cantidad)
        const item = {
            id, nombre, precio
     }

         addItem(item, cantidad)
    }

  return (
    <article className='CardItem'>
     <header className='Header'>
        <h2 className="ItemHeader">  
            {nombre}
        </h2>
    </header>
     <picture>
        <img src={imagen} alt={nombre} className='ItemImg'/> 
     </picture> 
     <section>
        <p className='Info'>
            Precio: ${precio}
        </p>
        <p className='Info'>
            Stock Disponible: {stock}
        </p>    
     </section>              

<footer className='ItemFooter'>{
    quantityAdded > 0 ? (
        <link to= '/carrito' className='Option'> Terminar Compra</link>
    ) : (
        <ItemCount stock={stock} initial={1} onAdd={(handleOnAdd)}/>
    )
}
</footer> 
</article>
)}

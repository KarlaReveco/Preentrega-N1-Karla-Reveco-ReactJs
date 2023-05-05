import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, nombre, precio, categoria, imagen, stock, descripcion}) => {
    
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

<footer className='ItemFooter'>
    <ItemCount stock={stock} initial={1} onAdd={(cantidad)=> console.log("cantidad agregada ", cantidad)}/>
</footer> 
</article>
)}

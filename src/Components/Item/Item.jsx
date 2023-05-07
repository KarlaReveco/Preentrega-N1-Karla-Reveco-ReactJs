import React from 'react'
import {Link} from 'react-router-dom'

export const Item = ({id, nombre, precio, imagen, stock}) => {
  return (

    <article className='card w-25 col-2'>
        <img src={imagen} alt={nombre} className='card-img-top img-fluid'/> 
     
     <section className='card-body'>
        <h2 className="card-title">  
            {nombre}
        </h2>
        <p className='card-text'>
            Precio: ${precio}
        </p>
        <p className='card-text'>
            Stock Disponible: {stock}
        </p>    
     </section>              

<footer className='ItemFooter'>
    <Link to={`/item/${id}`} className='Option'> Ver Detalle</Link>
</footer>
</article>
)}

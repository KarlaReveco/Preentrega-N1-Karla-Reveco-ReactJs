import React, { useContext } from 'react'
import CarritoDeCompras from './Assets/carrito.png'
import { ContenidoCarrito } from '../../Contenido/ContenidoCarrito'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

  const { cartQuantity } = useContext(ContenidoCarrito)
  return (
    <div>
        <Link to= '/cart' className='CartWidget'>
          <img src={CarritoDeCompras} alt='CarritoDeCompras'></img>
          {cartQuantity ()}
        </Link>
    </div>
  )
}

import React, { useContext } from 'react'
import CarritoDeCompras from './Assets/mbrishoppingcart_99558(1).png'
import { ContenidoCarrito } from '../../Contenido/ContenidoCarrito'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

  const { cartQuantity } = useContext(ContenidoCarrito)
  return (
    <div>
        <Link to= '/cart' className='CartWidget' style={{ display: cartQuantity > 0 ? 'block' : 'none'}}>
          <img src={CarritoDeCompras} alt='CarritoDeCompras'></img>
          {cartQuantity}
        </Link>
    </div>
  )
}

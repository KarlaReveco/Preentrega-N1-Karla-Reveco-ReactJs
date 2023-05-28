import React, { useContext } from 'react'
import CarritoDeCompras from './Assets/mbrishoppingcart_99558(1).png'
import { ContenidoCarrito } from '../../Contenido/ContenidoCarrito'

export const CartWidget = () => {

  const { cartQuantity } = useContext(ContenidoCarrito)
  return (
    <div>
        <link to= '/cart' className='CartWidget' style={{ display: cartQuantity > 0 ? 'block' : 'none'}}>
          <img src={CarritoDeCompras} alt='CarritoDeCompras'></img>
          {cartQuantity}
        </link>
    </div>
  )
}

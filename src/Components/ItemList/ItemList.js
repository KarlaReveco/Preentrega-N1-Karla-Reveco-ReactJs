import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({productos}) => {
  return (
    <div className='ListGroup'>
        {productos.map(elemento => <Item key={elemento.id} {...elemento} />)}
    </div>
  )
}

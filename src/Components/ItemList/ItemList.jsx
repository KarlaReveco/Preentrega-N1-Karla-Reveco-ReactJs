import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({productos}) => {
  return (
    <div className=' container '>
      <div className=' row d-flex justify-content-center align-items-center'>
        {productos.map(elemento => <Item key={elemento.id} {...elemento} />)}
        </div>
    </div>
  )
}

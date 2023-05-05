import React, { useEffect, useState } from 'react'
import { getProductById } from '../../asynkMock'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const { itemId } = useParams ()
    
    useEffect(() => {
        getProductById(itemId)
        .then(response => {
          setProducto (response)
        })
        .catch (error => {
          console.error(error)
        })
      }, [itemId])



  return (
    <div className='ItemDetailContainer'>
        <ItemDetail {...producto}/>

    </div>
  )
}

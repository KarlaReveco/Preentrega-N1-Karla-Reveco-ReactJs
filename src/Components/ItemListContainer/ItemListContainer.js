import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asynkMock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({SaludoInicial}) => {

const  [productos, setProducts] = useState ([])


const { categoryId } = useParams() 

useEffect(() => {
  const asyncFunc = categoryId ? getProductsByCategory : getProducts

  asyncFunc(categoryId)
  .then(response => {
    setProducts (response)
  })
  .catch (error => {
    console.error(error)
  })
}, [categoryId])

  return (
    <div>
        <h2 className='saludoInicial'>{SaludoInicial}</h2>
        <ItemList productos={productos}/>

    </div>
  )
}

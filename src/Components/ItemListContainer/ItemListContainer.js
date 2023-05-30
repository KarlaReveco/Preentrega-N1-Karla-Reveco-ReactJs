import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from  '../../Services/firebase/firebaseConfig'


export const ItemListContainer = ({SaludoInicial}) => {
const  [productos, setProductos] = useState ([])
const [loading, setLoading] = useState(true)
const { categoryId } = useParams() 

useEffect(() => {

  setLoading (true)

  const collectionRef = categoryId
   ? query(collection( db, 'productos'), where('categoria', '==', categoryId))
   : collection(db, 'productos')

   getDocs(collectionRef) 
   .then(response => {
    const productsAdapted = response.docs.map(doc => {
        const data = doc.data ()
        return { id: doc.id, ...data} 
    })
      setProductos(productsAdapted)
   })
   .catch(error => {
    console.log(error)
   })
   .finally (() => {
    setLoading(false)
   })
}, [categoryId])

return (
  <div className='container mt-5'>
    <h1> {SaludoInicial}</h1>
    <ItemList productos={productos} />
  </div>
)

}
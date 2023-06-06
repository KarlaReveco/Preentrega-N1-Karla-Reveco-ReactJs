import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../Services/firebase/firebaseConfig'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState (true)

    const { itemId } = useParams()
    
    useEffect(() => {
      setLoading (true)

      const docRef = doc(db, 'productos', itemId)

      getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = {id: response.id, ...data }
        setProducto (productAdapted)
      })
        .catch (error => {
          console.error(error)
        })

        .finally(() => {
          setLoading(false)
        })
      }, [itemId])

      if (loading) {
        return <h1> Se está generando su orden...</h1>
    }

      return (
        <div className='container mt-5'>
          <ItemDetail {...producto} />
        </div>
      )


}


import { useContext, useState } from "react";
import { ContenidoCarrito } from "../../Contenido/ContenidoCarrito";
import {db} from "../../Services/firebase/firebaseConfig"
import { collection, query, where, getDocs, writeBatch, documentId, Timestamp, doc, addDoc, updateDoc } from "firebase/firestore";
import {CheckoutForm } from "../CheckoutForm/CheckoutForm"


export const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext (ContenidoCarrito)

    const createOrder = async ({ name, phone, email }) => {
        setLoading (true)

        try {
            const objOrder = {
                buyer: {
                    name: name,
                    phone: phone, 
                    email: email
                },
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch (db)
            const outOfStock =[]
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'productos')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id) 
                const prodQuantity = productAddedToCart?.cantidad

                if (stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                    } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                    }    
                })

                if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
                
                } else {
                
                alert('Hay productos que están fuera de stock')
                
                }
                    
                } catch (error){
                
                console.log(error)
                
                } finally {
                
                setLoading(false)
                
                }
                    
                    
                    
            }

if (loading) {
    return <h1> Se está generando su orden...</h1>
}

if (orderId) {
    return <h1> El Id de su pedido es:{orderId} </h1>
}

return(
<div>
    <h1> Finalizar su compra </h1>
    <CheckoutForm onConfirm= {createOrder}/>
</div>
)
}

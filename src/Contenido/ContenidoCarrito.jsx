import { createContext, useState } from "react";
import React from 'react'


export const ContenidoCarrito = createContext ({
    cart: []

})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState ([])

    console.log (cart)

    const addItem = (item, cantidad) => {

        const enCarro = cart.filter (prod => prod.id === item.id)

        const cantidadEnCarro = enCarro ? enCarro.reduce((acc, item) => item.cantidad + acc,0) : 0 
        

        if( cantidad <= (item.stock - cantidadEnCarro)) {
            
            setCart(prev => [...prev, {...item, cantidad: cantidad}])
        } else {
            alert("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart ([])
    }

    const cartQuantity =() => {
        return cart.reduce ((acc, prod)=> (acc += prod.cantidad), 0)
    }

    const total = () => {
        return cart.reduce ((acc, prod) => (acc += prod.precio * prod.cantidad), 0)
    }

    return (
        <ContenidoCarrito.Provider value ={{ cart, addItem, removeItem, clearCart, total, cartQuantity}}>
            {children}
        </ContenidoCarrito.Provider>
    )
    }
import { createContext, useState } from "react";
import React from 'react'


export const ContenidoCarrito = createContext ({
    cart: []

})

export const CartProvider = ({ hijos }) => {
    const [cart, setCart] = useState ([])

    console.log (cart)

    const addItem = (item, cantidad) => {
        if(!IsInCart(item.id)) {
            setCart(prev => [...prev, {...item, cantidad}])
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart ([])
    }

    const IsInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const cartQuantity =() => {
        return cart.reduce ((acc, prod)=> (acc += prod.cantidad), 0)
    }

    const Total = () => {
        return cart.reduce ((acc, prod) => (acc += prod.precio * prod.cantidad), 0)
    }

    return (
        <ContenidoCarrito.Provider value ={{ cart, addItem, removeItem, clearCart}}>
            {hijos}
        </ContenidoCarrito.Provider>
    )
    }
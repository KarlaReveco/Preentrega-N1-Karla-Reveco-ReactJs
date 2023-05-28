import React from "react";
import { ContenidoCarrito } from "../../Contenido/ContenidoCarrito";
import { useContext } from "react";

export const CartItem = ({nombre, precio, cantidad, id}) => {
    const {removeItem} =useContext (ContenidoCarrito)

    return(
        <div className="container principal">
            <section className="cartItem">
                <h4>{nombre}</h4>
                <div>Precio: ${precio}</div>
                <div>Cantidad: ${cantidad}</div>
                <div>Subtotal: ${precio*cantidad}</div>
                <button onClick={() => removeItem(id)} className="boton"> Eliminar producto </button>
            </section>
        </div>
    )
}

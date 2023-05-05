import { useState } from "react";



export const ItemCount =( {stock, initial, onAdd}) => {
    
    const [cantidad, setQuantity] = useState (initial)

    const aumentoCarrito = () => {
        if (cantidad < stock) {
            setQuantity(cantidad+1)

    }
    }

    const disminuyeCarrito = () => {
        if (cantidad > 1) {
            setQuantity(cantidad - 1)
        }
    }

    return(
        <div className="Contador">
            <div className="Controles">
                <button className="Button" onClick={disminuyeCarrito}>-</button>
                <h3 className= "Numero"> {cantidad} </h3>
                <button className="Button" onClick={aumentoCarrito}>+</button>

            </div>
            <div>
            <button className="Button" onClick={() => onAdd(cantidad)} disabled={!stock}>
                Agregar al Carrito
            </button> 
            </div>

        </div>
    )
}

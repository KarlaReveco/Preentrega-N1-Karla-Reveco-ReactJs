import { useContext } from "react"
import { ContenidoCarrito } from "../../Contenido/ContenidoCarrito"
import { Link } from "react-router-dom"
import { CartItem } from "../CartItem/CartItem"


 export const Cart = () => {
    const { cart, clearCart, cartQuantity, total} =useContext (ContenidoCarrito)

    if(cartQuantity === 0 ){
        return (
            <div>
                <h1>No hay items en el carrito </h1>
                <link to= '/' className="Option">Productos</link>
            </div>
        )
    }

    return (
        <div>
             {cart.map (p => <CartItem key={p.id} {...p}/>) }
             <h2>Total: ${total()}</h2>
             <button onClick ={ () => clearCart ()} className= "Button"> Limpiar Carrito </button>
             <Link to ='/checkout' className="Option">Checkout</Link>
        </div>
    )

}
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, total, removeItem, quantity } = useCart()
console.log
    return (
        <>
            <h1>CARRITO</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h2>{prod.name}</h2>
                                <h3>Cantidad: {prod.quantity}</h3>
                                <h3>Precio unidad: ${prod.price}</h3>
                                <h3>Subtotal: ${prod.quantity * prod.price}</h3>
                                <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                            </div>
                        )
                    })
                }
            </div>
            <h1>Total de la compra: ${total}</h1>
            <Link to='/checkout'>Checkout</Link>
        </>
    )
}


export default Cart
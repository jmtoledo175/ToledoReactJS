import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
    const { cart, total, removeItem} = useCart()

    return (
        <>
        <h1>CARRITO</h1>
        <div className="cart-container">
          {cart.map((prod) => (
            <div key={prod.id} className="cart-item">
              <h2>{prod.name}</h2>
              <h3>Cantidad: {prod.quantity}</h3>
              <h3>Precio unidad: ${prod.price}</h3>
              <h3>Subtotal: ${prod.quantity * prod.price}</h3>
              <button
                className="remove-button"
                onClick={() => removeItem(prod.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
          <h1 className="cart-total">Total de la compra: ${total}</h1>
          <Link to="/checkout" className="checkout-link">
            Checkout
          </Link>
        </div>
      </>
      
    )
}


export default Cart
import {useContext, useState} from "react"
import {Link} from "react-router-dom"
import "./ItemDetail.css"
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const buttonStyle = {
  marginLeft: "10px", 
  marginRight: "10px",
  padding: "5px 10px",
  fontSize: "16px",
};

const countStyle = {
  margin: "0 10px", 
  fontSize: "18px",
};

const addToCartButtonStyle = {
  marginLeft: "10px",
  padding: "5px 10px",
  fontSize: "16px",
  backgroundColor: "green", 
  color: "white", 
  border: "none",
  cursor: "pointer",
};

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
      if(count < stock) {
          setCount(count + 1)
      }

  }

  const decrement = () => {
          setCount(count - 1)
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button style={buttonStyle} onClick={decrement}>
        -
      </button>
      <p style={countStyle}>{count}</p>
      <button style={buttonStyle} onClick={increment}>
        +
      </button>
      <button style={addToCartButtonStyle} onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}


const Item = ({ id, name, img, price, stock, description }) => {
  const {addItem, isInCart } = useContext(CartContext)
  const handleOnAdd = (quantity) => {

    const item = {
      id,
      name,
      price,
      quantity
    };
  
    addItem(item);
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      title: ("Producto agregado")
    })
  };
  return (
    <div className="container"> 
    <div className="wrapper">
      <img src={img} alt="Product" className="img-responsive" />
      
      <h1>{name}</h1>
      <p>Precio: ${price}<br/>
        Descripción: {description}</p>
    </div>
    <div className="button-wrapper"> 
    {
                    !isInCart(id) ? (
                        <ButtonCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
    </div>
  </div>
);
  
};

export default Item;

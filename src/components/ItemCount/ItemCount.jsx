import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    
    const increment = () =>{
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return ( 
        <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-outline-dark" onClick={decrement}>-</button>
          <h4 className="m-0">{quantity}</h4>
          <button className="btn btn-outline-dark" onClick={increment}>+</button>
        </div>
        <button
          className="btn btn-outline-dark"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
         Agregar
        </button>
      </div>
      
     );
}
 
export default ItemCount;
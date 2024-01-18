import "./Item.css"
import { Link } from "react-router-dom"
const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="container"> 
    <div className="wrapper">
      <img src={img} alt="Product" className="img-responsive" />
      <h1 className="name">{name}</h1>
      <p>Precio: ${price}<br/>
        Stock: {stock}</p>
    </div>
    <div className="button-wrapper"> 
   <Link to={`/item/${id}`} className="btn outline">Ver detalles</Link>
    </div>
  </div>
  );
};

export default Item;

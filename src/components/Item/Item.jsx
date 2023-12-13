import "./Item.css"
import { Link } from "react-router-dom"
const Item = ({ id, name, img, price, stock }) => {
  return (
    <div className="container custom-container">
      <div className="custom-grid">
        <div className="custom-card">
          <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="Card" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Precio: ${price}</li>
              <li className="list-group-item">Stock disponible: {stock}</li>
            </ul>
            <div className="card-body">

              <Link to ={'/item/${id}'}>Ver detalles</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

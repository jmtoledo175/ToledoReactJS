import ItemCount from "../ItemCount/ItemCount";
const Item = ({ id, name, img, price, stock, description }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="Card" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Precio: ${price}</li>
              <li className="list-group-item">Descripción: {description}</li>
              <li className="list-group-item">Stock disponible: {stock}</li>
            </ul>
            <div className="card-body">
              <ItemCount
                initial={1}
                stock={10}
                onAdd={(quantity) => console.log("Cantidad agregada".quantity)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

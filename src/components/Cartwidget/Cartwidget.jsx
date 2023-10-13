import cart from "./assets/cart.svg";
const Cartwidget = () => {
  return (
    <div>
      <img src={cart} alt="Cart"></img>
      <div>0</div>
    </div>
  );
};

export default Cartwidget;

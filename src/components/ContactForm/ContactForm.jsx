import { useState } from "react";
import "./ContactForm.css";

const ContactForm = ({ createOrder }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    createOrder(userData);
  };

  return (
    <div className="conteiner-form">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="subtitle">Finalizar la compra</div>
          <div className="input-container ic1">
            <input
              id="firstname"
              className="input"
              type="text"
              placeholder=" "
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">
              Nombre
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="phone"
              className="input"
              type="text"
              placeholder=" "
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
            <div className="cut"></div>
            <label htmlFor="phone" className="placeholder">
              Teléfono
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="email"
              className="input"
              type="text"
              placeholder=" "
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <div className="cut cut-short"></div>
            <label htmlFor="email" className="placeholder">
              Email
            </label>
          </div>
          <button type="submit" className="submit">
            Generar orden
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
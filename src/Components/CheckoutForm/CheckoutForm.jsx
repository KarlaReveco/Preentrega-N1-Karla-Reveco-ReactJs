import "./CheckoutForm.css";
import { useState } from "react";

export const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      phone: phone,
      email: email
    };


    onConfirm(userData);
  };

  return (
    <div className="container">
      <form onSubmit={handleConfirm} className="ui form d-flex flex-column">
        <div className="field">
            <label>
            Nombre
            <input
                className="Input"
                type="text"
                value={name}
                onChange={({ target }) => setName(target.value)}
            />
            </label>
        </div>

        <div className="field">
            <label >
            Teléfono
            <input
                className="Input"
                type="text"
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
            />
            </label>
        </div>

        <div className="field">
            <label>
            Email
            <input
                className="Input"
                type="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            />
            </label>
        </div>

        <div className="field">
          <button type="submit" className="ui violet button mt-5 h-3">
            Generar Pedido
          </button>
        </div>

      </form>
    </div>
  );
};

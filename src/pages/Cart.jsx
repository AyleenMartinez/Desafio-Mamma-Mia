import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../assets/css/CardPizza.css";
import { UserContext, useUser } from "../context/UserContext";

const Cart = () => {
  const { cart, agregar, quitar, calcularTotal } = useContext(CartContext);
  const { token } = useUser();
  const [success, setSuccess] = useState("");

  const checkout = async () => {
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        cart: cart,
      }),
    });
    if (response.ok) {
    setSuccess("Compra realizada con exito")
    }
  };

  return (
    <div>
      <h2 className="cart-tittle">Carrito</h2>
      <div className="pizza-container-cart">
        {cart.map((pizza, i) => (
          <div key={i} className="card-cart">
            <img src={pizza.img} alt={`${pizza.name} pizza`} />
            <h3>{pizza.name}</h3>
            <p>Precio: ${pizza.price.toLocaleString()}</p>
            <p>Cantidad: {pizza.count}</p>
            <div className="btn">
              <button className="btn-carrito" onClick={() => quitar(pizza)}>
                -
              </button>
              <button className="btn-carrito" onClick={() => agregar(pizza)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${calcularTotal().toLocaleString()}</h2>
        <button
          onClick={checkout}
          disabled={!token}
          className="btn-total"
          style={{
            backgroundColor: token ? "" : "gray",
            cursor: token ? "pointer" : "not-allowed",
          }}
        >
          Pagar
        </button>
        <p style={{ color: "green", fontSize: "24px"}}>{success}</p>

        {!token && (
          <p style={{ color: "red" }}>
            Inicia sesión para completar la compra.
          </p>
        )}

        <Link to="/">
          <button>Volver al inicio</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;

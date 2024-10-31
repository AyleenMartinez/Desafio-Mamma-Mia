import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../assets/css/CardPizza.css";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, agregar, quitar, calcularTotal } = useContext(CartContext);
  const { token } = useContext(UserContext);

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
          disabled={!token}
          className="btn-total"
          style={{
            backgroundColor: token ? "" : "gray",
            cursor: token ? "pointer" : "not-allowed",
          }}
        >
          Pagar
        </button>

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

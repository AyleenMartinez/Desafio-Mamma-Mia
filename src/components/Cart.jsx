import React, { useState } from "react";
import { pizzaCart } from "../assets/js/pizzas";
import "../assets/css/CardPizza.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const agregar = (pizza) => {
    const listaPizzas = [...cart];
    const index = listaPizzas.findIndex((el) => el.id === pizza.id);
    listaPizzas[index].count += 1;
    setCart(listaPizzas);
  };

  const quitar = (pizza) => {
    const listaPizzas = [...cart];
    const index = listaPizzas.findIndex((el) => el.id === pizza.id);
    listaPizzas[index].count -= 1;
    if (listaPizzas[index].count <= 0) {
      eliminarPizza(pizza);
    } else {
      setCart(listaPizzas);
    }
  };

  const eliminarPizza = (pizza) => {
    const pizzasFiltradas = cart.filter((el) => el.id !== pizza.id);
    setCart(pizzasFiltradas);
  };

  const calcularTotal = () => {
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
      total += cart[index].price * cart[index].count;
    }
    return total;
  };

  return (
    <div>
      <h2 className="cart-tittle">Carrito 🛒</h2>
      <div className="pizza-container-cart">
        {cart.map((pizza, i) => (
          <div key={i} className="card-cart">
            <img src={pizza.img} alt={`${pizza.name} pizza`} />
            <h3>{pizza.name}</h3>
            <p>Precio: ${pizza.price}</p>
            <p>Cantidad: {pizza.count}</p>

            <button onClick={() => quitar(pizza)}>-</button>
            <button onClick={() => agregar(pizza)}>+</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${calcularTotal()}</h2>
        <button>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;

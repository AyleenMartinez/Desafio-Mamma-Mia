import React, { useState, useEffect, useContext } from "react";
import "../assets/css/Pizza.css";
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext";

const Pizza = () => {
  const { agregar } = useContext(CartContext);
  const { pizzas } = useContext(PizzaContext);
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const pizzaSeleccionada = pizza.find(p => p.id === "p0001");
    setPizza(pizzaSeleccionada);
  }, [pizzas]);

  return (
    pizza && (
      <div className="card-pizza">
        <img src={pizza.img} alt={`${pizza.name} pizza`} />
        <div className="card-info">
          <h2>{pizza.name}</h2>
          <p className="ingredients-pizza">
            {pizza.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </p>
          <p>{pizza.desc}</p>
          <div className="price-btn-pizza">
            <p className="price">Precio: ${pizza.price.toLocaleString()}</p>
            <div className="btn">
              <button className="botones" onClick={()=> agregar(pizza)}>Añadir</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Pizza;

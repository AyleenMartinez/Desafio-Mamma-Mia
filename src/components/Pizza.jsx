import React, { useState, useEffect } from "react";
import "../assets/css/Pizza.css";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    consultarPizza();
  }, []);

  const consultarPizza = async () => {
    try {
      const url = "http://localhost:5000/api/pizzas/p001";
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      alert("Error")
    }
  };

  return (
    pizza && (
      <div className="card-pizza">
        <img src={pizza.img} alt={`${pizza.name} pizza`} />
        <div className="card-info">
          <h2>{pizza.name}</h2>
          <p className="ingredients-pizza">
            {pizza.ingredients.map((ingredient, i) => (
              <li key={i}>🍕{ingredient}</li>
            ))}
          </p>
          <p>{pizza.desc}</p>
          <div className="price-btn-pizza">
            <p className="price">Precio: ${pizza.price.toLocaleString()}</p>
            <div className="btn">
              <button className="botones">Añadir 🛒</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Pizza;

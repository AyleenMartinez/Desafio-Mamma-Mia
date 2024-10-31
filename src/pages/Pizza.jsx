import React, { useState, useEffect, useContext } from "react";
import "../assets/css/Pizza.css";
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { agregar } = useContext(CartContext);
  const { pizzas } = useContext(PizzaContext);
  const [pizza, setPizza] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    consultarApi();
  }, [id]);

  const consultarApi = async () => {
    try {
      const url = "http://localhost:5000/api/pizzas/" + id;
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  return (
    pizza && (
      <div className="card-pizza">
        <img src={pizza.img} alt={`${pizza.name} pizza`} />
        <div className="card-info">
          <h2>{pizza.name}</h2>
          <div className="ingredients-pizza">
          <ul>
            {pizza.ingredients.map((ingredient, i) => (
              <li key={i}>🍕{ingredient}🍕</li>
            ))}
          </ul>
        </div>
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

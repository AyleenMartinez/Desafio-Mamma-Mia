import React from "react";
import "../assets/css/CardPizza.css";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card">
      <img src={img} />
      <h2>{name}</h2>
      <div className="ingredients">
        <span>{ingredients.map((element) => "🍕 " + element)}</span>
      </div>

      <div className="price-btn">
        <p className="price">Precio: ${price.toLocaleString()}</p>
        <div className="btn">
          <button className="btn1">Ver más 👀</button>
          <button className="btn2">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;

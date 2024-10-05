import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import "../assets/css/CardPizza.css";
import { pizzas } from "../assets/js/pizzas";

const Home = () => {
  return (
    <div>
      <Header
        tittle="¡Pizzería Mamma Mía!"
        description="¡Tenemos las mejores pizzas que podrás encontrar!"
      />

      <div className="pizza-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

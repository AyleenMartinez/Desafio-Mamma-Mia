import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    consultarApi();
  },[]);

  const consultarApi = async () => {
    try {
      const url = "http://localhost:5000/api/pizzas";
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };
  return (
    <PizzaContext.Provider value={{pizzas, setPizzas}}>
        {children}
    </PizzaContext.Provider>
  );
};
export default PizzaProvider;
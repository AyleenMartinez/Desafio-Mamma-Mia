import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregar = (pizza) => {
    const listaPizzas = [...cart];
    const index = listaPizzas.findIndex((el) => el.id === pizza.id);
    if (index !== -1) {
      listaPizzas[index].count += 1;
    } else {
      pizza.count = 1;
      listaPizzas.push(pizza);
    }
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
    <CartContext.Provider value={{ cart, agregar, quitar, eliminarPizza, calcularTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

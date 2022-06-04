// External
import React, { createContext, useContext, useReducer } from "react";

import { faker } from "@faker-js/faker";

// Inernal
import { cartReducer } from "./Reducers";
faker.seed(99);
// cart context
const CartContext = createContext();
const { Provider } = CartContext;

// context comp
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    image: faker.image.image(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    inStock: faker.helpers.arrayElements([0, 1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products,
    cart: [],
  });

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default Context;

// cart context value get
export const CartState = () => {
  return useContext(CartContext);
};

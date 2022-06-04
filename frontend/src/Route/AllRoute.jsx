import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Notfound from "../pages/NotFound";
import { productData } from "../Data/Data";
const AllRoute = () => {
  const [cartItems, setCartItems] = useState([]);
  const cartHandler = (product) => {
    let productExits = cartItems.find((item) => item.id === product.id);
    if (productExits) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExits, qty: productExits.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cartHandler={cartHandler}
            productData={productData}
            cartItems={cartItems}
          />
        }
      />
      <Route path="cart" element={<Cart cartItems={cartItems} />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AllRoute;

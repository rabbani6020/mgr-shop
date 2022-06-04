import React from "react";
import CartItems from "../components/Product/CartItems";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <CartItems cartItems={cartItems} />
    </div>
  );
};

export default Cart;

import React from "react";
import Products from "../components/Product/Products";

const Home = ({ productData, cartHandler, cartItems }) => {
  return (
    <div>
      <Products
        productData={productData}
        cartHandler={cartHandler}
        cartItems={cartItems}
      />
    </div>
  );
};

export default Home;

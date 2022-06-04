// External Imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// Internal Imports
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Notfound from "../pages/NotFound";

//  routes
const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AllRoute;

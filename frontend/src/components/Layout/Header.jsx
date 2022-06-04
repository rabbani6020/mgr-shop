// External Imports
import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

// Internal Imports
import { CartState } from "../../Context/Context";

const Header = () => {
  const {
    state: { cart, products },
  } = CartState();
  console.log(cart, products);
  return (
    <header className="bg-black h-20 flex items-center sticky top-0">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl text-white">
            <NavLink to="/">Mgr-Shop</NavLink>
          </h1>
          <div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Enter Your Keywords"
              className="rounded-[30px] placeholder:text-[#646464] text-[#646464]  bg-white focus:outline-none px-8 py-3 w-[400px]"
            />
          </div>
          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <NavLink
                  to="/"
                  className={(navInfo) =>
                    navInfo.isActive
                      ? "text-lg text-[#f6fc00] inline-flex items-center gap-2"
                      : "text-lg text-white inline-flex items-center gap-2"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="cart"
                  className={(navInfo) =>
                    navInfo.isActive
                      ? "text-lg text-[#f6fc00] inline-flex items-center gap-3"
                      : "text-lg text-white inline-flex items-center gap-3"
                  }
                >
                  Cart
                  <span className="cart-icon text-xl relative">
                    <BsCart4 />
                    <span className="bg-[#0066ff] text-white inline-flex items-center justify-center p-[5px] w-[20px] h-[20px]  rounded-full text-[12px] absolute top-[-8px] right-[-18px]">
                      {cart.length}
                    </span>
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

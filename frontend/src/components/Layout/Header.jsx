import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black h-20 flex items-center sticky top-0">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl text-white">
            <NavLink to="/">E-shop</NavLink>
          </h1>
          <nav>
            <ul className="flex items-center gap-5">
              <li>
                <NavLink
                  to="/"
                  className={(navInfo) =>
                    navInfo.isActive
                      ? "text-lg text-[#f6fc00]"
                      : "text-lg text-white"
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
                      ? "text-lg text-[#f6fc00]"
                      : "text-lg text-white"
                  }
                >
                  Cart
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

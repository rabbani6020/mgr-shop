import React from "react";

// Internal Imports
import { cartTypes } from "../../Context/Types";

// Product
const Product = ({ productInfo, dispatch }) => {
  const { image, name, price } = productInfo;
  return (
    <div className="shadow-md bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div>
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="p-4 pb-5">
        <h3 className="text-lg text-black font-semibold">{name}</h3>
        <div className="font-medium text-red-700 text-base mt-2">
          {price} Tk
        </div>
        <div className="flex mt-3">
          <button
            onClick={() =>
              dispatch({
                type: cartTypes.ADD_TO_CART,
                payload: productInfo,
              })
            }
            className="bg-[#0004ff] text-white text-sm px-4 py-1 rounded-md font-medium capitalize shadow-lg transition-all duration-500"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

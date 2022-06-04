import React from "react";
import { CartState } from "../../Context/Context";
import Product from "./Product";

// ProductList
const ProductList = () => {
  // get context value
  const {
    state: { products },
    dispatch
  } = CartState();

  return (
    <>
      <div className="py-10">
        <div className="container">
          <h2 className="text-4xl text-center mb-8 flex items-center justify-center">
            Products List
          </h2>

          <div className="-mx-4 gap-y-6 flex flex-wrap justify-center">
            {products.length &&
              products.map((product) => (
                <div
                  className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4"
                  key={product?.id}
                >
                  <Product productInfo={product} dispatch={dispatch} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;

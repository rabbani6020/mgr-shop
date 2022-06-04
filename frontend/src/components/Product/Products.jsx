import React from "react";
import Product from "./Product";

const Products = ({ productData, cartHandler, cartItems }) => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <h2 className="text-4xl text-center mb-8 flex items-center justify-center">
            Products List
            <span className="ml-5 text-lg inline-flex items-center justify-center p-3 w-[20px] h-[20px] text-white bg-black rounded-full">
              {cartItems.length}
            </span>
          </h2>

          <div className="-mx-4 gap-y-6 flex flex-wrap justify-center">
            {productData.length &&
              productData.map((product) => (
                <div
                  className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4"
                  key={product?.id}
                >
                  <Product
                    productInfo={product}
                    cartHandler={(product) => cartHandler(product)}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

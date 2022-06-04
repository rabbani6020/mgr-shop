import React from "react";

const CartItem = ({ item, ind }) => {
  return (
    <>
      <td className="border border-slate-300 p-3 text-lg">{ind + 1}</td>
      <td className="border border-slate-300 p-3 text-lg">
        <img
          className="w-[100px] h-[100px] object-cover rounded-full"
          src={item.image}
          alt={item.name}
          loading="lazy"
        />
      </td>
      <td className="border border-slate-300 p-3 text-lg">{item.name}</td>
      <td className="border border-slate-300 p-3 text-lg">{item.price} Tk</td>
      <td className="border border-slate-300 p-3 text-lg">{item.qty}</td>
      <td className="border border-slate-300 p-3 text-lg">
        {item.qty * item.price} Tk
      </td>
    </>
  );
};

export default CartItem;

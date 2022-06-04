import CartItem from "./CartItem";

const CartItems = ({ cartItems }) => {
  return (
    <div className="py-10">
      <div className="container">
        <h2 className="text-4xl text-center mb-8">Cart Items</h2>
        {cartItems.length === 0 && (
          <h3 className="text-2xl text-center ">No Cart Items Added</h3>
        )}
        {cartItems.length > 0 && (
          <>
            <table className="border-separate border border-slate-400 mx-auto">
              <thead>
                <tr>
                  <th className="border border-slate-300 text-2xl p-3">
                    SL No
                  </th>
                  <th className="border border-slate-300 text-2xl p-3">Img</th>
                  <th className="border border-slate-300 text-2xl p-3">Name</th>
                  <th className="border border-slate-300 text-2xl p-3">
                    Price
                  </th>
                  <th className="border border-slate-300 text-2xl p-3">Qty</th>
                  <th className="border border-slate-300 text-2xl p-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, ind) => (
                  <tr key={item.id}>
                    <CartItem item={item} ind={ind} />
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan={4}
                    className="border border-slate-300 p-3 text-2xl font-medium "
                  >
                    Grand Total
                  </td>
                  <td className="border border-slate-300 p-3 text-2xl font-medium ">
                    {cartItems.reduce((acc, curr) => acc + curr.qty, 0)}
                  </td>
                  <td className="border border-slate-300 p-3 text-2xl font-medium ">
                    {cartItems.reduce(
                      (acc, curr) => acc + curr.price * curr.qty,
                      0
                    )}
                    Tk
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItems;

import { cartTypes } from "./Types";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART: {
      const productExits = state.cart.find(
        (item) => item.id === action.payload.id
      );
      console.log(productExits);
      if (productExits) {
        return {
          ...state,
          cart: [...state.cart].map((item) =>
            item.id === action.payload.id
              ? { ...productExits, qty: productExits.qty + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      }
    }

    case cartTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }

    default:
      return state;
  }
};

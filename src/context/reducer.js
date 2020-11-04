const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "TOTAL":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case "REMOVE":
      let removeItem = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: removeItem };

    case "TOGGLE_AMOUNT":
      let cartItem = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...item, amount: item.amount + 1 };
            }
            if (action.payload.type === "dec") {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: cartItem };
    case "LOADING":
      return { ...state, loading: true };

    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };
    default:
      return "No item to show";
  }
};

export default reducer;

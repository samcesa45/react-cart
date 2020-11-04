import React, { useEffect, useReducer } from "react";
import cartItems from "../data";
import reducer from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
  cart: cartItems,
  loading: false,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearcart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const fetchItem = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: data });
  };

  useEffect(() => {
    fetchItem();
  }, []);

  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ ...state, clearcart, remove, toggleAmount }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { AppContext } from "../context/AppProvider";

const Navbar = () => {
  const { amount } = useContext(AppContext);
  return (
    <nav>
      <div className="nav-center">
        <h3>useReducer</h3>
        <div className="cart-display">
          <p className="cart-amount">{amount}</p>
          <FaCartPlus className="fa" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AppContext } from "../context/AppProvider";
const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, toggleAmount } = useContext(AppContext);
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4 className="cart-title">{title}</h4>
        <h4 className="cart-price">${price * amount}</h4>
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div className="btn-group">
        <button className="btn" onClick={() => toggleAmount(id, "inc")}>
          <FaChevronUp />
        </button>
        <button className="btn" onClick={() => toggleAmount(id, "dec")}>
          <FaChevronDown />
        </button>
        <p className="cart-increase-amount">{amount}</p>
      </div>
    </article>
  );
};

export default CartItem;

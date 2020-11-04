import React, { useContext } from "react";
import CartItem from "./CartItem";
import Loading from "./Loading";
import { AppContext } from "../context/AppProvider";
const CartContainer = () => {
  const { loading, cart, total, clearcart } = useContext(AppContext);
  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        <h2>There are no items in cart</h2>
      </section>
    );
  }

  let cartDisplay = (
    <>
      <h2 className="container-heading">Your bag</h2>
      <div className="container">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <p className="cart-total">
          Total <span>${total}</span>
        </p>
        <button className="clear-btn" onClick={() => clearcart()}>
          clear cart
        </button>
      </footer>
    </>
  );
  return (
    <section className="section-center">
      {loading ? <Loading /> : cartDisplay}
    </section>
  );
};

export default CartContainer;

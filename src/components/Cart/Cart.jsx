import React, { useContext } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";
import formatCurrency from "../../utils/formatCurrency";

function Cart() {
  const { cartItems, isVisible } = useContext(AppContext);
  const totalPrice = cartItems.reduce((acumulator, item) => {
    return acumulator + item.price;
  }, 0);
  return (
    <section className={`cart ${isVisible ? "cart-active" : ""}`}>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
      <div className="cart-resume">{formatCurrency(totalPrice, "BRL")}</div>
    </section>
  );
}

export default Cart;

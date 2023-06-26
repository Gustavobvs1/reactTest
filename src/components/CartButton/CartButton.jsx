import React from "react";
import "./CartButton.css";
import { BsCart3 } from "react-icons/bs";

function CartButton() {
  return (
    <button type="button" className="cart-button">
      <BsCart3 />
      <span className="cart-status">1</span>
    </button>
  );
}

export default CartButton;

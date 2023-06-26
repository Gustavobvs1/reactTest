import React, { useContext } from "react";
import "./CartButton.css";
import { BsCart3 } from "react-icons/bs";
import AppContext from "../../context/AppContext";

function CartButton() {
  const { cartItems, isVisible, setIsVisible } = useContext(AppContext);
  return (
    <button
      type="button"
      className="cart-button"
      onClick={() => setIsVisible(!isVisible)}
    >
      <BsCart3 />
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
}

export default CartButton;

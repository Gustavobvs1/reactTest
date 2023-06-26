import React, { useContext } from "react";
import "./CartItem.css";
import { BsCartX } from "react-icons/bs";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

function CartItem({ data }) {
  const { id, title, thumbnail, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);
  function handleRemoveItem() {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  }

  return (
    <section className="cart-item">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="imagem do produto"
        className="cart-item-image"
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
        <button
          type="button"
          className="btn-item-remove"
          onClick={handleRemoveItem}
        >
          <BsCartX />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

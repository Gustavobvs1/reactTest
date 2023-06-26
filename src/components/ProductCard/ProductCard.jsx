import React, { useContext } from "react";
import propTypes from "prop-types";
import "./ProductCard.css";
import { BiCartAdd } from "react-icons/bi";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

function ProductCard({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { title, thumbnail, price } = data;
  function handleAddCart(event) {
    const updatedCartItems = [...cartItems, data];
    setCartItems(updatedCartItems);
  }
  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="Product"
        className="card-image"
      />
      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price, "BRL")}</h2>
        <h2 className="card-title">{title}</h2>
      </div>
      <button type="button" className="button-add" onClick={handleAddCart}>
        <BiCartAdd />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

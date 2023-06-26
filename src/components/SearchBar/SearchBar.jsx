import React, { useState, useContext } from "react";
import "./SearchBar.css";
import { BiSearch } from "react-icons/bi";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const { setProducts, setLoading } = useContext(AppContext);

  function handleChange({ target }) {
    setSearchValue(target.value);
  }

  async function handleSearch(event) {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue("");
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar produtos"
        value={searchValue}
        className="search-input"
        required
        onChange={handleChange}
      />
      <button type="submit" className="search-button">
        <BiSearch />
      </button>
    </form>
  );
}

export default SearchBar;

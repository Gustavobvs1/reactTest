import React, { useState } from "react";
import "./SearchBar.css";
import { BiSearch } from "react-icons/bi";
import fetchProducts from "../../api/fetchProducts";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  function handleChange({ target }) {
    setSearchValue(target.value);
  }

  async function handleSearch(event) {
    event.preventDefault();
    const products = await fetchProducts(searchValue);
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

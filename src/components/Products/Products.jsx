import React, { useContext, useEffect } from "react";
import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext";

function Products() {
  const { products, setProducts, setLoading, loading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts("iphone").then((res) => setProducts(res));
    setLoading(false);
  }, [setLoading, setProducts]);

  return loading ? (
    <Loading />
  ) : (
    <section className="products container">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </section>
  );
}

export default Products;

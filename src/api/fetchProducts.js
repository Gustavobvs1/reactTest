const url = "https://api.mercadolibre.com/sites/MLB/search?q=";

async function fetchProducts(query) {
  const response = await fetch(`${url}${query}`);
  const products = await response.json();
  return products.results;
}

export default fetchProducts;

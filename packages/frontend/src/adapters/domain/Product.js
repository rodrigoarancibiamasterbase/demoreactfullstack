import getAllProducts from "../api/ProductService";
export async function getProducts() {
  return getAllProducts();
}



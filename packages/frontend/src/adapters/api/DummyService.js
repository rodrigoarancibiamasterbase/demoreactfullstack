import axios from "axios";

export async function getAllDummyProducts(skip, limit) {
  const url = "https://dummyjson.com/products?limit=" + limit + "&skip=" + skip;

  const response = await axios.get(url);

  const data = response.data;
  return data;
}

export async function getDummyProduct(id) {
  const url = "https://dummyjson.com/products/" + id;
  const response = await axios.get(url);
  const data = response.data;
  return data;
}

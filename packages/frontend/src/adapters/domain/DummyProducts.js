import {getAllDummyProducts as getAllDummyProductsAPI , getDummyProduct as getDummyProductAPI} from "../api/DummyService";
export async function getDummyProducts(skip, limit) {
  return getAllDummyProductsAPI(skip, limit);
}

export async function getDummyProduct(id) {
  return getDummyProductAPI(id);
}



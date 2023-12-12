import axios from 'axios';

export  default async function getAllProducts() {
    const response = await axios.get(`${process.env.REACT_APP_INTERNAL_API_URL}/api/products`);
    const data = response.data;
    return data.map(product => ({
      sku: product.sku,
      name: product.name,
      price: product.price,
      quantity: product.quantity,

    }));
  }
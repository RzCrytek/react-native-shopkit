import products from "../../data/products.json";
import { Product } from "../../domain/product";

export const useDetailProduct = (id: string) => {
  const product = products.find((product) => product.id === id) as Product;

  return product;
};

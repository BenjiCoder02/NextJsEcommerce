import { ProductsData } from "@/components/ProductsData";
import { Products } from "../../types";

export const getProducts = async () => {
  const res = await fetch('https://fakestoreapiserver.reactbd.com/smart');
  if (!res.ok) {
    throw new Error('Failed to get products');
  }

  return res.json();
}

export const getTrendingProducts = async () => {
  const res = await fetch('https://fakestoreapiserver.reactbd.com/smarttrending');

  if (!res.ok) {
    throw new Error("Failed to get products");
  }

  return res.json();
}

export const calculatePercentage = (oldPrice: any, price: any) => {
  return !!parseFloat(price) && !!parseFloat(oldPrice) ? (100 - (oldPrice / price) * 100).toFixed(0) : 0;
}

export const getSingleProduct = async (_id: number) => {
  const res = await getProducts();

  if (!res) {
    throw new Error('Failed to get products')
  }

  const item = res.find((product: Products) => product._id === _id);

  return item;
}

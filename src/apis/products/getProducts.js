import axios from "axios";
import { GET_PRODUCTS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

export const getProducts = () => {
  const url = GET_PRODUCTS_URL;

  return axios.get(url);
};

export const useProductsQuery = () => {
  const { data, isLoading, error } = useQuery(["products"], getProducts);

  return { data, isLoading, error };
};

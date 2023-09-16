import axios from "axios";
import { GET_CATEGORIES_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

export const getCategories = () => {
  const url = GET_CATEGORIES_URL;

  return axios.get(url);
};

export const useCategoriesQuery = () => {
  const {
    data,
    isLoading,
    error,
  } = useQuery(["categories"], getCategories);

  return { data, isLoading, error };
};

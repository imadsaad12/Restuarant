import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import { HOME, PRODUCT_DETAILS, PRODUCTS } from "./URLs";
import Home from "../pages/home";
import ProductDetails from "../pages/product-details";
import Products from "../pages/products";
import HOC from "../HOC";

export default function Routes() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RoutesWrapper>
          <Route path={HOME} element={HOC(Home)} />
          <Route path={PRODUCTS} element={HOC(Products)} />
          <Route path={PRODUCT_DETAILS} element={HOC(ProductDetails)} />
        </RoutesWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import { HOME, PRODUCT_DETAILS } from "./URLs";
import Home from "../pages/home";
import ProductDetails from "../pages/product-details";

export default function Routes() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RoutesWrapper>
          <Route path={HOME} element={<Home />} />
          <Route path={PRODUCT_DETAILS} element={<ProductDetails />} />
        </RoutesWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

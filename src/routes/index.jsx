import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import { HOME,PRODUCTS } from "./URLs";
import Home from "../pages/home";
import Products from "../pages/products";


export default function Routes() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RoutesWrapper>
          <Route path={HOME} element={<Home />} />
          <Route path={PRODUCTS} element={<Products />} />

        </RoutesWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import { HOME, PRODUCTS } from "./URLs";
import Home from "../pages/home";
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
        </RoutesWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

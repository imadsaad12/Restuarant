import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import { HOME } from "./URLs";
import Home from "../pages/home";

export default function Routes() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RoutesWrapper>
          <Route path={HOME} element={<Home />} />
        </RoutesWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

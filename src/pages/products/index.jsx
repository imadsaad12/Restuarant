import React from "react";
import {
  ProductsLayout,
  PageLayout,
  RestaurantImage,
  ProductsContainer,
} from "./styles";
import ProductsHeader from "./components/productsheader";
import Product from "./components/product";

import { useParams } from "react-router-dom";
import { useProductsQuery } from "../../apis/products/getProducts";
import { data } from "../../data/products";

export default function Index() {
  const { category } = useParams();
  const { isLoading } = useProductsQuery();

  return (
    <>
      <ProductsLayout>
        <ProductsHeader category={category} />
        <ProductsContainer>
          {data?.data?.data?.map((product) => {
            return <Product {...product} />;
          })}
        </ProductsContainer>
      </ProductsLayout>
    </>
  );
}

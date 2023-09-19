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

export default function Index() {
  const { category } = useParams();
  const { data, isLoading } = useProductsQuery();

  return (
    <>
      <ProductsLayout>
        <ProductsHeader category={category} />
        <ProductsContainer>
          {!isLoading &&
            data?.data?.data?.map((product) => {
              return <Product {...product} />;
            })}
        </ProductsContainer>
      </ProductsLayout>
    </>
  );
}

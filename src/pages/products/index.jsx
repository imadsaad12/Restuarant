import React from "react";
import {
  ProductsLayout,
  PageLayout,
  RestaurantImage,
  ProductsContainer,
} from "./styles";
import ProductsHeader from "./components/productsheader";
import Product from "./components/product";

import { useProductsQuery } from "../../apis/products/getProducts";
import { useParams } from "react-router-dom";

export default function Index() {
  const { isLoading, data } = useProductsQuery();
  const { category } = useParams();

  return (
    <>
      <ProductsLayout>
        <ProductsHeader category={category} />
        <ProductsContainer>
          {!isLoading &&
            data?.data?.data?.map((product) => {
              const isListedUnderCurrentCategory =
                product?.attributes?.category === category;

              const isAvailable = product?.attributes?.isAvailable;

              return (
                <>
                  {isAvailable && isListedUnderCurrentCategory && (
                    <Product {...product} />
                  )}
                </>
              );
            })}
        </ProductsContainer>
      </ProductsLayout>
    </>
  );
}

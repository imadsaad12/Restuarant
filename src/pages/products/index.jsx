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
  const { isLoading, data } = useProductsQuery();
  const searchParams = new URLSearchParams(window.location.search);
  const category = searchParams.get("category");

  return (
    <>
      <ProductsLayout>
        <ProductsHeader category={category} />
        <ProductsContainer>
          {!isLoading &&
            data?.data?.data?.map((product) => {
              console.log(product.attributes);
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

import React from "react";
import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductCategory,
  ImageContainer
} from "./styles";
export default function product() {
  return (
    <ProductContainer>
      <ImageContainer>
        <ProductImage src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2147&q=80" />
        <ProductPrice>10$</ProductPrice>
      </ImageContainer>
      <ProductCategory>Salads </ProductCategory>
      <ProductName>Fattouch </ProductName>
    </ProductContainer>
  );
}

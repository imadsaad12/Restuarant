import React from "react";
import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductDescription,
  ImageContainer,
  ProductDetails,
} from "./styles";

const Product = ({
  attributes: {
    title,
    category,
    description,
    sizes,
    image: {
      data: {
        attributes: { url },
      },
    },
  },
  id,
}) => {
  const arrayOfPrices = sizes.map(({ price }) => price);
  const maxPrice = Math.max(...arrayOfPrices);
  const minPrice = Math.min(...arrayOfPrices);

  return (
    <ProductContainer>
      <ImageContainer>
        <ProductImage src={url} />
        {/* <ProductPrice>
          {maxPrice} ~ {minPrice} $
        </ProductPrice> */}
      </ImageContainer>
      <ProductDetails>
        <ProductName>
          {minPrice}~{maxPrice} $
        </ProductName>
        <ProductName>{title}</ProductName>
        <ProductDescription>{description} </ProductDescription>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product;

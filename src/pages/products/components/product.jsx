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
import { useNavigate } from "react-router-dom";

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
  const { REACT_APP_BASE_URL } = process.env;
  const navigate = useNavigate();

  const arrayOfPrices = sizes.map(({ price }) => price);
  const maxPrice = Math.max(...arrayOfPrices);
  const minPrice = Math.min(...arrayOfPrices);

  const handleOnClick = () => {
    navigate(`/products/${category}/${title}`, {
      state: { url, title, category, sizes },
    });
  };

  return (
    <ProductContainer onClick={handleOnClick}>
      <ImageContainer>
        {/* <ProductImage src={`${REACT_APP_BASE_URL}${url}`} /> */}
        <ProductImage src={url} />
        {/* <ProductPrice>
          {maxPrice} ~ {minPrice} $
        </ProductPrice> */}
      </ImageContainer>
      <ProductDetails>
        <ProductName> 18~19 $</ProductName>
        <ProductName>{title}</ProductName>
        <ProductDescription>{description} </ProductDescription>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product;

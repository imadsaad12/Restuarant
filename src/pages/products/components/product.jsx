import React from "react";
import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductCategory,
  ImageContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Product = ({
  attributes: {
    title,
    category,
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

  const { price } = sizes.find(({ size }) => size === "large");

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
        <ProductPrice>{price}$</ProductPrice>
      </ImageContainer>
      <ProductCategory>{category} </ProductCategory>
      <ProductName>{title} </ProductName>
    </ProductContainer>
  );
};

export default Product;

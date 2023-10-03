import React, { useEffect, useState } from "react";
import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductDescription,
  ImageContainer,
  ProductDetails,
  PricesContainer,
  Select,
} from "./styles";

const Product = ({
  attributes: {
    title = "",
    category = "",
    description = "",
    sizes = [],
    image,
  } = {},
  id,
}) => {
  const arrayOfPrices = sizes.map(({ price }) => price);
  const maxPrice = Math.max(...arrayOfPrices);
  const minPrice = Math.min(...arrayOfPrices);
  const [selectedSizePrice, setSelectedSizePrice] = useState(
    `${minPrice} ~ ${maxPrice}`
  );

  useEffect(() => {
    if (minPrice === maxPrice) {
      setSelectedSizePrice(maxPrice);
    }
  }, []);

  return (
    <ProductContainer>
      <ImageContainer>
        <ProductImage src={image?.data?.attributes?.url} />
        {/* <ProductPrice>
          {maxPrice} ~ {minPrice} $
        </ProductPrice> */}
      </ImageContainer>
      <ProductDetails>
        <ProductName>{title}</ProductName>
        <PricesContainer>
          <ProductName style={{ fontSize: "18px" }}>
            {selectedSizePrice} $
          </ProductName>
          <Select
            onChange={({ target: { value } }) => setSelectedSizePrice(value)}
          >
            <option selected hidden>
              sizes
            </option>
            {sizes.map(({ price, size }) => (
              <option value={price} selected={sizes?.length === 1}>
                {size}
              </option>
            ))}
          </Select>
        </PricesContainer>
        <ProductDescription>This is a description text </ProductDescription>
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product;

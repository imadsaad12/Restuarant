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
    window.scrollTo(0, 0);
    if (minPrice === maxPrice) {
      setSelectedSizePrice(maxPrice);
    }
  }, []);

  return (
    <ProductContainer>
      <ImageContainer>
        <ProductImage src={image?.data?.attributes?.url} />
      </ImageContainer>
      <ProductDetails>
        <ProductName>{title}</ProductName>
        <PricesContainer>
          <ProductName
            style={{ fontSize: "18px", width: "50%", alignSelf: "center" }}
          >
            {selectedSizePrice} $
          </ProductName>
          <Select
            onChange={({ target: { value } }) => setSelectedSizePrice(value)}
          >
            <option selected hidden>
              sizes
            </option>
            {sizes.map(({ price, size }) => (
              <option
                style={{ color: "black" }}
                value={price}
                selected={sizes?.length === 1}
              >
                {size}
              </option>
            ))}
          </Select>
        </PricesContainer>
        {description && <ProductDescription>{description}</ProductDescription>}
      </ProductDetails>
    </ProductContainer>
  );
};

export default Product;

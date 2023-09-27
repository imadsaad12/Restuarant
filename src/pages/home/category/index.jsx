import React, { useState } from "react";
import { Button, Container, Image, Title, TitleContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Category({
  attributes: {
    title,
    category,
    image: {
      data: {
        attributes: { url },
      },
    },
  },
  id,
}) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/products?category=${category}`);
  };

  return (
    <Container onClick={handleOnClick}>
      <Image src={url} />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
}

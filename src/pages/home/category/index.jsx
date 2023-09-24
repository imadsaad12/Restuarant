import React, { useState } from "react";
import { Button, Container, Image, Title, TitleContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Category({
  attributes: {
    title,
    image: {
      data: {
        attributes: { url },
      },
    },
  },
  id,
}) {
  const [displayCategory, setDisplayCategory] = useState(true);
  const { REACT_APP_BASE_URL } = process.env;
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/products/${title}`);
  };

  return (
    <Container>
      <Image
        onClick={handleOnClick}
        // src={`${REACT_APP_BASE_URL}${url}`}
        src={url}
      />
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
}

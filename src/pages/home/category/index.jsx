import React, { useState } from "react";
import { Button, Container, Image, Title } from "./styles";
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
    <Container
      onMouseEnter={() => setDisplayCategory(false)}
      onMouseLeave={() => setDisplayCategory(true)}
    >
      <Image
        displayCategory={displayCategory}
        src={`${REACT_APP_BASE_URL}${url}`}
      />
      {displayCategory ? (
        <Title>{title}</Title>
      ) : (
        <Button onClick={handleOnClick}>check it </Button>
      )}
    </Container>
  );
}

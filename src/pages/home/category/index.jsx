import React, { useState } from "react";
import { Button, Container, Image, Title } from "./styles";

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

  return (
    <Container
      onMouseEnter={() => setDisplayCategory(false)}
      onMouseLeave={() => setDisplayCategory(true)}
    >
      <Image
        displayCategory={displayCategory}
        src={`${REACT_APP_BASE_URL}${url}`}
      />
      {displayCategory ? <Title>{title}</Title> : <Button>Try it </Button>}
    </Container>
  );
}

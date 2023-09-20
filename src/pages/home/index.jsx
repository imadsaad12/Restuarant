import React from "react";
import { CategoriesContainer, Container } from "./styles";
import Category from "./category";
import { useCategoriesQuery } from "../../apis/categories/getCategories";

export default function Home() {
  const { data, isLoading } = useCategoriesQuery();

  return (
    <Container>
      <CategoriesContainer>
        {!isLoading &&
          data?.data?.data?.map((category) => <Category {...category} />)}
      </CategoriesContainer>
    </Container>
  );
}

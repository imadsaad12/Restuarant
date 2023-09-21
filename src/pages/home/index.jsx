import React from "react";
import { CategoriesContainer, Container } from "./styles";
import Category from "./category";
import { useCategoriesQuery } from "../../apis/categories/getCategories";
import { data } from "../../data/catgories";

export default function Home() {
  const { isLoading } = useCategoriesQuery();

  return (
    <Container>
      <CategoriesContainer>
        {data?.data?.data?.map((category) => (
          <Category {...category} />
        ))}
      </CategoriesContainer>
    </Container>
  );
}

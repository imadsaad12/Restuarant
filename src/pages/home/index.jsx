import React from "react";
import { CategoriesContainer, Container } from "./styles";
import Category from "./category";
import { useCategoriesQuery } from "../../apis/categories/getCategories";

export default function Home() {
  const { isLoading, data } = useCategoriesQuery();

  return (
    <CategoriesContainer>
      {!isLoading &&
        data?.data?.data?.map(
          (category) =>
            category?.attributes?.isAvailable && <Category {...category} />
        )}
    </CategoriesContainer>
  );
}

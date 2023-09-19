import React from "react";
import { CategoriesContainer, Container, RestaurantImage } from "./styles";
import Category from "./category";
import { useCategoriesQuery } from "../../apis/categories/getCategories";

export default function Home() {
  const { data, isLoading } = useCategoriesQuery();

  return (
    <Container>
      <RestaurantImage src="https://watermark.lovepik.com/photo/20211208/large/lovepik-western-restaurant-scene-picture_501643644.jpg" />
      <CategoriesContainer>
        {!isLoading &&
          data?.data?.data?.map((category) => <Category {...category} />)}
      </CategoriesContainer>
    </Container>
  );
}

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RestaurantImage = styled.img`
  width: 100%;
  height: 30%;
`;
export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin-top: 3em;
  height: 70vh;
  gap: 5px;
`;

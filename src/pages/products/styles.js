import styled from "styled-components";

export const ProductsLayout = styled.div`
  display:flex;
  flex-direction:column;
  height: 100%;
  align-items: center;
`;
export const PageLayout = styled.div`
background-color:#F5F5F5;
/* height:100vh; */

`;
export const RestaurantImage = styled.img`
  width: 100%;
  height: 20em;
  background-size: contain;
`;
export const ProductsContainer = styled.div`
width: 60%;
display: inline-flex;
flex-wrap: wrap;
align-content: flex-start;
padding-top: 10px;
padding-bottom: 70px;
@media (max-width: 768px) {
  width: 100%;
  }

`;

// export const RestaurantImage = styled.img`
//   width: 100%;
//   height: 30%;
// `;
// export const CategoriesContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   width: 85%;
//   margin-top: 3em;
//   height: 70vh;
//   gap: 5px;
// `;

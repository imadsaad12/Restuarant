import styled from "styled-components";

export const ProductsLayout = styled.div`
  display:flex;
  flex-direction:column;
  height: 100%;
  align-items: center;
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


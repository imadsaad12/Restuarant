import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  width: 100%;
`;

export const CategoryPath = styled.span`
  font-weight: normal;
  font-size: 20px;
  color: #777;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  letter-spacing: 0.5px;
`;
export const Category = styled.span`
  font-size: 55px;
`;

export const FilterContainer = styled.div`
  display: flex;
  height: 5em;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;
export const FilterInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 58%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const ResultsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 58%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Results = styled.span`
  font-weight: semi-bold;
  font-size: 20px;
  color: #777;
`;

export const Select = styled.select`
  background-color: transparent;
  font-size: 16px;
  border-color: #dddddd;
  &:focus {
    outline: none;
  }
  height: 40px;
`;

export const ProductContainer = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;


export const ImageContainer = styled.div`
  width: 92%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15em;
  @media (max-width: 450px) {
    width: 70%;
  }
`;

export const ProductImage = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 100%;
`;
export const ProductName = styled.span`
  font-size: 15px;
  /* font-weight: bold; */
  color: #777;
  @media (max-width: 920px) {
    font-size: 20px;
  }
  letter-spacing: 0.5px;
`;

export const ProductPrice = styled.span`
  font-size: 15px;
  /* font-weight: bold; */
  color: #777;
  @media (max-width: 920px) {
    font-size: 20px
    ;
  }
`;
export const ProductDescription = styled.span`
  font-size: 11px;
  width: fit-content;
  font-weight: normal;
  color: #aaa9a9;
  letter-spacing: 0.6px;

`;
export const ProductDetails = styled.div`
display: flex;
flex-direction: column;
gap:5px;
justify-content: center;
align-items: center;
`;

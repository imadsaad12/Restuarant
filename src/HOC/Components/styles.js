import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #000000;
  height: 10em;
  display: flex;
  flex-direction: row;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const RestaurantImage = styled.img`
  width: 100%;
  height: 15em;
  background-size: contain;
`;

export const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
export const FooterRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 20px;
  font-size: 20px;
`;
export const Link = styled.a`
  color: white;
  &:hover {
    color: gray;
  }
`;

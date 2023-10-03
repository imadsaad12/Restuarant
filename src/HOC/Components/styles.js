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
  height: 13em;
  background-size: cover;
  background-image: url(${(props) => props.image});

  @media (max-width: 920px) {
    height: 10em;
  }
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
export const LocationLink = styled.a`
  color: white;
  &:hover {
    color: gray;
  }
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  height: 20px;
  gap: 6px;
  border-left: 1px solid gray;
  cursor: pointer;
  text-decoration: none;
  &:nth-child(1) {
    border-left: 0px solid gray;
  }
`;

export const Link = styled.a`
  color: white;
  &:hover {
    color: gray;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid gray;
  width: 35px;
  height: 20px;
`;

export const Logo = styled.img`
  width: 8em;
  height: 8em;
  border-radius: 50%;
  position: absolute;
  left: 3em;
  top: 2em;
  cursor: pointer;
  @media (max-width: 920px) {
    width: 6em;
    height: 6em;
    left: 1em;
    top: 2em;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
`;

export const MediaContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-top: 40px;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Location = styled.a`
  text-decoration: none;
  color: #fff;
`;

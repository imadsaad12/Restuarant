import styled from "styled-components";

export const Container = styled.div`
  width: 25em;
  height: 15em;
  position: relative;
`;
export const Title = styled.p`
  text-align: center;
  font-size: 2em;
  color: white;
  /* font-weight: bold; */
  letter-spacing: 1px;
  word-spacing: 2px;
  cursor: pointer;
  @media (max-width: 330px) {
    font-size: 1.5em;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 15em;
  border-radius: 5px;
  margin-bottom: 5px;
  line-height: 0;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 60%;
`;

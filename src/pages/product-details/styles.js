import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto; /* Allow content to dictate the height */
  min-height: 100vh;
  background-color: #f8f7f2;
  /* @media (max-width: 920px) {
    height: auto;
  } */
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 93%;
  @media (max-width: 920px) {
    flex-direction: column;
    margin-top: 1em;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  @media (max-width: 920px) {
    width: 90%;
    margin-bottom: 2em;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 2.5em;
  width: fit-content;
  color: black;
  /* font-family: monospace; */
  align-self: flex-start;
  margin-left: 1em;
  margin-top: -0.1em;
  @media (max-width: 920px) {
    margin-left: 0.5em;
  }
`;

export const Price = styled.p`
  font-size: 1.5em;
  color: #62615b;
  margin-left: 1.5em;
  margin-top: -1em;

  @media (max-width: 920px) {
    margin-left: 0.5em;
  }
`;
export const Divider = styled.hr`
  width: 100%;
  margin-top: -1em;
  margin-left: 2.3em;
  background-color: lightgray;
  border: none;
  height: 1px;
  @media (max-width: 920px) {
    width: 90%;
    margin-left: 0.5em;
  }
`;

export const CategoryText = styled.p`
  margin-left: 2.2em;
  color: gray;
  @media (max-width: 920px) {
    margin-left: 0.7em;
  }
`;

export const ListContainer = styled.div`
  margin-top: 2em;
  width: 15em;
  margin-left: 2.2em;
  display: flex;
  flex-direction: column;
  @media (max-width: 920px) {
    margin-left: 0.5em;
  }
`;

export const ListItem = styled.div`
  width: 100%;
  color: #62615b;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  margin-left: 2.2em;
  margin-top: 1em;
  @media (max-width: 920px) {
    margin-left: 0.5em;
  }
`;
export const Text = styled.p`
  color: #62615b;
  justify-self: center;
`;

export const Select = styled.select`
  outline: none;
  width: 60%;
  height: 2em;
  margin-left: 2em;
  align-self: center;
  border: 1px solid lightgray;
`;

export const Option = styled.option`
  color: black;
  text-align: center;
`;

export const categoryStyle = { color: "black" };
export const iconsStyle = { color: "lightgreen" };

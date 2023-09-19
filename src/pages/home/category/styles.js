import styled from "styled-components";

export const Container = styled.div`
  width: 25em;
  height: 15em;
  position: relative;
`;
export const Title = styled.p`
  position: absolute;
  font-size: 2em;
  color: white;
  font-weight: bold;
  font-family: monospace;
  font-style: italic;
  left: 35%;
  top: 35%;
`;

export const Image = styled.img`
  width: 100%;
  height: 15em;
  border-radius: 5px;
  margin-bottom: 5px;
  line-height: 0;
  filter: ${(props) => (props.displayCategory ? "blur(0)" : "blur(5px)")};
  transition: all 0.1s ease-in;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 40%;
  height: 2em;
  position: absolute;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  font-family: monospace;
  font-style: italic;
  left: 28%;
  font-size: 2em;
  top: 40%;
  &:hover {
    background-color: white;
    color: black;
  }
`;

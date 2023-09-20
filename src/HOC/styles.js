import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const PageLayout = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 50%;
  @media (max-width: 900px) {
    height: auto;
  }
`;

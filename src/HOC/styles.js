import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #f5f5f5;
  position: relative;
`;

export const PageLayout = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  /* height: 50%; */
  @media (max-width: 900px) {
    height: auto;
  }
`;
export const WhatsappWrapper = styled.div`
position: fixed;
bottom: 20px;
right: 20px;
background-color: #00E676;
width: 50px;
height: 50px;
border-radius:20px;
z-index: 999;
display: flex;
align-items: center;
justify-content: center;

`;

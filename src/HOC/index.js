import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { Container, PageLayout, WhatsappWrapper } from "./styles";
import { AiOutlineWhatsApp } from "react-icons/ai";
import SocialMedia from "./Components/SocialMedia";

export default function index(WrappedComponent) {
  const openWhatsAppApp = () => {
    const phoneNumber = "+96181108408"; // Replace with the desired phone number
    const link = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      phoneNumber
    )}`;
    window.location.href = link; // This will open the WhatsApp app if installed
  };
  return (
    <Container>
      <WhatsappWrapper onClick={openWhatsAppApp}>
        <AiOutlineWhatsApp color="white" size={"30px"} />
      </WhatsappWrapper>
      <Header />
      <PageLayout>
        <SocialMedia />
        {<WrappedComponent />}
      </PageLayout>
      {/* <Footer /> */}
    </Container>
  );
}

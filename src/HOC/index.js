import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { Container, PageLayout, WhatsappWrapper } from "./styles";
import { IoLogoWhatsapp } from "react-icons/io";

export default function index(WrappedComponent) {
  const openWhatsAppApp = () => {
    const phoneNumber = '+96181108408'; // Replace with the desired phone number
    const link = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}`;
    window.location.href = link; // This will open the WhatsApp app if installed
  };
  return (
    <Container>
      <WhatsappWrapper onClick={openWhatsAppApp}>
        <IoLogoWhatsapp color="white"  size={"25px"}/>
      </WhatsappWrapper>
      <Header />
      <PageLayout>{<WrappedComponent />}</PageLayout>
      <Footer />
    </Container>
  );
}

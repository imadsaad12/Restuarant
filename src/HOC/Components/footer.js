import React from "react";
import { FooterContainer, FooterLeft, FooterRight, Link } from "./styles";
import { BsFacebook, BsTiktok } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLeft>Copyright © 2023 | Our-Resto DownTown</FooterLeft>
      <FooterRight>
        <Link href="https://www.facebook.com/Rjuice.saida?mibextid=ZbWKwL">
          <BsFacebook />
        </Link>
        <Link href="https://instagram.com/rjuice.saida?igshid=OGQ5ZDc2ODk2ZA==">
          <AiOutlineInstagram />
        </Link>

        <Link href="https://www.tiktok.com/@rjuice.saida?_t=8fxjorZeKQS&_r=1">
          <BsTiktok />
        </Link>
      </FooterRight>
    </FooterContainer>
  );
}

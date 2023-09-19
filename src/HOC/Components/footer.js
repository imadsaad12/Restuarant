import React from "react";
import { FooterContainer, FooterLeft, FooterRight,Link } from "./styles";
import { BsFacebook,BsTiktok } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {

  return (
    <FooterContainer>
      <FooterLeft>Copyright © 2023 | Amaleen DownTown</FooterLeft>
      <FooterRight>
        <Link href="http://www.facebook.com"><BsFacebook /></Link>
        <Link href="http://www.www.instagram.com"><AiOutlineInstagram /></Link>
        <Link href="http://www.twitter.com"><AiOutlineTwitter/></Link>
        <Link href="http://www.tiktok.com"><BsTiktok /></Link>
      </FooterRight>
    </FooterContainer>
  );
}

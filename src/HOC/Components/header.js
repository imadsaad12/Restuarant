import React from "react";
import { HeaderContainer, Logo, RestaurantImage } from "./styles";
import logoImage from "../../data/Ninja Edition Text Bottom.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <RestaurantImage src="https://dccool.com/sites/default/files/2023-07/Untitled%20design%20%2812%29.jpg" />
      <Logo src={logoImage} onClick={() => navigate("/")} />
    </>
  );
}

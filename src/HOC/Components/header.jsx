import React from "react";
import { HeaderContainer, Logo, RestaurantImage } from "./styles";
import logoImage from "../../data/Ninja Edition Text Bottom.png";
import { useNavigate } from "react-router-dom";
import cover from "../../data/cover.jpg"
export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <RestaurantImage image={cover} />
      <Logo src={logoImage} onClick={() => navigate("/")} />
    </>
  );
}

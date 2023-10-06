import React from "react";
import { Link, MediaContainer, Location, LocationLink } from "./styles";
import { BsFacebook, BsTiktok, BsTelephoneFill } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

export default function SocialMedia() {
  return (
    <MediaContainer>
      <LocationLink href="https://maps.app.goo.gl/9UD2oZw4Bq4tGxja9">
        <IoLocationSharp />
        <Location>Saida-Lebanon</Location>
      </LocationLink>
      <LocationLink>
        <BsTelephoneFill />
        <Location href="tel:+96181108408">81-108 408</Location>
      </LocationLink>
      <Link href="https://www.facebook.com/profile.php?id=61551382392850&mibextid=ZbWKwL">
        <BsFacebook />
      </Link>
      <Link href="https://instagram.com/rjuice.saida?igshid=OGQ5ZDc2ODk2ZA==">
        <AiOutlineInstagram />
      </Link>

      <Link href="https://www.tiktok.com/@rjuice.saida?_t=8fxjorZeKQS&_r=1">
        <BsTiktok />
      </Link>
    </MediaContainer>
  );
}

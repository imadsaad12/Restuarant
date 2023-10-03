import React from 'react'
import { Link ,MediaContainer,Location,LocationLink} from "./styles";
import { BsFacebook, BsTiktok,BsTelephoneFill } from "react-icons/bs";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";



export default function SocialMedia() {
  return (
    <MediaContainer>
          <LocationLink href="https://www.google.com/maps/place/Sidon/@33.5614854,35.3777448,14z/data=!3m1!4b1!4m6!3m5!1s0x151ef03ff51e8597:0x181e41e3b9ff1086!8m2!3d33.5570691!4d35.372948!16zL20vMDcwcmQ?entry=ttu">
            <IoLocationSharp/>
            <Location>Lebanon-Saida</Location>
          </LocationLink>
          <LocationLink>
            <BsTelephoneFill/>
            <Location>81876523</Location>
          </LocationLink>
         <Link href="https://www.facebook.com/Rjuice.saida?mibextid=ZbWKwL">
          <BsFacebook />
        </Link>
        <Link href="https://instagram.com/rjuice.saida?igshid=OGQ5ZDc2ODk2ZA==">
          <AiOutlineInstagram />
        </Link>

        <Link href="https://www.tiktok.com/@rjuice.saida?_t=8fxjorZeKQS&_r=1">
          <BsTiktok />
        </Link>
    </MediaContainer>
  )
}

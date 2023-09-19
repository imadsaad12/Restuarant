import React from "react";
import { RestaurantImage } from "./styles";

export default function header() {
  return (
    <>
      <RestaurantImage
        style={{
          backgroundImage:
            "url(https://dccool.com/sites/default/files/2023-07/Untitled%20design%20%2812%29.jpg)",
        }}
      />
    </>
  );
}

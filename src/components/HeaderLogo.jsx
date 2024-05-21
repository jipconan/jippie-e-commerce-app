import React from "react";
import { Image } from "@chakra-ui/react";

const HeaderLogo = () => {
  const headerIcon = {
    width: "256",
    height: "256",
  };
  return (
    <Image
      src={"../src/assets/jippie_logo.png"}
      alt="Rectangular Image"
      width={`${headerIcon.width}px`}
      height={`${headerIcon.height}px`}
    />
  );
};

export default HeaderLogo;

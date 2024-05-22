import React from "react";
import { Stack, Flex, Box, Image, Center, Link } from "@chakra-ui/react";
import { NavBar, HeaderLogo } from "../components";

const Header = () => {
  const headerImage = {
    width: "1900",
    height: "400",
    positionY: "100",
  };

  return (
    <Box position="relative" flex="1" mr={0}>
      <Image
        src={`https://fakeimg.pl/${headerImage.width}x${headerImage.height}`}
        alt="Rectangular Image"
        width={`${headerImage.width}px`}
        height={`${headerImage.height}px`}
      />
      <Center
        position="absolute"
        top={`${headerImage.positionY}px`}
        left="0"
        right="0"
        bottom="0"
      >
        <Flex direction="column" align="center" width="100%">
          <Stack>
            <Link href="/">
              <HeaderLogo />
            </Link>
          </Stack>
          <NavBar />
        </Flex>
      </Center>
    </Box>
  );
};

export default Header;

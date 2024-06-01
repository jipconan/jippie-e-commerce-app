import React from "react";
import {
  Stack,
  Flex,
  Box,
  Image,
  Center,
  Link,
  Button,
} from "@chakra-ui/react";
import { NavBar } from "../components";
import { RiLoginBoxLine, RiShoppingCart2Line } from "react-icons/ri";

const Header = () => {
  const headerImage = {
    width: "1900",
    height: "400",
    positionY: "100",
  };

  const headerLogo = {
    width: "256",
    height: "256",
  };

  const capyHeader = "/media/capyheader.png";

  return (
    <Box position="relative" flex="1" mr={0}>
      <Image
        src={capyHeader}
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
              <Image
                src={"/media/jippie_logo.png"}
                alt="Rectangular Image"
                width={`${headerLogo.width}px`}
                height={`${headerLogo.height}px`}
              />
            </Link>
          </Stack>

          {/* NavBar Component */}
          <NavBar />
        </Flex>
      </Center>
      <Button
        position="absolute"
        bottom="15px"
        right="15px"
        className="snipcart-checkout"
        colorScheme="orange"
        size="md"
        maxWidth={120}
        w={120}
        leftIcon={<RiShoppingCart2Line />}
        _hover={{ bg: "white", color: "orange.500" }}
      >
        Cart
      </Button>
    </Box>
  );
};

export default Header;

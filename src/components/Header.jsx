import React from "react";
import { Stack, Flex, Heading, Box, Image, Center } from "@chakra-ui/react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Box position="relative" flex="1" mr={0}>
      <Image
        src="https://fakeimg.pl/1900x300"
        alt="Rectangular Image"
        width="1900px"
        height="300px"
      />
      <Center position="absolute" top="-150" left="0" right="0" bottom="0">
        <Flex direction="column" align="center">
          <Stack>
            <Heading>Jippie</Heading>
          </Stack>
          <NavBar />
        </Flex>
      </Center>
    </Box>
  );
};

export default Header;

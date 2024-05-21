import React from "react";
import { Flex, Box, Link, Text, Stack } from "@chakra-ui/react";

const CatagoryBar = () => {
  return (
    <Stack>
      <Text p="2em">
        Please feel free to browse! They are all made by Jippie Artists!
      </Text>
      <Flex
        as="nav"
        color="black"
        padding="1.5rem"
        justifyContent="center"
        alignItems="center"
      >
        <Box fontWeight="bold" fontSize="xl"></Box>
        <Flex gap="2rem">
          <Link
            href="/store/keychains"
            _hover={{ textDecoration: "underline" }}
          >
            Keychains
          </Link>
          <Link href="/store/stickers" _hover={{ textDecoration: "underline" }}>
            Stickers
          </Link>
          <Link href="/store/pins" _hover={{ textDecoration: "underline" }}>
            Pins
          </Link>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default CatagoryBar;

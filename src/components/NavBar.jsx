import React from "react";
import { Flex, Box, Link, Button, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex
        as="nav"
        color="black"
        padding="1.5rem"
        justifyContent="center"
        alignItems="center"
      >
        <Box fontWeight="bold" fontSize="xl"></Box>
        <Flex gap="2rem">
          <Link href="/">
            <Text textDecoration="underline" fontSize="1xl">
              Home
            </Text>
          </Link>
          <Link href="/store/main">
            <Text textDecoration="underline" fontSize="1xl">
              Store
            </Text>
          </Link>
          <Link href="/contact">
            <Text textDecoration="underline" fontSize="1xl">
              Contact
            </Text>
          </Link>
          <Link href="/faq">
            <Text textDecoration="underline" fontSize="1xl">
              FAQ
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Flex gap="1rem" position="absolute" right="1rem" bottom="10px">
        {/* <Link href="/merchant" _hover={{ textDecoration: "" }}>
          <Button
            leftIcon={<RiLoginBoxLine />}
            colorScheme="orange"
            variant="outline"
            size="md"
            maxWidth={120}
            w={"100%"}
          >
            Merchant
          </Button>
        </Link> */}
      </Flex>
    </Flex>
  );
};

export default NavBar;

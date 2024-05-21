import React from "react";
import { Flex, Box, Link, Button } from "@chakra-ui/react";
import { RiLoginBoxLine } from "react-icons/ri";

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
          <Link href="/" _hover={{ textDecoration: "underline" }}>
            Home
          </Link>
          <Link href="/store" _hover={{ textDecoration: "underline" }}>
            Store
          </Link>
          <Link href="/contact" _hover={{ textDecoration: "underline" }}>
            Contact
          </Link>
          <Link href="/about-us" _hover={{ textDecoration: "underline" }}>
            About Us
          </Link>
          <Link href="/faq" _hover={{ textDecoration: "underline" }}>
            FAQ
          </Link>
        </Flex>
      </Flex>
      <Link href="/merchant" _hover={{ textDecoration: "" }}>
        <Button
          leftIcon={<RiLoginBoxLine />}
          colorScheme="orange"
          variant="solid"
          position="absolute"
          right="1rem"
          bottom="10px"
          size="sm"
        >
          Merchant
        </Button>
      </Link>
    </Flex>
  );
};

export default NavBar;

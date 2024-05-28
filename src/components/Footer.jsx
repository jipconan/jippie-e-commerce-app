import React from "react";
import { Text, Box, Stack, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack>
      <Box>
        <Text textAlign="center" mt={8} fontSize="1xl">
          Bought to you by Jippie E-Commerce App. © 2024 Jippie Group. All
          rights reserved.
        </Text>
      </Box>
      <Box>
        <Flex justifyContent="center" alignItems="center" py={8}>
          <Flex gap="2rem">
            <Link href="/">
              <Text textDecoration="underline" fontSize="1xl">
                Home
              </Text>
            </Link>
            <Link href="/store">
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
      </Box>
    </Stack>
  );
};

export default Footer;

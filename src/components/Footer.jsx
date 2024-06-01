import React from "react";
import { Text, Box, Stack, Flex, Link } from "@chakra-ui/react";
import NavBar from "./NavBar";

const Footer = () => {
  return (
    <Stack>
      <Box>
        <Text textAlign="center" mt={8} fontSize="1xl">
          Bought to you by Jippie E-Commerce App. © 2024 Jippie Group. All
          rights reserved.
        </Text>
      </Box>
      {/* NavBar Component */}
      <NavBar />
    </Stack>
  );
};

export default Footer;

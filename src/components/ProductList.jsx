import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import Footer from "./Footer";

const ProductList = () => {
  return (
    <Stack>
      <Stack d="flex" spacing={4} align="center" p={8}>
        <Text fontSize="3xl">KEYCHAINPAGE!</Text>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default ProductList;

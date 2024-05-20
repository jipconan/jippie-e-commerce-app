import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { AddToCartButton, CatagoryBar } from "../components";

const Keychains = () => {
  return (
    <Stack>
      <CatagoryBar />
      <Stack d="flex" spacing={4} align="center" p={8}>
        <Text fontSize="3xl">KEYCHAINS!</Text>
      </Stack>
      <AddToCartButton />
    </Stack>
  );
};

export default Keychains;
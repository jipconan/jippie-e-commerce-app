import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { AddToCartButton, CatagoryBar } from "../components";

const Stickers = () => {
  return (
    <Stack>
      <CatagoryBar />
      <Stack d="flex" spacing={4} align="center" p={8}>
        <Text fontSize="3xl">STICKERS!</Text>
      </Stack>
      <AddToCartButton />
    </Stack>
  );
};

export default Stickers;

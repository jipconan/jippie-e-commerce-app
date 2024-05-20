import React from "react";
import { Button, Stack, Text, Box } from "@chakra-ui/react";
import { AddToCartButton, CatagoryBar } from "../components";

const Pins = () => {
  return (
    <Stack>
      <CatagoryBar />
      <Stack d="flex" spacing={4} align="center" p={8}>
        <Text fontSize="3xl">PINS!</Text>
      </Stack>
      <AddToCartButton />
    </Stack>
  );
};

export default Pins;

import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { CatagoryBar } from "../components";

const Store = () => {
  return (
    <Stack>
      <CatagoryBar />
      <Stack d="flex" spacing={4} align="center" p={8}>
        <Text fontSize="3xl">STOREPAGE!</Text>
      </Stack>
    </Stack>
  );
};

export default Store;

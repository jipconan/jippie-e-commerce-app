import React from "react";
import { Flex, Box, Link, Text, Stack } from "@chakra-ui/react";
import { FadingBox } from "../components";

const CategoryBar = () => {
  return (
    <Stack>
      {/* FadingBox Component */}
      <FadingBox>
        <Text p="2em" fontSize={"2xl"}>
          Please feel free to browse! They are all made by Jippie Artists!
          <br />
          Select through keychains, stickers, pins and many more!
        </Text>

        <Flex
          as="nav"
          color="black"
          padding="1rem"
          justifyContent="center"
          alignItems="center"
        >
          <Box fontWeight="bold" fontSize="xl"></Box>
          <Flex gap="1rem">
            <Link
              href="/store/keychains"
              _hover={{ textDecoration: "underline" }}
            >
              <Text fontSize={"20px"} textDecoration={"underline"}>
                Keychains
              </Text>
            </Link>
            <Link
              href="/store/stickers"
              _hover={{ textDecoration: "underline" }}
            >
              <Text fontSize={"20px"} textDecoration={"underline"}>
                Stickers
              </Text>
            </Link>
            <Link href="/store/pins" _hover={{ textDecoration: "underline" }}>
              <Text fontSize={"20px"} textDecoration={"underline"}>
                Pins
              </Text>
            </Link>
          </Flex>
        </Flex>
      </FadingBox>
    </Stack>
  );
};

export default CategoryBar;

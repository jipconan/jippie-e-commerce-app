import React from "react";
import { Stack, Flex, Text } from "@chakra-ui/react";
import { CatagoryBar, ProductGrid } from "../components";
import useApi from "../utilities/useApi";

const categoryPage = ["Keychains", "Stickers", "Pins"];

const StorePage = () => {
  const { datas: keychainData } = useApi("Keychains", true);
  const { datas: stickerData } = useApi("Stickers", true);
  const { datas: pinData } = useApi("Pins", true);

  // Combine data from all categories
  const categoryData = {
    Keychains: keychainData,
    Stickers: stickerData,
    Pins: pinData,
  };

  return (
    <Stack>
      <CatagoryBar />
      <Stack d="flex" spacing={4} align="center" mb={0} p={10}>
        {categoryPage.map((category) => (
          <Flex key={category} direction="column" w="100%">
            <Stack>
              <Flex>
                <Text as="b" fontSize="3xl" color={"orange.500"}>
                  {category}
                </Text>
              </Flex>
            </Stack>
            <ProductGrid datas={categoryData[category]} />
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
};

export default StorePage;

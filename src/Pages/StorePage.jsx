import { React, useEffect } from "react";
import { Stack, Flex, Text } from "@chakra-ui/react";
import { CategoryBar, ProductGrid } from "../components";
import useApi from "../utilities/useApi";

const StorePage = () => {
  const categoryPage = ["Keychains", "Stickers", "Pins"];
  const { datas: keychainData, refetch: refetchKeychains } = useApi(
    "Keychains",
    false
  );
  const { datas: stickerData, refetch: refetchStickers } = useApi(
    "Stickers",
    false
  );
  const { datas: pinData, refetch: refetchPins } = useApi("Pins", false);

  useEffect(() => {
    // Fetch data for each category when component mounts
    refetchKeychains();
    refetchStickers();
    refetchPins();
  }, []);

  // Combine data from all categories
  const categoryData = {
    Keychains: keychainData,
    Stickers: stickerData,
    Pins: pinData,
  };

  return (
    <Stack>
      <CategoryBar />
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

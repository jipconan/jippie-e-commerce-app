import React, { useEffect, useState } from "react";
import { Stack, Flex, Heading } from "@chakra-ui/react";
import { CategoryBar, ProductGrid, FadingBox } from "../components";
import useApi from "../utilities/useApi";

const StorePage = () => {
  const categoryPage = ["Keychains", "Stickers", "Pins"];
  const [loading, setLoading] = useState(true);
  const { datas: keychainData, refetch: refetchKeychains } = useApi(
    "Keychains",
    false
  );
  const { datas: stickerData, refetch: refetchStickers } = useApi(
    "Stickers",
    false
  );
  const { datas: pinData, refetch: refetchPins } = useApi("Pins", false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchDataWithDelay = async () => {
      await refetchKeychains();
      await delay(500);
      await refetchStickers();
      await delay(500);
      await refetchPins();
      await delay(500);
      setLoading(false);
    };

    fetchDataWithDelay();
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
      <Stack spacing={4} align="center" mb={0} p={10}>
        {categoryPage.map(
          (category) =>
            categoryData[category] &&
            categoryData[category].length > 0 && (
              <FadingBox key={category}>
                <Flex direction="column" w="100%">
                  {/* <Heading align="left" color="RGB(227, 109, 5)" fontSize="2xl">
                    {category}
                  </Heading> */}
                  <ProductGrid datas={categoryData[category]} />
                </Flex>
              </FadingBox>
            )
        )}
        {loading && <p></p>}
      </Stack>
    </Stack>
  );
};

export default StorePage;

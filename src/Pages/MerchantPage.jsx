import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { MerchantUploadModal, ProductGrid, FadingBox } from "../components";
import useApi from "../utilities/useApi";

const categoryPage = ["Keychains", "Stickers", "Pins"];

const MerchantPage = () => {
  const { datas: keychainData, refetch: refetchKeychains } = useApi(
    "Keychains",
    true
  );
  const { datas: stickerData, refetch: refetchStickers } = useApi(
    "Stickers",
    true
  );
  const { datas: pinData, refetch: refetchPins } = useApi("Pins", true);

  // Combine data from all categories
  const categoryData = {
    Keychains: keychainData,
    Stickers: stickerData,
    Pins: pinData,
  };

  const isMerchantPage = true;

  // Open Modal for Add Product
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Function to refetch all categories
  const refetchAllCategories = async () => {
    await refetchKeychains();
    await delay(1000);
    await refetchStickers();
    await delay(1000);
    await refetchPins();
    await delay(1000);
    setLoading(false);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <Stack>
      <Box w="100%" maxW="100%" mx="auto" mt={10} p={0}>
        <Flex justifyContent="flex-start" mb={0} p={0}>
          <Button onClick={onOpen} colorScheme="orange" size="lg">
            Add Product
          </Button>
        </Flex>
        <MerchantUploadModal
          isOpen={isOpen}
          onClose={onClose}
          refetchAllCategories={refetchAllCategories}
        />
      </Box>
      <Stack spacing={0} align="center" p={10}>
        {categoryPage.map(
          (category) =>
            categoryData[category] &&
            categoryData[category].length > 0 && (
              <FadingBox key={category}>
                <Flex direction="column" w="100%" py={4}>
                  <Text as="b" fontSize="3xl" color="orange.500" align={"left"}>
                    {category}
                  </Text>
                  <ProductGrid
                    datas={categoryData[category]}
                    isMerchantPage={isMerchantPage}
                    refetchAllCategories={refetchAllCategories}
                  />
                </Flex>
              </FadingBox>
            )
        )}
      </Stack>
    </Stack>
  );
};

export default MerchantPage;

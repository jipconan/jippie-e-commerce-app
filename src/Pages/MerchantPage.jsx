import React from "react";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { MerchantUploadModal, ProductGrid } from "../components";
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
  const refetchAllCategories = () => {
    refetchKeychains();
    refetchStickers();
    refetchPins();
  };

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
        {categoryPage.map((category) => (
          <Flex key={category} direction="column" w="100%">
            <Flex flexDirection={"flex-start"}>
              <Text as="b" fontSize="3xl" color={"orange.500"}>
                {category}
              </Text>
            </Flex>
            <ProductGrid
              datas={categoryData[category]}
              isMerchantPage={isMerchantPage}
              refetchAllCategories={refetchAllCategories}
            />
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
};

export default MerchantPage;

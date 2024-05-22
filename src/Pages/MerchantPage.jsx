import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { MerchantUploadModal } from "../components";

const MerchantPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%" maxW="100%" mx="auto" mt={10} px={0}>
      <Flex justifyContent="flex-start" mb={4}>
        <Button onClick={onOpen} colorScheme="orange">
          Add Product
        </Button>
      </Flex>
      <MerchantUploadModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default MerchantPage;

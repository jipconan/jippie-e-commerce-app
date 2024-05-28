import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { MerchantDeleteModal, MerchantUpdateModal } from "../components";

const DeleteCard = ({
  id,
  name,
  description,
  price,
  publicId,
  imageUrl,
  category,
  refetchAllCategories,
}) => {
  // Open MerchantDeleteModal for Delete Product
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Open MerchantUpdateModal for Update Product
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="4"
      bg="white"
      display="flex"
      flexDirection="column"
      h="100%"
    >
      <Box flex="1">
        <Image src={imageUrl} alt={name} boxSize="400px" objectFit="cover" />
        <Box mt="4" p="2">
          <Text fontWeight="bold" fontSize="lg" mb="2">
            {name}
          </Text>
          <Text color="gray.500" fontSize="sm">
            {description}
          </Text>
          <Text mt="2" fontSize="lg" fontWeight="semibold" p="5">
            ${price}
          </Text>
        </Box>
      </Box>
      <Flex justifyContent="space-between" mt="4">
        <Button colorScheme="red" size="lg" onClick={onOpen} mr="2">
          Delete
        </Button>
        <Button colorScheme="blue" size="lg" onClick={onUpdateOpen}>
          Update
        </Button>
      </Flex>
      {/* MerchantUpdateModal Component */}
      <MerchantUpdateModal
        isOpen={isUpdateOpen}
        onClose={onUpdateClose}
        product={{
          id,
          name,
          description,
          price,
          imageUrl,
          public_id: publicId,
          category,
        }}
        refetchAllCategories={refetchAllCategories}
      />
      {/* MerchantDeleteModal Component */}
      <MerchantDeleteModal
        isOpen={isOpen}
        onClose={onClose}
        category={category}
        id={id}
        refetchAllCategories={refetchAllCategories}
        publicId={publicId}
      />
    </Box>
  );
};

export default DeleteCard;

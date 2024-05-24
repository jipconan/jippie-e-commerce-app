import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { MerchantDeleteModal } from "../components";

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
  // Open Modal for Delete Product
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="4"
      bg="white"
    >
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
        <Flex justifyContent="flex-start" mt="4">
          <Button colorScheme="red" size="md" onClick={onOpen}>
            Delete
          </Button>
          <MerchantDeleteModal
            isOpen={isOpen}
            onClose={onClose}
            category={category}
            id={id}
            refetchAllCategories={refetchAllCategories}
            publicId={publicId}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default DeleteCard;

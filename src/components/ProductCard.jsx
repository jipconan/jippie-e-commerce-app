import React from "react";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ id, name, description, price, publicId, imageUrl }) => {
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
        <Stack>
          <AddToCartButton
            id={id}
            public_id={publicId}
            image={imageUrl}
            name={name}
            description={description}
            price={price}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;

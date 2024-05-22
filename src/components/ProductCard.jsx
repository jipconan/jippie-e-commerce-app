import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import AddToCartButton from "./AddToCartButton";
import googleImageConverter from "../utilities/googleImageConverter";

const ProductCard = ({ id, imageUrl, name, description, price, publicId }) => {
  const convertedImageLink = googleImageConverter(imageUrl);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="4"
      bg="white"
    >
      <Image
        src={convertedImageLink}
        alt={name}
        boxSize="400px"
        objectFit="cover"
      />
      <Box mt="4" p="2">
        {" "}
        {/* Adjust padding here */}
        <Text fontWeight="bold" fontSize="lg" mb="2">
          {name}
        </Text>
        <Text color="gray.500" fontSize="sm">
          {description}
        </Text>
        <Text mt="2" fontSize="lg" fontWeight="semibold" p="5">
          ${price}
        </Text>
        <AddToCartButton
          id={id}
          public_id={publicId}
          image={convertedImageLink}
          name={name}
          description={description}
          price={price}
        />
      </Box>
    </Box>
  );
};

export default ProductCard;

import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useApi, uploadToCloudinary } from "../utilities";

const MerchantPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const handleNameChange = (event) => setName(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleFileChange = (event) => setFile(event.target.files[0]);

  const { createDatas } = useApi(category, false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console
      .log
      // `Step1: ${name}, ${price}, ${description}, ${category}, ${file.name}, ${file.type}, ${file.size}`
      ();
    if (name && price && description && category && file) {
      try {
        const { secureUrl, publicId } = await uploadToCloudinary(
          file,
          category
        );

        // console.log(`Step2: ${secureUrl}, ${publicId}`);

        await createDatas({
          name,
          price: parseFloat(price),
          description,
          imageUrl: secureUrl,
          public_id: publicId,
        });
      } catch (error) {
        console.error("Error submitting product:", error);
      }
    }
  };

  return (
    <Box
      maxW="sm"
      mx="auto"
      mt={10}
      bg="white"
      p={10}
      borderColor="lightgrey"
      borderRadius="md"
      borderWidth="0.1rem"
    >
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired mb={4}>
          <FormLabel color="teal.600">Product name</FormLabel>
          <Input type="text" value={name} onChange={handleNameChange} />
        </FormControl>

        <FormControl id="price" isRequired mb={4}>
          <FormLabel color="teal.600">Price</FormLabel>
          <Input type="number" value={price} onChange={handlePriceChange} />
        </FormControl>

        <FormControl id="description" isRequired mb={4}>
          <FormLabel color="teal.600">Description</FormLabel>
          <Textarea value={description} onChange={handleDescriptionChange} />
        </FormControl>

        <FormControl id="category" isRequired mb={4}>
          <FormLabel color="green.600">Category</FormLabel>
          <Select value={category} onChange={handleCategoryChange}>
            <option value="">Please choose an option</option>
            <option value="Keychains">Keychains</option>
            <option value="Stickers">Stickers</option>
            <option value="Pins">Pins</option>
          </Select>
        </FormControl>

        <FormControl id="file" isRequired mb={4} textAlign="center">
          <FormLabel color="orange.600">Upload Image (PNG or JPEG)</FormLabel>
          <Input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={handleFileChange}
          />
        </FormControl>

        <Stack mt={4}>
          <Button colorScheme="orange" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default MerchantPage;

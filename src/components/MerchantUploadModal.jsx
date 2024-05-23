import React, { useState, useRef } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useApi, uploadToCloudinary } from "../utilities";

const MerchantUploadModal = ({ isOpen, onClose, refetchAllCategories }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [file, setFile] = useState(null);
  const [load, setLoad] = useState(false);

  const fileInputRef = useRef(null);

  const handleNameChange = (event) => setName(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleCategoriesChange = (event) => setCategories(event.target.value);
  const handleFileChange = (event) => setFile(event.target.files[0]);

  const { createDatas } = useApi(categories, false);

  const clearForm = () => {
    setName("");
    setPrice("");
    setDescription("");
    setCategories("");
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset the file input
    }
  };

  const handleLoad = () => {
    setLoad(true);
  };

  const handleStopLoad = () => {
    setLoad(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name && price && description && categories && file) {
      try {
        handleLoad();
        const { secureUrl, publicId } = await uploadToCloudinary(
          file,
          categories
        );

        await createDatas({
          name,
          price: parseFloat(price),
          description,
          imageUrl: secureUrl,
          public_id: publicId,
          category: categories,
        });

        clearForm();
        handleStopLoad();
        refetchAllCategories();
        onClose();
      } catch (error) {
        console.error("Error submitting product:", error);
        handleStopLoad();
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalHeader>Add a New Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
              <Textarea
                value={description}
                onChange={handleDescriptionChange}
              />
            </FormControl>

            <FormControl id="category" isRequired mb={4}>
              <FormLabel color="green.600">Category</FormLabel>
              <Select value={categories} onChange={handleCategoriesChange}>
                <option value="">Please choose an option</option>
                <option value="Keychains">Keychains</option>
                <option value="Stickers">Stickers</option>
                <option value="Pins">Pins</option>
              </Select>
            </FormControl>

            <FormControl id="file" isRequired mb={4} textAlign="center">
              <FormLabel color="orange.600">
                Upload Image (PNG or JPEG)
              </FormLabel>
              <Input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
            </FormControl>

            <Stack mt={4}>
              <Button
                colorScheme="orange"
                type="submit"
                isLoading={load}
                loadingText="Submitting"
                variant="solid"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MerchantUploadModal;

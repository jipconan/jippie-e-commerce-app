import React, { useState, useEffect, useRef } from "react";
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
import { useAirtable, useCloudinary } from "../utilities";

const MerchantUpdateModal = ({
  isOpen,
  onClose,
  product,
  refetchAllCategories,
}) => {
  const { uploadImage, deleteImage } = useCloudinary(); // Use Cloudinary API
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [categories, setCategories] = useState(product.category);
  const [file, setFile] = useState(null);
  const [load, setLoad] = useState(false);

  const fileInputRef = useRef(null);

  useEffect(() => {
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setCategories(product.category);
  }, [product]);

  const handleNameChange = (event) => setName(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleCategoriesChange = (event) => setCategories(event.target.value);
  const handleFileChange = (event) => setFile(event.target.files[0]);

  const { updateData } = useAirtable(categories, false); // Use Airtable API

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
    try {
      handleLoad();
      let imageUrl = product.imageUrl;
      let publicId = product.public_id;

      if (file) {
        const uploadResult = await uploadImage(file, categories);
        imageUrl = uploadResult.secureUrl;
        publicId = uploadResult.publicId;
      }

      await updateData(product.id, {
        name,
        price: parseFloat(price),
        description,
        imageUrl,
        public_id: publicId,
        category: categories,
      });

      clearForm();
      handleStopLoad();
      refetchAllCategories();
      onClose();
    } catch (error) {
      console.error("Error updating product:", error);
      handleStopLoad();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={4}>
        <ModalHeader>Update Product</ModalHeader>
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

            <FormControl id="file" mb={4} textAlign="center">
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
                loadingText="Updating"
                variant="solid"
              >
                Update
              </Button>
            </Stack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MerchantUpdateModal;

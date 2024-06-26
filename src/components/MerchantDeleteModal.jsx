import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAirtable, useCloudinary } from "../utilities";

function MerchantDeleteModal({
  isOpen,
  onClose,
  id,
  category,
  refetchAllCategories,
  publicId,
}) {
  const { deleteImage } = useCloudinary(); // Use Cloudinary API

  const { deleteData } = useAirtable(category, false); // use Airtable API

  const [load, setLoad] = useState(false);

  const handleLoad = () => {
    setLoad(true);
  };

  const handleStopLoad = () => {
    setLoad(false);
  };

  const onDelete = async () => {
    try {
      handleLoad();
      // Delete the data from your API
      await deleteData(id);
      // Delete the image from Cloudinary
      await deleteImage(publicId);
      // Refetch all categories to refresh the UI
      refetchAllCategories();
      handleStopLoad();
      // Close the modal
      onClose();
    } catch (error) {
      console.error("Error deleting product or image:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure you want to delete this product?</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            colorScheme="orange"
            mr={3}
            onClick={onClose}
            w={20}
          >
            Close
          </Button>
          <Button
            variant="solid"
            colorScheme="red"
            onClick={onDelete}
            w={20}
            isLoading={load}
          >
            Yes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default MerchantDeleteModal;

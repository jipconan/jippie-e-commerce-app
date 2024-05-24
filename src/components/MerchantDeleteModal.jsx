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
} from "@chakra-ui/react";
import { useApi, useCloudinary } from "../utilities";

function MerchantDeleteModal({
  isOpen,
  onClose,
  id,
  category,
  refetchAllCategories,
  publicId,
}) {
  const { deleteImage } = useCloudinary();
  const { deleteData } = useApi(category, false);

  const onDelete = async () => {
    try {
      // Delete the data from your API
      await deleteData(id);
      // Delete the image from Cloudinary
      await deleteImage(publicId);
      // Refetch all categories to refresh the UI
      refetchAllCategories();
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
          <Button variant="solid" colorScheme="red" onClick={onDelete} w={20}>
            Yes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default MerchantDeleteModal;

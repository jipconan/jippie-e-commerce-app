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
import useApi from "../utilities/useApi";

function MerchantDeleteModal({
  isOpen,
  onClose,
  id,
  category,
  refetchAllCategories,
}) {
  const { deleteData } = useApi(category, false);

  const onDelete = async () => {
    await deleteData(id);
    refetchAllCategories();
    onClose();
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

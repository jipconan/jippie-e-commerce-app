import { Button, Stack } from "@chakra-ui/react";

function AddToCartButton() {
  return (
    <>
      <Stack>
        <Stack>
          <Button
            as="button"
            className="snipcart-add-item"
            data-item-id="starry-night"
            data-item-price="79.99"
            // data-item-url="/paintings/starry-night"
            data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
            data-item-image="/assets/images/starry-night.jpg"
            data-item-name="The Starry Night"
            // data-item-custom1-options="Black|Brown[+100.00]|Gold[+300.00]"
            colorScheme="blue"
          >
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default AddToCartButton;

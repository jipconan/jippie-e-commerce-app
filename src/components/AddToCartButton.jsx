import React from "react";
import { Button, Stack } from "@chakra-ui/react";

function AddToCartButton({ id, price, description, imageUrl, name }) {
  return (
    <>
      <Stack>
        <Stack>
          <Button
            as="button"
            className="snipcart-add-item"
            data-item-id={id}
            data-item-price={price}
            data-item-description={description}
            data-item-image={imageUrl}
            data-item-name={name}
            colorScheme="orange"
          >
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default AddToCartButton;

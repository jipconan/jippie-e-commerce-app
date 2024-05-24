import React from "react";
import { Button } from "@chakra-ui/react";

const AddToCartButton = ({
  id,
  public_id,
  imageUrl,
  name,
  description,
  price,
  category,
}) => {
  const ngrokUrl = "https://kid-casual-thankfully.ngrok-free.app"; // Replace with your Ngrok URL
  const productUrl = `${ngrokUrl}/store`;

  return (
    <Button
      className="snipcart-add-item"
      data-item-id={id}
      data-item-name={name}
      data-item-price={price}
      data-item-url={productUrl}
      data-item-description={description}
      data-item-image={imageUrl}
      colorScheme="orange"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;

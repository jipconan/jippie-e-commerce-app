import React from "react";
import { Stack, Text, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const MerchantGrid = ({ datas }) => {
  // console.log(datas);
  return (
    <Stack>
      <Stack d="flex" spacing={4} align="center" p={1}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
          {datas.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              publicId={product.public_id}
              imageUrl={product.imageUrl}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default MerchantGrid;

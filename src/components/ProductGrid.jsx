import React from "react";
import { Stack, SimpleGrid } from "@chakra-ui/react";
import { ProductCard, DeleteCard } from "../components";

const ProductGrid = ({ datas, isMerchantPage, refetchAllCategories }) => {
  return (
    <Stack>
      <Stack d="flex" spacing={4} align="center" p={1}>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
          {datas.map((product, index) =>
            isMerchantPage ? (
              <DeleteCard // DeleteCard Component
                key={index}
                id={product.id}
                publicId={product.public_id}
                imageUrl={product.imageUrl}
                name={product.name}
                description={product.description}
                price={product.price}
                category={product.category}
                refetchAllCategories={refetchAllCategories}
              />
            ) : (
              <ProductCard // ProductCard Component
                key={index}
                id={product.id}
                publicId={product.public_id}
                imageUrl={product.imageUrl}
                name={product.name}
                description={product.description}
                price={product.price}
                category={product.category}
              />
            )
          )}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default ProductGrid;

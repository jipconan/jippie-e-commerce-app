import React from "react";
import { Stack, Flex, Heading } from "@chakra-ui/react";
import { CatagoryBar, ProductGrid } from "../components";
import useApi from "../utilities/useApi";

const categoryPage = ["Keychains", "Stickers", "Pins"];

const StorePage = () => {
  const categoryData = categoryPage.reduce((acc, category) => {
    const { datas } = useApi(category, true);
    acc[category] = datas;
    return acc;
  }, {});

  return (
    <Stack>
      <CatagoryBar />
      <Stack d="flex" spacing={4} align="center" p={8}>
        {categoryPage.map((category) => (
          <Flex key={category} direction="column" w="100%">
            <ProductGrid datas={categoryData[category]} />
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
};

export default StorePage;

import React from "react";
import { Stack } from "@chakra-ui/react";
import { CategoryBar, ProductGrid } from "../components";
import useApi from "../utilities/useApi";

const KeychainsPage = () => {
  const { datas, fetchDatas } = useApi("Keychains", true);
  // console.log(datas);

  const fetchProducts = () => {
    fetchDatas();
  };
  return (
    <Stack>
      <CategoryBar />
      <Stack d="flex" spacing={4} align="center" p={8}>
        <ProductGrid datas={datas} fetchProducts={fetchProducts} />
      </Stack>
    </Stack>
  );
};

export default KeychainsPage;

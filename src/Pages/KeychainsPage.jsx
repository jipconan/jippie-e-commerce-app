import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";
import { CategoryBar, ProductGrid, FadingBox } from "../components";
import useApi from "../utilities/useApi";

const KeychainsPage = () => {
  const { datas, fetchDatas } = useApi("Keychains", true);

  const fetchProducts = () => {
    fetchDatas();
  };

  return (
    <Stack>
      <CategoryBar />
      <Stack d="flex" spacing={4} align="center" p={8}>
        {datas && datas.length > 0 && (
          <FadingBox>
            <ProductGrid datas={datas} fetchProducts={fetchProducts} />
          </FadingBox>
        )}
      </Stack>
    </Stack>
  );
};

export default KeychainsPage;

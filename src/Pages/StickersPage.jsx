import React from "react";
import { Stack } from "@chakra-ui/react";
import { CategoryBar, ProductGrid, FadingBox } from "../components";
import useAirtable from "../utilities/useAirtable";

const StickersPage = () => {
  const { datas, fetchDatas } = useAirtable("Stickers", true);
  // console.log(datas);

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

export default StickersPage;

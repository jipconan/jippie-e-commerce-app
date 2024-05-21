import React from "react";
import { Stack } from "@chakra-ui/react";
import { CatagoryBar, ProductGrid } from "../components";
import useApi from "../utilities/useApi";

const Store = () => {
  const { datas: keychainDatas } = useApi("Keychains");
  const { datas: stickerDatas } = useApi("Stickers");
  const { datas: pinDatas } = useApi("Pins");

  return (
    <Stack>
      <CatagoryBar />
      <Stack d="flex" spacing={4} align="center" p={8}>
        <ProductGrid datas={keychainDatas} />
        <ProductGrid datas={stickerDatas} />
        <ProductGrid datas={pinDatas} />
      </Stack>
    </Stack>
  );
};

export default Store;

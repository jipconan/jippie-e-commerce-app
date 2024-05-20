import React from "react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "lightyellow",
        overflowY: "scroll",
      },
    },
  },
});

export default theme;

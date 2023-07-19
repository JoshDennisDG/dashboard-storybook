/* eslint-disable @typescript-eslint/unbound-method */
import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  item: {
    _hover: {
      bg: "#f3faff",
    },
  },
});

export default defineMultiStyleConfig({ baseStyle });

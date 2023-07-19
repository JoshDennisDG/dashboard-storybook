import { defineStyleConfig } from "@chakra-ui/react";
import colors from "../colors";

const Text = defineStyleConfig({
  baseStyle: () => ({
    color: colors.regalBlue,
  }),
});

export default Text;

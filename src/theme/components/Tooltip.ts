import { cssVar, defineStyleConfig } from "@chakra-ui/react";
import colors from "../colors";

const $arrowBg = cssVar("popper-arrow-bg");

export default defineStyleConfig({
  baseStyle: {
    bg: colors.blue[800],
    [$arrowBg.variable]: colors.blue[800],
  },
});

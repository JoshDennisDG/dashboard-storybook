import { defineStyleConfig } from "@chakra-ui/react";
import colors from "../colors";

const Form = defineStyleConfig({
  baseStyle: {
    helperText: {
      color: colors.regalBlue,
    },
  },
});

export default Form;

import { Theme, extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";
import Link from "./components/Link";
import Menu from "./components/Menu";
import Text from "./components/Text";
import Tooltip from "./components/Tooltip";

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Avenir Heavy', sans-serif`,
    body: `'Avenir Medium', sans-serif`,
  },
  components: {
    Button,
    Form,
    Input,
    Link,
    Menu,
    Text,
    Tooltip,
  },
  semanticTokens: {
    colors: {
      "chakra-body-text": { _light: colors.regalBlue },
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: colors.selago,
        color: colors.regalBlue,
      },
    }),
  },
});

export default theme as Theme;

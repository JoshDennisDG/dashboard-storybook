import { Theme } from "@chakra-ui/react";
import theme from "../theme";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";

export default (componentName: any) =>
  getThemingArgTypes(theme as Theme, componentName);

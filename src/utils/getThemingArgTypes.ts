import { Theme } from "@chakra-ui/react";
import theme from "../theme";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", JSON.stringify(theme));
}

export default (componentName: any) =>
  getThemingArgTypes(theme as Theme, componentName);

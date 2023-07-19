import { Badge, ThemingProps, theme } from "@chakra-ui/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components / UI / Badge",
};

export const Basic: StoryFn<ThemingProps<"Badge">> = (props) => (
  <Badge {...props}>Success</Badge>
);

Basic.argTypes = getThemingArgTypes(theme, "Badge");

Basic.args = {
  colorScheme: "blue",
  variant: "solid",
};

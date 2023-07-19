import { Spinner, ThemingProps, theme } from "@chakra-ui/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { StoryFn } from "@storybook/react";

interface StoryProps extends ThemingProps<"Spinner"> {
  color: string;
  speed: number;
}

export default {
  title: "Components / Feedback / Spinner",
};

export const Basic: StoryFn<StoryProps> = ({ speed, ...props }) => (
  <Spinner speed={`${speed}s`} {...props} />
);

Basic.argTypes = {
  color: { type: "string" },
  speed: {
    type: "number",
    control: { type: "number", min: 0, max: 1, step: 0.1 },
  },
  ...getThemingArgTypes(theme, "Spinner"),
};

Basic.args = {
  color: theme.colors.blue["500"],
  speed: 0.8,
  size: "md",
};

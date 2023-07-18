import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Container,
  ThemingProps,
  theme,
} from "@chakra-ui/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { StoryFn } from "@storybook/react";
import { ReactNode } from "react";

interface StoryProps extends ThemingProps<"Alert"> {
  isLoading?: boolean;
}

export default {
  title: "Components / Alert",
  decorators: [
    (story: () => ReactNode) => <Container mt={4}>{story()}</Container>,
  ],
};

export const Basic: StoryFn<StoryProps> = (props) => (
  <Alert status={props.isLoading ? "loading" : undefined} {...props}>
    <AlertIcon />
    <AlertTitle mr={2}>Alert</AlertTitle>
    <AlertDescription>This is an alert</AlertDescription>
  </Alert>
);

Basic.argTypes = {
  ...getThemingArgTypes(theme, "Alert"),
  isLoading: { type: "boolean" },
};
Basic.args = {
  colorScheme: "blue",
  isLoading: false,
  variant: "subtle",
};

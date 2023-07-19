import * as React from "react";
import {
  Box,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Switch,
  theme,
  ThemingProps,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";

interface StoryProps extends ThemingProps<"Switch"> {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  labelPosition?: "left" | "right";
}

export default {
  title: "Components / Forms / Switch",
  decorators: [
    (story: () => React.ReactNode) => (
      <Box maxWidth="lg" mx="auto" mt={6} p={6}>
        {story()}
      </Box>
    ),
  ],
};

export const Base: StoryFn<StoryProps> = ({
  labelPosition,
  size,
  ...props
}) => (
  <Card>
    <CardBody>
      <FormControl
        alignItems="center"
        display="flex"
        flexDirection={labelPosition === "right" ? "row-reverse" : "row"}
        width="fit-content"
      >
        <FormLabel mb={0} mx={2} fontSize={size}>
          Opt-in
        </FormLabel>
        <Switch {...props} size={size} />
      </FormControl>
    </CardBody>
  </Card>
);

Base.argTypes = {
  isDisabled: { type: "boolean" },
  isReadOnly: { type: "boolean" },
  labelPosition: { options: ["left", "right"], control: { type: "select" } },
  ...getThemingArgTypes(theme, "Switch"),
};

Base.args = {
  colorScheme: "blue",
  isDisabled: false,
  isReadOnly: false,
  labelPosition: "left",
  size: "md",
};

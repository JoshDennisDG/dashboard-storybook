import { ArrowForwardIcon, EmailIcon, SearchIcon } from "@chakra-ui/icons";
import { Container, Stack } from "@chakra-ui/layout";
import * as React from "react";
import { ArgTypes, Meta, StoryFn } from "@storybook/react";
import { ThemingProps } from "@chakra-ui/system";
import { theme } from "@chakra-ui/theme";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { Button, IconButton as ChakraIconButton } from "@chakra-ui/react";
import { get, omit } from "lodash";

export default {
  title: "Components / Interactive / Button",
  decorators: [
    (Story: () => React.ReactNode) => (
      <Container mt="40px" display="flex" flexWrap="wrap" gap="4">
        <Story />
      </Container>
    ),
  ],
} as Meta;

const ARG_TYPES = getThemingArgTypes(theme, "Button");
const colorSchemes = get(ARG_TYPES, "colorScheme.type.value", []) as string[];

const buttonArgTypes: ArgTypes<StoryProps> = {
  children: { type: "string" },
  isDisabled: { type: "boolean" },
  isLoading: { type: "boolean" },
  ...omit(ARG_TYPES, "colorScheme"),
};

const defaultArgs: Partial<StoryProps> = {
  children: "Button",
  isDisabled: false,
  isLoading: false,
};

interface StoryProps extends ThemingProps<"Button"> {
  children?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const Basic: StoryFn<StoryProps> = (props) => (
  <>
    {colorSchemes.map((color) => (
      <Button
        key={color}
        colorScheme={color}
        loadingText="Loading..."
        {...props}
      />
    ))}
  </>
);

Basic.argTypes = buttonArgTypes;
Basic.args = defaultArgs;

export const WithIcon = () => (
  <Stack direction="row" spacing={4}>
    <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
      Email
    </Button>
    <Button
      rightIcon={<ArrowForwardIcon />}
      colorScheme="teal"
      variant="outline"
    >
      Call us
    </Button>
  </Stack>
);

export const IconButton: StoryFn<StoryProps> = (props) => (
  <>
    {colorSchemes.map((color) => (
      <ChakraIconButton
        aria-label="Search database"
        key={color}
        colorScheme={color}
        icon={<SearchIcon />}
        {...props}
      />
    ))}
  </>
);

IconButton.argTypes = buttonArgTypes;
IconButton.args = defaultArgs;

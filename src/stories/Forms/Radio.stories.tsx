import * as React from "react";
import {
  Card,
  CardBody,
  Container,
  HStack,
  Radio,
  RadioGroup as ChakraRadioGroup,
  ThemingProps,
  theme,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";

interface StoryProps extends ThemingProps<"Radio"> {
  isDisabled?: boolean;
}

export default {
  title: "Components / Forms / Radio",
  decorators: [
    (story: () => React.ReactNode) => (
      <Container mt="40px">
        <Card>
          <CardBody>{story()}</CardBody>
        </Card>
      </Container>
    ),
  ],
};

export const Basic: StoryFn<StoryProps> = (props) => (
  <Radio {...props}>Hello</Radio>
);

Basic.argTypes = {
  isDisabled: { type: "boolean" },
  ...getThemingArgTypes(theme, "Radio"),
};

Basic.args = {
  colorScheme: "blue",
  isDisabled: false,
  size: "md",
};

export function RadioGroup(props: StoryProps) {
  return (
    <ChakraRadioGroup isDisabled={props.isDisabled}>
      <HStack spacing={4}>
        <Radio {...props} value="one">
          One
        </Radio>
        <Radio {...props} value="two">
          Two
        </Radio>
        <Radio {...props} value="three">
          Three
        </Radio>
      </HStack>
    </ChakraRadioGroup>
  );
}

RadioGroup.argTypes = {
  isDisabled: { type: "boolean" },
  ...getThemingArgTypes(theme, "Radio"),
};

RadioGroup.args = {
  colorScheme: "blue",
  isDisabled: false,
  size: "md",
};

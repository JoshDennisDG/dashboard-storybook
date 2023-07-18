import { chakra } from "@chakra-ui/system";
import * as React from "react";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useNumberInput,
  Text,
  ThemingProps,
  Card,
  CardBody,
  theme,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";

interface StoryProps extends ThemingProps<"NumberInput"> {
  min?: number;
  max?: number;
  step?: number;
}

interface WithFormControlStoryProps extends StoryProps {
  helperText?: string;
  isInvalid?: boolean;
}

export default {
  title: "Components / Forms / NumberInput",
  decorators: [
    (story: () => React.ReactNode) => (
      <chakra.div maxW="400px" mt="40px" mx="auto">
        <Card>
          <CardBody>{story()}</CardBody>
        </Card>
      </chakra.div>
    ),
  ],
};

export const Basic: StoryFn<StoryProps> = (props) => (
  <NumberInput {...props}>
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);

Basic.argTypes = {
  ...getThemingArgTypes(theme, "NumberInput"),
  min: { type: "number" },
  max: { type: "number" },
  step: { type: "number" },
};

Basic.args = {
  max: 50,
  min: 10,
  size: "md",
  step: 1,
  variant: "outline",
};

export const withClampValueDisabled = () => (
  <Stack spacing={4}>
    <Text>Enter a number higher then 30</Text>

    <NumberInput defaultValue={15} max={30} clampValueOnBlur={false}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </Stack>
);

function FormError(props: any) {
  return (
    <FormErrorMessage
      mt="0"
      bg="red.500"
      color="white"
      px="1"
      lineHeight="1em"
      borderRadius="sm"
      {...props}
    />
  );
}

export const WithFormControl: StoryFn<WithFormControlStoryProps> = (props) => {
  return (
    <Stack align="start">
      <FormControl id="first-name">
        <chakra.div display="flex" mb="2">
          <FormLabel mb="0" lineHeight="1em">
            Amount
          </FormLabel>
          <FormError>is invalid!</FormError>
        </chakra.div>
        <NumberInput
          {...props}
          defaultValue={20}
          onBlur={() => {
            console.log("blurred");
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {props.helperText && (
          <FormHelperText>{props.helperText}</FormHelperText>
        )}
      </FormControl>
    </Stack>
  );
};

WithFormControl.argTypes = {
  ...getThemingArgTypes(theme, "NumberInput"),
  helperText: { type: "string" },
  isInvalid: { type: "boolean" },
  min: { type: "number" },
  max: { type: "number" },
  step: { type: "number" },
};

WithFormControl.args = {
  helperText: "Keep it very short and sweet",
  isInvalid: false,
  max: 50,
  min: 10,
  size: "md",
  step: 1,
  variant: "outline",
};

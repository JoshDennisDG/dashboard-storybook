import * as React from "react";
import {
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Box,
  Card,
  CardBody,
  Textarea,
  Select as ChakraSelect,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import Select from "../../components/Select";

interface StoryProps {
  helperText?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
}

interface SelectStoryProps extends StoryProps {
  allowEmpty?: boolean;
}

export default {
  title: "Components / Forms / FormControl",
  decorators: [
    (story: () => React.ReactNode) => (
      <Box mx="auto" mt="40px" maxW="400px">
        {story()}
      </Box>
    ),
  ],
};

export const InputExample: StoryFn<StoryProps> = (props) => (
  <Card>
    <CardBody>
      <FormControl id="first-name" {...props}>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First Name" />
        {props.helperText && (
          <FormHelperText>{props.helperText}</FormHelperText>
        )}
        <FormErrorMessage>Your First name is invalid</FormErrorMessage>
      </FormControl>
    </CardBody>
  </Card>
);

InputExample.argTypes = {
  helperText: { type: "string" },
  isInvalid: { type: "boolean" },
  isRequired: { type: "boolean" },
};

InputExample.args = {
  helperText: "Some helper text",
  isInvalid: false,
  isRequired: false,
};

export const TextAreaExample: StoryFn<StoryProps> = (props) => (
  <Card>
    <CardBody>
      <FormControl id="first-name" {...props}>
        <FormLabel>First name</FormLabel>
        <Textarea placeholder="First Name" />
        {props.helperText && (
          <FormHelperText>{props.helperText}</FormHelperText>
        )}
        <FormErrorMessage>
          <FormErrorIcon />
          Your First name is invalid
        </FormErrorMessage>
      </FormControl>
    </CardBody>
  </Card>
);

TextAreaExample.argTypes = {
  helperText: { type: "string" },
  isInvalid: { type: "boolean" },
  isRequired: { type: "boolean" },
};

TextAreaExample.args = {
  helperText: "Some helper text",
  isInvalid: false,
  isRequired: false,
};

export const SelectExample: StoryFn<SelectStoryProps> = (props) => (
  <Card>
    <CardBody>
      <FormControl id="first-name" {...props}>
        <FormLabel>First name</FormLabel>
        <Select
          allowEmpty={props.allowEmpty}
          onChange={console.log}
          options={["Option 1", "Option 2"]}
        />
        {props.helperText && (
          <FormHelperText>{props.helperText}</FormHelperText>
        )}
        <FormErrorMessage>
          <FormErrorIcon />
          Your First name is invalid
        </FormErrorMessage>
      </FormControl>
    </CardBody>
  </Card>
);

SelectExample.argTypes = {
  allowEmpty: { type: "boolean" },
  helperText: { type: "string" },
  isInvalid: { type: "boolean" },
  isRequired: { type: "boolean" },
};

SelectExample.args = {
  allowEmpty: false,
  helperText: "Some helper text",
  isInvalid: false,
  isRequired: false,
};

export const NativeSelectExample: StoryFn<SelectStoryProps> = (props) => (
  <Card>
    <CardBody>
      <FormControl id="first-name" {...props}>
        <FormLabel>First name</FormLabel>
        <ChakraSelect onChange={console.log}>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </ChakraSelect>
        {props.helperText && (
          <FormHelperText>{props.helperText}</FormHelperText>
        )}
        <FormErrorMessage>
          <FormErrorIcon />
          Your First name is invalid
        </FormErrorMessage>
      </FormControl>
    </CardBody>
  </Card>
);

NativeSelectExample.argTypes = {
  helperText: { type: "string" },
  isInvalid: { type: "boolean" },
  isRequired: { type: "boolean" },
};

NativeSelectExample.args = {
  helperText: "Some helper text",
  isInvalid: false,
  isRequired: false,
};

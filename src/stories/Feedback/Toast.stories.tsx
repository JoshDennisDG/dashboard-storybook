import {
  Button,
  Center,
  Container,
  Heading,
  Stack,
  Text,
  UseToastOptions,
  useToast,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { omit } from "lodash";

type StoryProps = Pick<
  UseToastOptions,
  "duration" | "status" | "isClosable" | "position"
>;

const argTypes = {
  duration: {
    type: "number",
    control: { min: 500, max: 5000, step: 100 },
  },
  isClosable: { type: "boolean" },
  position: {
    type: "string",
    options: [
      "top",
      "top-left",
      "top-right",
      "bottom",
      "bottom-left",
      "bottom-right",
    ],
    control: { type: "select" },
  },
  status: {
    type: "string",
    options: ["info", "warning", "success", "error", "loading"],
    control: { type: "select" },
  },
} as const;

const args = {
  duration: 2000,
  isClosable: false,
  position: "bottom",
  status: "info",
} as const;

const toastText = {
  info: {
    title: "This is some info",
    description: "This is some useful information",
  },
  warning: {
    title: "Warning.",
    description: "This is a warning.",
  },
  success: {
    title: "Account created.",
    description: "We've created your account for you.",
  },
  error: {
    title: "An error occurred.",
    description: "Unable to create user account.",
  },
  loading: {
    title: "Loading...",
    description: "We are loading some stuff",
  },
} as const;

export default {
  title: "Components / Feedback / Toast",
};

export const Basic: StoryFn<StoryProps> = (props) => {
  const toast = useToast();

  return (
    <Container mt={10}>
      <Center>
        <Button
          onClick={() =>
            toast({
              ...toastText[props.status || "info"],
              ...props,
            })
          }
        >
          Show toast
        </Button>
      </Center>
    </Container>
  );
};

Basic.argTypes = argTypes;
Basic.args = args;

export const CustomToast: StoryFn<StoryProps> = (props) => {
  const toast = useToast();

  return (
    <Container mt={10}>
      <Center>
        <Button
          onClick={() =>
            toast({
              ...toastText[props.status || "info"],
              ...props,
              render: ({ title, description }) => (
                <Stack bg="teal.100" rounded="md" p={2}>
                  <Heading size="sm">{title}</Heading>
                  <Text>{description}</Text>
                </Stack>
              ),
            })
          }
        >
          Show custom
        </Button>
      </Center>
    </Container>
  );
};

CustomToast.argTypes = omit(argTypes, "status");
CustomToast.args = omit(args, "status");

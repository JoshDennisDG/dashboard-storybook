import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  ThemingProps,
  theme,
} from "@chakra-ui/react";
import { loremIpsum } from "lorem-ipsum";
import { StoryFn } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { ReactNode } from "react";

const DEFAULT_ARGS = {
  size: "md",
  variant: "elevated",
};

const ARG_TYPES = getThemingArgTypes(theme, "Card");

export default {
  title: "Components / UI / Card",
  decorators: [
    (Story: () => ReactNode) => (
      <Box mx="auto" maxW="2xl" mt="40px">
        <Story />
      </Box>
    ),
  ],
};

export const Base: StoryFn<ThemingProps<"Card">> = (props) => (
  <Card {...props}>
    <CardHeader>
      <Heading size="md">This is my header</Heading>
    </CardHeader>
    <CardBody>{loremIpsum({ count: 2 })}</CardBody>
    <CardFooter>
      <Button>Button</Button>
    </CardFooter>
  </Card>
);

Base.argTypes = ARG_TYPES;
Base.args = DEFAULT_ARGS;

export const HorizontalCard: StoryFn<ThemingProps<"Card">> = (props) => (
  <Card direction="row" overflow="hidden" {...props}>
    <Image
      objectFit="cover"
      maxW="200px"
      src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
      alt="Caffe Latte"
    />
    <Stack>
      <CardBody>
        <Heading size="md">The perfect latte</Heading>
        <Text py="2">
          Caffè latte is a coffee beverage of Italian origin made with espresso
          and steamed milk.
        </Text>
      </CardBody>
      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          Buy Latte
        </Button>
      </CardFooter>
    </Stack>
  </Card>
);

HorizontalCard.argTypes = ARG_TYPES;
HorizontalCard.args = DEFAULT_ARGS;

export const Divided: StoryFn<ThemingProps<"Card">> = (props) => (
  <Card {...props}>
    <CardHeader>
      <Heading size="md">Client Report</Heading>
    </CardHeader>

    <CardBody>
      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Summary
          </Heading>
          <Text pt="2" fontSize="sm">
            View a summary of all your clients over the last month.
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Overview
          </Heading>
          <Text pt="2" fontSize="sm">
            Check out the overview of your clients.
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Analysis
          </Heading>
          <Text pt="2" fontSize="sm">
            See a detailed analysis of all your business clients.
          </Text>
        </Box>
      </Stack>
    </CardBody>
  </Card>
);

Divided.argTypes = ARG_TYPES;
Divided.args = DEFAULT_ARGS;

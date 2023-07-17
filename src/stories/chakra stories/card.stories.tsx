import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  HStack,
  Heading,
  IconButton,
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
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChat, BiLike, BiShare } from "react-icons/bi";

const DEFAULT_ARGS = {
  size: "md",
  variant: "elevated",
};

const ARG_TYPES = getThemingArgTypes(theme, "Card");

export default {
  title: "Components / Data Display / Card",
  decorators: [
    (Story: any) => (
      <Box mx="auto" maxW="2xl" mt="40px">
        <Story />
      </Box>
    ),
  ],
};

export const Basic: StoryFn<ThemingProps<"Card">> = (props) => (
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

Basic.argTypes = ARG_TYPES;
Basic.args = DEFAULT_ARGS;

export const WithDivider: StoryFn<ThemingProps<"Card">> = (props) => (
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

WithDivider.argTypes = ARG_TYPES;
WithDivider.args = DEFAULT_ARGS;

export const WithImage: StoryFn<ThemingProps<"Card">> = (props) => (
  <Card maxW="sm" {...props}>
    <CardBody>
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">Living room Sofa</Heading>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with
          a sprinkle of vintage design.
        </Text>
        <Text color="blue.600" fontSize="2xl">
          $450
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing="2">
        <Button variant="solid" colorScheme="blue">
          Buy now
        </Button>
        <Button variant="ghost" colorScheme="blue">
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
);

WithImage.argTypes = ARG_TYPES;
WithImage.args = DEFAULT_ARGS;

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

export const Advanced: StoryFn<ThemingProps<"Card">> = (props) => (
  <Card maxW="md" {...props}>
    <CardHeader>
      <HStack spacing="4">
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

        <Box flex="1">
          <Heading size="sm">Segun Adebayo</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="See menu"
          icon={<BsThreeDotsVertical />}
        />
      </HStack>
    </CardHeader>
    <CardBody>
      <Text>
        With Chakra UI, I wanted to sync the speed of development with the speed
        of design. I wanted the developer to be just as excited as the designer
        to create a screen.
      </Text>
    </CardBody>
    <Image
      objectFit="cover"
      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt="Chakra UI"
    />

    <CardFooter justify="space-between">
      <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
        Like
      </Button>
      <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
        Comment
      </Button>
      <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
        Share
      </Button>
    </CardFooter>
  </Card>
);

Advanced.argTypes = ARG_TYPES;
Advanced.args = DEFAULT_ARGS;

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  List,
  Text,
  ThemingProps,
} from "@chakra-ui/react";
import { theme } from "@chakra-ui/theme";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { StoryFn } from "@storybook/react";
import { loremIpsum } from "lorem-ipsum";

export default {
  title: "Components / Typography / Text",
};

export const Headings = () => (
  <>
    <Heading as="h1" size="4xl" noOfLines={1}>
      (4xl) This is my heading
    </Heading>
    <Heading as="h2" size="3xl" noOfLines={1}>
      (3xl) This is my heading
    </Heading>
    <Heading as="h2" size="2xl">
      (2xl) This is my heading
    </Heading>
    <Heading as="h2" size="xl">
      (xl) This is my heading
    </Heading>
    <Heading as="h3" size="lg">
      (lg) This is my heading
    </Heading>
    <Heading as="h4" size="md">
      (md) This is my heading
    </Heading>
    <Heading as="h5" size="sm">
      (sm) This is my heading
    </Heading>
    <Heading as="h6" size="xs">
      (xs) This is my heading
    </Heading>
  </>
);

const sizes = ["6xl", "5xl", "4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs"];

export const Paragraphs = () => (
  <>
    {sizes.map((size) => (
      <Text key={size} fontSize={size}>
        ({size}) This is some text
      </Text>
    ))}
  </>
);

interface LoremIpsumProps {
  fontSize: string;
}

export const LoremIpsum: StoryFn<LoremIpsumProps> = (props) => (
  <Container>
    <Text {...props}>{loremIpsum({ count: 5 })}</Text>
  </Container>
);

LoremIpsum.argTypes = {
  fontSize: {
    options: sizes,
    control: { type: "select" },
  },
};

export const Overrides = () => (
  <>
    <Text as="b">Bold</Text>
    <br />
    <Text as="i">Italic</Text>
    <br />
    <Text as="u">Underline</Text>
    <br />
    <Text as="abbr">I18N</Text>
    <br />
    <Text as="cite">Citation</Text>
    <br />
    <Text as="del">Deleted</Text>
    <br />
    <Text as="em">Emphasis</Text>
    <br />
    <Text as="ins">Inserted</Text>
    <br />
    <Text as="kbd">Ctrl + C</Text>
    <br />
    <Text as="mark">Highlighted</Text>
    <br />
    <Text as="s">Strikethrough</Text>
    <br />
    <Text as="samp">Sample</Text>
    <br />
    <Text as="sub">sub</Text>
    <br />
    <Text as="sup">sup</Text>
  </>
);

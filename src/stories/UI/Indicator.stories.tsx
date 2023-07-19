import {
  Card,
  CardBody,
  Center,
  Circle,
  Indicator,
  IndicatorProps,
  Text,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import theme from "../../theme";

interface StoryProps extends Pick<IndicatorProps, "placement"> {
  color: string;
}

export default {
  title: "Components / UI / Indicator",
};

export const Basic: StoryFn<StoryProps> = ({ color, placement }) => (
  <Center mt={10}>
    <Card position="relative" w="150px">
      <CardBody textAlign="center">
        <Text>Some text</Text>
      </CardBody>
      <Indicator placement={placement}>
        <Circle size="5" bg={color} fontSize="sm">
          3
        </Circle>
      </Indicator>
    </Card>
  </Center>
);

Basic.argTypes = {
  color: { type: "string" },
  placement: {
    options: [
      "bottom-end",
      "bottom-start",
      "top-end",
      "top-start",
      "bottom-center",
      "top-center",
      "middle-center",
      "middle-end",
      "middle-start",
    ],
    control: { type: "select" },
  },
};

Basic.args = {
  color: theme.colors.red[300],
  placement: "top-end",
};

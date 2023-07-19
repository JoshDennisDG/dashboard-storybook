import {
  Card,
  CardBody,
  Container,
  FormControl,
  FormLabel,
  Textarea,
  ThemingProps,
  theme,
} from "@chakra-ui/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { StoryFn } from "@storybook/react";
import { ReactNode } from "react";

interface StoryProps extends ThemingProps<"Textarea"> {
  isDisabled?: boolean;
  isInvalid?: boolean;
}

export default {
  title: "Components / Forms / Textarea",
  decorators: [(story: () => ReactNode) => <Container>{story()}</Container>],
};

export const Basic: StoryFn<StoryProps> = (props) => (
  <Card>
    <CardBody>
      <FormControl size={props.size}>
        <FormLabel>Description</FormLabel>
        <Textarea defaultValue="This is a textarea" {...props} />
      </FormControl>
    </CardBody>
  </Card>
);

Basic.argTypes = {
  isDisabled: { type: "boolean" },
  isInvalid: { type: "boolean" },
  ...getThemingArgTypes(theme, "Textarea"),
};

Basic.args = {
  isDisabled: false,
  isInvalid: false,
  size: "md",
  variant: "outline",
};

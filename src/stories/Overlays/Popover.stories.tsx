import {
  Button,
  Container,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverProps,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { loremIpsum } from "lorem-ipsum";
import { ReactNode } from "react";

interface StoryProps extends Pick<PopoverProps, "placement" | "trigger"> {
  withArrow?: boolean;
}

export default {
  title: "Components / Overlays / Popover",
  decorators: [
    (story: () => ReactNode) => <Container mt={10}>{story()}</Container>,
  ],
};

export const Basic: StoryFn<StoryProps> = ({
  trigger,
  withArrow,
  ...props
}) => (
  <Popover {...props} trigger={trigger}>
    <PopoverTrigger>
      <Button>{trigger === "click" ? "Click" : "Hover"}</Button>
    </PopoverTrigger>
    <PopoverContent>
      {withArrow && <PopoverArrow />}
      <PopoverCloseButton />
      <PopoverHeader>A popover!</PopoverHeader>
      <PopoverBody>
        <Text>{loremIpsum({ count: 2 })}</Text>
      </PopoverBody>
      <PopoverFooter display="flex" justifyContent="end">
        <Button size="sm" variant="ghost">
          Some action
        </Button>
      </PopoverFooter>
    </PopoverContent>
  </Popover>
);

Basic.argTypes = {
  placement: {
    options: ["bottom", "top", "left", "right"],
    control: { type: "select" },
  },
  trigger: {
    options: ["click", "hover"],
    control: { type: "select" },
  },
  withArrow: { type: "boolean" },
};

Basic.args = {
  placement: "bottom",
  trigger: "click",
  withArrow: false,
};

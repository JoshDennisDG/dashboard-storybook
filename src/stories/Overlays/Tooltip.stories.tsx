import { Button, Container, Tooltip, TooltipProps } from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { ReactNode } from "react";

type StoryProps = Pick<TooltipProps, "placement" | "hasArrow">;

export default {
  title: "Components / Overlays / Tooltip",
  decorators: [
    (story: () => ReactNode) => <Container mt={10}>{story()}</Container>,
  ],
};

export const Basic: StoryFn<StoryProps> = (props) => (
  <Tooltip label="This is a tooltip!" {...props}>
    <Button>Hover</Button>
  </Tooltip>
);

Basic.argTypes = {
  hasArrow: { type: "boolean" },
  placement: {
    options: ["top", "left", "right", "bottom"],
    control: { type: "select" },
  },
};

Basic.args = {
  hasArrow: true,
  placement: "bottom",
};

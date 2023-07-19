import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Container,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { chakra } from "@chakra-ui/system";
import { StoryFn } from "@storybook/react";
import { loremIpsum } from "lorem-ipsum";

interface StoryProps {
  allowToggle?: boolean;
  allowMultiple?: boolean;
}

export default {
  title: "Components / Interactive / Accordion",
  decorators: [(story: () => ReactNode) => <Container>{story()}</Container>],
};

export const Basic: StoryFn<StoryProps> = (props) => (
  <Accordion {...props}>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <chakra.div flex="1" textAlign="left">
            Section 1 title
          </chakra.div>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>{loremIpsum({ count: 2 })}</AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <chakra.div flex="1" textAlign="left">
            Section 2 title
          </chakra.div>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>{loremIpsum({ count: 2 })}</AccordionPanel>
    </AccordionItem>
  </Accordion>
);

Basic.argTypes = {
  allowMultiple: { type: "boolean" },
  allowToggle: { type: "boolean" },
};

Basic.args = {
  allowToggle: false,
  allowMultiple: false,
};

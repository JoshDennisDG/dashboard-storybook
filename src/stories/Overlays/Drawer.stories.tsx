import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Button,
  DrawerCloseButton,
  Text,
  DrawerFooter,
  ThemingProps,
  theme,
} from "@chakra-ui/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { StoryFn } from "@storybook/react";
import { loremIpsum } from "lorem-ipsum";

interface StoryProps extends ThemingProps<"Drawer"> {
  placement?: "top" | "right" | "bottom" | "left";
}

export default {
  title: "Components / Overlays / Drawer",
};

export const Basic: StoryFn<StoryProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Drawer isOpen={isOpen} onClose={onClose} {...props}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Drawer Header</DrawerHeader>
          <DrawerBody>
            <Text>{loremIpsum({ count: 2 })}</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button onClick={onClose}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

Basic.argTypes = {
  placement: {
    options: ["top", "right", "bottom", "left"],
    control: { type: "select" },
  },
  ...getThemingArgTypes(theme, "Drawer"),
};

Basic.args = {
  placement: "right",
  size: "md",
};

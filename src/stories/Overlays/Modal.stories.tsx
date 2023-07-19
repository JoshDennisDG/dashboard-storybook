import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  PortalManager,
  ThemingProps,
  theme,
} from "@chakra-ui/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { StoryFn } from "@storybook/react";
import { loremIpsum } from "lorem-ipsum";

interface StoryProps
  extends ThemingProps<"Modal">,
    Pick<ModalProps, "motionPreset"> {
  isCentered?: boolean;
}

const argTypes = {
  isCentered: { type: "boolean" },
  motionPreset: {
    options: ["slideInBottom", "slideInRight", "scale"],
    control: { type: "select" },
  },
  ...getThemingArgTypes(theme, "Modal"),
} as const;

const args = {
  isCentered: false,
  motionPreset: "scale",
  size: "md",
} as const;

export default {
  title: "Components / Overlays / Modal",
  decorators: [
    (StoryFn: () => React.ReactNode) => (
      <PortalManager>
        <StoryFn />
      </PortalManager>
    ),
  ],
};

export const Basic: StoryFn<StoryProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered {...props}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Welcome Home</ModalHeader>
          <ModalBody>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi.
          </ModalBody>
          <ModalFooter as={HStack} spacing={2}>
            <Button onClick={onClose}>Cancel</Button>
            <Button>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

Basic.argTypes = argTypes;
Basic.args = args;

export const Overflow: StoryFn<StoryProps> = (props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="inside"
        {...props}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{loremIpsum({ count: 50 })}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

Overflow.argTypes = argTypes;
Overflow.args = args;

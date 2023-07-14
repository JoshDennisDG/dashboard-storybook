import { Avatar } from "@chakra-ui/avatar";
import { AddIcon } from "@chakra-ui/icons";
import { chakra } from "@chakra-ui/system";
import * as React from "react";
import { MdSettings } from "react-icons/md";
import {
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
} from "@chakra-ui/react";

export default {
  title: "Components / Data Display / Tag",
  decorators: [
    (story: Function) => (
      <chakra.div maxW="600px" mx="auto" mt="40px">
        {story()}
      </chakra.div>
    ),
  ],
};

export const basic = () => <Tag colorScheme="teal">Teal</Tag>;

export const withSizes = () => (
  <>
    <Tag size="sm">Gray</Tag>
    <Tag size="md">Gray</Tag>
    <Tag size="lg">Gray</Tag>
  </>
);

export const colorSchemes = () => (
  <>
    <Tag size="sm" colorScheme="green">
      Gray
    </Tag>
    <Tag size="md" colorScheme="pink">
      Gray
    </Tag>
    <Tag size="lg" colorScheme="blue">
      Gray
    </Tag>
  </>
);

export const withLeftIcon = () => (
  <Tag colorScheme="cyan">
    <TagLeftIcon w="12px" h="12px" as={AddIcon} />
    <TagLabel>Green</TagLabel>
  </Tag>
);

export const withRightIcon = () => (
  <>
    <Tag colorScheme="cyan">
      <TagLabel>Green</TagLabel>
      <TagRightIcon w="12px" h="12px" as={AddIcon} />
    </Tag>

    <Tag variant="solid" colorScheme="teal">
      <TagLabel>Teal</TagLabel>
      <TagRightIcon as={MdSettings} />
    </Tag>
  </>
);

export const withCloseButton = () => (
  <>
    <Tag variant="solid" size="sm" colorScheme="cyan">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>

    <Tag variant="solid" size="md" colorScheme="cyan">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>

    <Tag variant="solid" size="lg" colorScheme="cyan">
      <TagLabel>Tab Label</TagLabel>
      <TagCloseButton />
    </Tag>
  </>
);

export const withCustomElement = () => (
  <Tag size="lg" colorScheme="red" borderRadius="full">
    <Avatar
      src="https://bit.ly/sage-adebayo"
      size="xs"
      name="Segun Adebayo"
      marginLeft={-1}
      marginRight={2}
    />
    <TagLabel>Segun</TagLabel>
    <TagCloseButton />
  </Tag>
);

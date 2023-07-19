import { chakra } from "@chakra-ui/system";
import * as React from "react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  ThemingProps,
  theme,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { AddIcon } from "@chakra-ui/icons";

interface WithIconStoryProps extends ThemingProps<"Tag"> {
  iconPosition?: "left" | "right";
}

export default {
  title: "Components / UI / Tag",
  decorators: [
    (story: () => React.ReactNode) => (
      <chakra.div maxW="600px" mx="auto" mt="40px">
        {story()}
      </chakra.div>
    ),
  ],
};

export const Basic: StoryFn<ThemingProps<"Tag">> = (props) => (
  <Tag {...props}>My Tag</Tag>
);

Basic.argTypes = getThemingArgTypes(theme, "Tag");

Basic.args = {
  colorScheme: "blue",
  size: "md",
  variant: "solid",
};

export const WithIcon: StoryFn<WithIconStoryProps> = ({
  iconPosition,
  ...props
}) => (
  <Tag {...props}>
    {iconPosition === "left" && <TagLeftIcon w="12px" h="12px" as={AddIcon} />}
    <TagLabel>My Tag</TagLabel>
    {iconPosition === "right" && (
      <TagRightIcon w="12px" h="12px" as={AddIcon} />
    )}
  </Tag>
);

WithIcon.argTypes = {
  iconPosition: { options: ["left", "right"], control: { type: "select" } },
  ...getThemingArgTypes(theme, "Tag"),
};

WithIcon.args = {
  colorScheme: "blue",
  iconPosition: "left",
  size: "md",
  variant: "solid",
};

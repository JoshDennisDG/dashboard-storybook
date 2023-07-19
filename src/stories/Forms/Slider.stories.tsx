import { chakra } from "@chakra-ui/system";
import * as React from "react";
import {
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  ThemingProps,
  theme,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";

interface StoryProps extends ThemingProps<"Slider"> {
  thumb?: string;
}

export default {
  title: "Components / Forms / Slider",
  decorators: [
    (story: () => React.ReactNode) => (
      <chakra.div maxWidth="400px" height="300px" mx="auto" mt="40px">
        {story()}
      </chakra.div>
    ),
  ],
};

export const Horizontal: StoryFn<StoryProps> = (props) => (
  <Slider colorScheme="blue" defaultValue={40} {...props}>
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb children={props.thumb} boxSize="30px" color="black" />
  </Slider>
);

Horizontal.argTypes = {
  thumb: { type: "string" },
  ...getThemingArgTypes(theme, "Slider"),
};

Horizontal.args = {
  colorScheme: "blue",
  size: "md",
  thumb: "#",
};

export const Vertical: StoryFn<StoryProps> = (props) => (
  <Slider
    colorScheme="blue"
    defaultValue={40}
    orientation="vertical"
    {...props}
  >
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb children={props.thumb} boxSize="30px" color="black" />
  </Slider>
);

Vertical.argTypes = {
  thumb: { type: "string" },
  ...getThemingArgTypes(theme, "Slider"),
};

Vertical.args = {
  colorScheme: "blue",
  size: "md",
  thumb: "#",
};

import { chakra } from "@chakra-ui/system";
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default {
  title: "Components / Forms / Range Slider",
  decorators: [
    (story: () => ReactNode) => (
      <chakra.div maxWidth="400px" height="300px" mx="auto" mt="40px">
        {story()}
      </chakra.div>
    ),
  ],
};

export const HorizontalSlider = () => (
  <RangeSlider onChangeEnd={console.log}>
    <RangeSliderTrack>
      <RangeSliderFilledTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
  </RangeSlider>
);

export const VerticalSlider = () => (
  <RangeSlider orientation="vertical" onChangeEnd={console.log}>
    <RangeSliderTrack>
      <RangeSliderFilledTrack />
    </RangeSliderTrack>
    <RangeSliderThumb index={0} />
    <RangeSliderThumb index={1} />
  </RangeSlider>
);

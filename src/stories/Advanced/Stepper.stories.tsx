/* eslint-disable @typescript-eslint/unbound-method */
import { Box, HStack } from "@chakra-ui/layout";
import {
  Button,
  Step,
  StepDescription,
  StepIndicator,
  StepIndicatorContent,
  StepSeparator,
  StepTitle,
  Stepper,
  StepperProps,
  ThemingProps,
  theme,
  useSteps,
} from "@chakra-ui/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { StoryFn } from "@storybook/react";

type StoryProps = ThemingProps<"Stepper"> & Pick<StepperProps, "orientation">;

export default {
  title: "Components / Advanced / Stepper",
};

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

export const Basic: StoryFn<StoryProps> = (props) => {
  const { goToNext, goToPrevious, activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <Stepper
        index={activeStep}
        {...props}
        height={props.orientation === "vertical" ? "400px" : undefined}
      >
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator>
              <StepIndicatorContent />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <HStack mt="5">
        <Button
          size={props.size}
          isDisabled={activeStep === 0}
          onClick={goToPrevious}
        >
          Prev
        </Button>
        <Button
          size={props.size}
          isDisabled={activeStep === steps.length}
          onClick={goToNext}
        >
          Next
        </Button>
      </HStack>
    </>
  );
};

Basic.argTypes = {
  ...getThemingArgTypes(theme, "Stepper"),
  orientation: {
    type: "string",
    options: ["horizontal", "vertical"],
    control: { type: "select" },
  },
};

Basic.args = {
  colorScheme: "blue",
  orientation: "horizontal",
  size: "md",
};

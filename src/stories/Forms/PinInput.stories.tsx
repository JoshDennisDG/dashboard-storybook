import {
  Box,
  Card,
  CardBody,
  Container,
  PinInput,
  PinInputField,
  Stack,
  Text,
  ThemingProps,
  theme,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";

export default {
  title: "Components / Forms / PinInput",
};

export const Basic: StoryFn<ThemingProps<"PinInput">> = (props) => (
  <Container>
    <Card>
      <CardBody>
        <Stack>
          <Text>Please enter your pin</Text>
          <Box>
            <PinInput {...props}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  </Container>
);

Basic.argTypes = getThemingArgTypes(theme, "PinInput");

Basic.args = {
  size: "md",
  variant: "outline",
};

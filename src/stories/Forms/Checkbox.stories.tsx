import { Container, Stack } from "@chakra-ui/layout";
import * as React from "react";
import {
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  ThemingProps,
  theme,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";

interface StoryProps extends ThemingProps<"Checkbox"> {
  iconColor?: string;
}

export default {
  title: "Components / Forms / Checkbox",
  decorators: [
    (story: () => React.ReactNode) => (
      <Container mt="40px">{story()}</Container>
    ),
  ],
};

export const Basic: StoryFn<StoryProps> = (props) => (
  <Card>
    <CardBody>
      <Checkbox {...props}>Hello</Checkbox>
    </CardBody>
  </Card>
);

Basic.argTypes = {
  iconColor: { type: "string" },
  ...getThemingArgTypes(theme, "Checkbox"),
};
Basic.args = {
  colorScheme: "blue",
  size: "md",
};

export const Indeterminate = () => {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>
      <Stack ml="6" mt="2" align="start">
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  );
};

export const Group = () => {
  return (
    <CheckboxGroup
      defaultValue={["one", "two"]}
      onChange={(value) => console.log(value)}
    >
      <Stack spacing={[2, 4, 6]} direction={["column", "row"]}>
        <Checkbox value="one">One</Checkbox>
        <Checkbox value="two">Two</Checkbox>
        <Checkbox value="three">Three</Checkbox>
      </Stack>
    </CheckboxGroup>
  );
};

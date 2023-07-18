import {
  Card,
  CardBody,
  Container,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  ThemingProps,
  theme,
} from "@chakra-ui/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { StoryFn } from "@storybook/react";
import { ReactNode } from "react";

const variants = [
  "line",
  "enclosed",
  "enclosed-colored",
  "soft-rounded",
  "solid-rounded",
] as const;

export default {
  title: "Components / Tabs",
  decorators: [(story: () => ReactNode) => <Container>{story()}</Container>],
};

export const Basic: StoryFn<ThemingProps<"Tabs">> = (props) => (
  <Card>
    <CardBody>
      <Tabs {...props}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>

        {props.variant === "unstyled" && (
          <TabIndicator height="2px" bg="green.200" />
        )}

        <TabPanels>
          <TabPanel>
            <Text>Panel 1</Text>
          </TabPanel>
          <TabPanel>
            <Text>Panel 2</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CardBody>
  </Card>
);

Basic.argTypes = getThemingArgTypes(theme, "Tabs");

Basic.args = {
  colorScheme: "blue",
  size: "md",
  variant: "line",
};

export const Vertical: StoryFn<ThemingProps<"Tabs">> = (props) => (
  <Card>
    <CardBody>
      <Tabs {...props} orientation="vertical">
        <TabList>
          <Tab>Settings</Tab>
          <Tab>Billings</Tab>
          <Tab isDisabled>Preferences</Tab>
          <Tab>Shut Down</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Settings</TabPanel>
          <TabPanel>Billings</TabPanel>
          <TabPanel>Preferences</TabPanel>
          <TabPanel>Shut Down</TabPanel>
        </TabPanels>
      </Tabs>
    </CardBody>
  </Card>
);

Vertical.argTypes = getThemingArgTypes(theme, "Tabs");

Vertical.args = {
  colorScheme: "blue",
  size: "md",
  variant: "line",
};

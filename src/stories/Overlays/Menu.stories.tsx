import * as React from "react";
import {
  FaChevronDown,
  FaSearch,
  FaTruck,
  FaUndoAlt,
  FaUnlink,
} from "react-icons/fa";
import {
  Box,
  Button,
  HTMLChakraProps,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  ThemingProps,
  theme,
  useMenuItem,
} from "@chakra-ui/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";
import { StoryFn } from "@storybook/react";

function logEvents(e: React.MouseEvent | React.KeyboardEvent | undefined) {
  if (e && e.persist) {
    // Stop React from complaining about non-persisting events.
    e.persist();
  }
  console.log(e);
}

export default {
  title: "Components / Overlays / Menu",
};

const words = [
  "About Visual Studio Code",
  "Check for updates",
  "Preferences",
  "Services",
  "Hide Visual Studio Code",
  "Show All",
];

export const Basic: StoryFn<ThemingProps<"Button">> = (props) => (
  <Menu>
    <MenuButton as={Button} {...props}>
      Open menu
    </MenuButton>
    <MenuList>
      {words.map((word) => (
        <MenuItem key={word} onClick={logEvents}>
          {word}
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
);

Basic.argTypes = getThemingArgTypes(theme, "Button");

Basic.args = {
  colorScheme: "blue",
  size: "md",
  variant: "solid",
};

export const WithDisabledItem: StoryFn<ThemingProps<"Button">> = (props) => (
  <Menu>
    <MenuButton as={Button} {...props}>
      Open menu
    </MenuButton>
    <MenuList>
      <MenuItem isDisabled icon={<FaSearch />} command="⌥T">
        Search
      </MenuItem>
      <MenuItem icon={<FaUndoAlt />}>Undo</MenuItem>
      <MenuItem icon={<FaTruck />}>Delivery</MenuItem>
      <MenuItem isDisabled icon={<FaUnlink />}>
        Unlink
      </MenuItem>
    </MenuList>
  </Menu>
);

WithDisabledItem.argTypes = getThemingArgTypes(theme, "Button");

WithDisabledItem.args = {
  colorScheme: "blue",
  size: "md",
  variant: "solid",
};

export const WithGroupedItems: StoryFn<ThemingProps<"Button">> = (props) => (
  <Menu>
    <MenuButton as={Button} {...props}>
      Open menu
    </MenuButton>
    <MenuList minWidth="240px">
      <MenuGroup title="Group 1">
        <MenuItem>Share...</MenuItem>
        <MenuItem>Move...</MenuItem>
      </MenuGroup>
      <MenuGroup title="Group 2">
        <MenuItem isDisabled>Rename...</MenuItem>
        <MenuItem>Delete...</MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
);

WithGroupedItems.argTypes = getThemingArgTypes(theme, "Button");

WithGroupedItems.args = {
  colorScheme: "blue",
  size: "md",
  variant: "solid",
};

export const WithMenuRadio: StoryFn<ThemingProps<"Button">> = (props) => (
  <Menu closeOnSelect={false}>
    <MenuButton as={Button} {...props}>
      Open menu
    </MenuButton>

    <MenuList minWidth="240px">
      <MenuItem icon={<FaUndoAlt />}>Undo</MenuItem>

      <MenuDivider />

      <MenuOptionGroup defaultValue="val-1" title="Order" type="radio">
        <MenuItemOption value="val-1">Option 1</MenuItemOption>
        <MenuItemOption value="val-2">Option 2</MenuItemOption>
      </MenuOptionGroup>

      <MenuDivider />

      <MenuOptionGroup title="Country" type="checkbox">
        <MenuItemOption value="email">Email</MenuItemOption>
        <MenuItemOption value="phone">Phone</MenuItemOption>
        <MenuItemOption value="country">Country</MenuItemOption>
      </MenuOptionGroup>
    </MenuList>
  </Menu>
);

WithMenuRadio.argTypes = getThemingArgTypes(theme, "Button");

WithMenuRadio.args = {
  colorScheme: "blue",
  size: "md",
  variant: "solid",
};

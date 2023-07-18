import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  StyleProps,
} from "@chakra-ui/react";
import { useState } from "react";

type Option = { label: string; value: string };

interface SelectProps extends StyleProps {
  allowEmpty?: boolean;
  options: (Option | string)[];
  onChange?: (value: string) => void;
  placeholder?: string;
}

const Select = (props: SelectProps) => {
  const {
    allowEmpty,
    onChange,
    options,
    placeholder = "Select an option",
    ...styles
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (optionValue: string) => () => {
    onChange && onChange(optionValue);
    setValue(optionValue);
  };

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <Menu
      autoSelect={false}
      isOpen={isOpen}
      matchWidth
      onClose={handleMenuClose}
      onOpen={handleMenuOpen}
    >
      <MenuButton {...styles} w="100%">
        <InputGroup>
          <Input
            onBlur={handleMenuClose}
            onFocus={handleMenuOpen}
            placeholder={placeholder}
            readOnly
            w="100%"
            value={value}
          />
          <InputRightElement>
            <IconButton
              aria-label="select-chevron"
              colorScheme="gray"
              icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              size="sm"
              variant="ghost"
            />
          </InputRightElement>
        </InputGroup>
      </MenuButton>

      <MenuList>
        {allowEmpty && (
          <MenuItem onClick={handleChange("")}>
            <em>None</em>
          </MenuItem>
        )}

        {options.map((option) => {
          const optionLabel =
            typeof option === "string" ? option : option.label;

          const optionValue =
            typeof option === "string" ? option : option.value;

          return (
            <MenuItem key={optionValue} onClick={handleChange(optionValue)}>
              {optionLabel}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default Select;

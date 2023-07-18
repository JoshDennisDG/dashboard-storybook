import { chakra } from "@chakra-ui/system";
import * as React from "react";
import {
  Button,
  Card,
  CardBody,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  HStack,
  useEditableControls,
} from "@chakra-ui/react";

const EditableControls = () => {
  const {
    isEditing,
    getEditButtonProps,
    getSubmitButtonProps,
    getCancelButtonProps,
  } = useEditableControls();

  return (
    <HStack mt={2}>
      {!isEditing ? (
        <Button {...getEditButtonProps()} size="sm">
          Edit
        </Button>
      ) : (
        <>
          <Button {...getSubmitButtonProps()} size="sm">
            Save
          </Button>
          <Button colorScheme="gray" {...getCancelButtonProps()} size="sm">
            Cancel
          </Button>
        </>
      )}
    </HStack>
  );
};

export default {
  title: "Components / Forms / Editable",
  decorators: [
    (Story: () => React.ReactNode) => (
      <chakra.div maxW="400px" mt="40px" mx="auto">
        <Story />
      </chakra.div>
    ),
  ],
};

export const Basic = () => (
  <Editable
    textAlign="center"
    defaultValue="Try to edit me"
    fontSize="2xl"
    onSubmit={(val) => window.alert(`Submitted ${val}`)}
  >
    <EditablePreview />
    <EditableInput />
  </Editable>
);

export const TextareaAsInput = () => {
  return (
    <Card>
      <CardBody>
        <Editable
          defaultValue="Hello!!"
          fontSize="lg"
          isPreviewFocusable={false}
          submitOnBlur={false}
          onChange={console.log}
        >
          <EditablePreview />
          <EditableTextarea />
          <EditableControls />
        </Editable>
      </CardBody>
    </Card>
  );
};

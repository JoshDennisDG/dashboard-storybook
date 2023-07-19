import { BrowserRouter } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface StoryProps {
  separator?: string;
}

export default {
  title: "Components / Navigation / Breadcrumb",
};

export const Basic: StoryFn<StoryProps> = (props) => (
  <BrowserRouter>
    <Breadcrumb spacing="4" separator={props.separator || undefined}>
      <BreadcrumbItem>
        <BreadcrumbLink>Breadcrumb 1</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink>Breadcrumb 2</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Breadcrumb 3</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </BrowserRouter>
);

Basic.argTypes = { separator: { type: "string" } };
Basic.args = { separator: "" };

export const WithCustomSeparator = () => (
  <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.300" />}>
    <BreadcrumbItem>
      <BreadcrumbLink>Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink>About</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink>Contact</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

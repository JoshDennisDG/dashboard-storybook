import {
  Card,
  CardBody,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  ThemingProps,
  Tr,
  theme,
} from "@chakra-ui/react";
import { StoryFn } from "@storybook/react";
import { getThemingArgTypes } from "@chakra-ui/storybook-addon";

export default {
  title: "Components / Advanced / Table",
  decorators: [
    (story: () => React.ReactNode) => (
      <Card>
        <CardBody>{story()}</CardBody>
      </Card>
    ),
  ],
};

export const Basic: StoryFn<ThemingProps<"Table">> = (props) => (
  <TableContainer>
    <Table {...props}>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr>
        <Tr>
          <Td>miles</Td>
          <Td>kilometres (km)</Td>
          <Td isNumeric>1.61</Td>
        </Tr>
        <Tr>
          <Td>square inches</Td>
          <Td>sq. millimetres (mm²)</Td>
          <Td isNumeric>645</Td>
        </Tr>
        <Tr>
          <Td>square feet</Td>
          <Td>square metres (m²)</Td>
          <Td isNumeric>0.0929</Td>
        </Tr>
        <Tr>
          <Td>square yards</Td>
          <Td>square metres (m²)</Td>
          <Td isNumeric>0.836</Td>
        </Tr>
        <Tr>
          <Td>acres</Td>
          <Td>hectares</Td>
          <Td isNumeric>2.47</Td>
        </Tr>
        <Tr>
          <Td>cubic inches</Td>
          <Td>millilitres (ml)</Td>
          <Td isNumeric>16.4</Td>
        </Tr>
        <Tr>
          <Td>cubic feet</Td>
          <Td>litres</Td>
          <Td isNumeric>28.3</Td>
        </Tr>
        <Tr>
          <Td>imperial gallons</Td>
          <Td>litres</Td>
          <Td isNumeric>4.55</Td>
        </Tr>
        <Tr>
          <Td>
            <abbr>US</abbr> barrels
          </Td>
          <Td>cubic metres (m³)</Td>
          <Td isNumeric>0.159</Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
);

Basic.argTypes = getThemingArgTypes(theme, "Table");

Basic.args = {
  colorScheme: "gray",
  size: "sm",
  variant: "simple",
};
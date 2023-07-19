/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FaAccessibleIcon, FaCheck, FaPhone } from "react-icons/fa";
import {
  Box,
  List,
  ListIcon,
  ListItem,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export default {
  title: "Components / Typography / List",
};

export const Default = () => (
  <Box mt={6}>
    <UnorderedList spacing={2}>
      <ListItem>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </UnorderedList>
  </Box>
);

export const Ordered = () => (
  <OrderedList>
    <ListItem>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </ListItem>
    <ListItem>
      Assumenda, quia temporibus eveniet a libero incidunt suscipit
    </ListItem>
    <ListItem>
      Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
    </ListItem>
  </OrderedList>
);

export const WithIcons = () => (
  <Box mb={6}>
    <List spacing={3}>
      <ListItem>
        <ListIcon as={FaCheck} color="green.500" />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <>
        <ListItem>
          <ListIcon as={FaPhone} color="green.500" />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
      </>
      <ListItem>
        <ListIcon as={FaAccessibleIcon} color="green.500" />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  </Box>
);

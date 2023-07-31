import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  GridItem,
  Text,
  useBreakpoint,
} from "@chakra-ui/react";
import { loremIpsum } from "lorem-ipsum";

export default {
  title: "Components / UI / Grid",
};

export const Basic = () => {
  const breakpoint = useBreakpoint({ ssr: false });

  return (
    <Box p={4}>
      <Text mb={5}>Current breakpoint: {breakpoint}</Text>

      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        {Array.from(Array(12)).map(() => (
          <GridItem
            colSpan={{
              base: 12,
              sm: 12,
              md: 6,
              lg: 4,
            }}
          >
            <Card h="100%" size="sm" w="100%">
              <CardHeader>
                <Text>My Header</Text>
              </CardHeader>
              <CardBody>{loremIpsum({ count: 5 })}</CardBody>
              <CardFooter>Footer</CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

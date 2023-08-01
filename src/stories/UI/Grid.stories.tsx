import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Text,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import { loremIpsum } from "lorem-ipsum";

export default {
  title: "Components / UI / Grid",
};

export const Basic = () => {
  const breakpoint = useBreakpoint({ ssr: false });

  const cardSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "md",
    xl: "md",
  });

  return (
    <Container p={4} maxW="container.xl">
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
            <Card h="100%" size={cardSize} w="100%">
              <CardHeader>
                <Text>My Header</Text>
              </CardHeader>
              <CardBody>{loremIpsum({ count: 5 })}</CardBody>
              <CardFooter justifyContent="end">
                <ButtonGroup spacing={2}>
                  <Button colorScheme="gray">Cancel</Button>
                  <Button>Click</Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

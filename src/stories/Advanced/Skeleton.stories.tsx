import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  HStack,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { loremIpsum } from "lorem-ipsum";
import { ReactNode, useEffect, useState } from "react";

export default {
  title: "Components / Advanced / Skeleton",
  decorators: [
    (story: () => ReactNode) => (
      <Container maxW="md" mt="40px" mx="auto">
        {story()}
      </Container>
    ),
  ],
};

export const Basic = () => <Skeleton h="20px" />;

export const Example = () => (
  <Card>
    <CardHeader>
      <Flex align="center">
        <SkeletonCircle>
          <Avatar variant="circle" />
        </SkeletonCircle>
        <Box mr={4} />
        <Skeleton w="100%">
          <Heading size="md">This is a title</Heading>
        </Skeleton>
      </Flex>
    </CardHeader>
    <CardBody>
      <SkeletonText />
    </CardBody>
    <CardFooter>
      <HStack ml="auto">
        <Skeleton>
          <Button size="sm">Cancel</Button>
        </Skeleton>
        <Skeleton>
          <Button size="sm">Save</Button>
        </Skeleton>
      </HStack>
    </CardFooter>
  </Card>
);

export const LoadedExample = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setHasLoaded(true), 1000);
  }, []);

  return (
    <Card>
      <CardHeader>
        <Flex align="center">
          <SkeletonCircle isLoaded={hasLoaded}>
            <Avatar size="sm" variant="circle" />
          </SkeletonCircle>
          <Box mr={4} />
          <Skeleton isLoaded={hasLoaded} w="100%">
            <Heading size="md">This is a title</Heading>
          </Skeleton>
        </Flex>
      </CardHeader>
      <CardBody>
        <SkeletonText isLoaded={hasLoaded}>
          {loremIpsum({ count: 2 })}
        </SkeletonText>
      </CardBody>
      <CardFooter>
        <HStack ml="auto">
          <Skeleton isLoaded={hasLoaded}>
            <Button size="sm">Cancel</Button>
          </Skeleton>
          <Skeleton isLoaded={hasLoaded}>
            <Button size="sm">Save</Button>
          </Skeleton>
        </HStack>
      </CardFooter>
    </Card>
  );
};

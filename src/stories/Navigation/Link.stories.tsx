import {
  Card,
  CardBody,
  CardHeader,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

export default {
  title: "Components / Navigation / Link",
};

export const Basic = () => (
  <Stack spacing={5}>
    <Link isExternal href="https://google.com">
      This is an external link
    </Link>

    <Card w="fit-content">
      <CardBody>
        <Text>
          We can also have a <Link>link here</Link>
        </Text>
      </CardBody>
    </Card>
  </Stack>
);

export const WithLinkOverlay = () => (
  <LinkBox as={Card} w="fit-content">
    <CardHeader>
      <LinkOverlay isExternal href="https://google.com">
        Some blog post
      </LinkOverlay>
    </CardHeader>
    <CardBody>
      <Text>
        This whole card is a link, but the header is the actual link element!
      </Text>
    </CardBody>
  </LinkBox>
);

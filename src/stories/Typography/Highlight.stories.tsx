import { Card, CardBody, Highlight, Text } from "@chakra-ui/react";

export default {
  title: "Components / Typography / Highlight",
};

export const Basic = () => (
  <Card>
    <CardBody>
      <Text>
        <Highlight
          query={["spotlight", "emphasize", "accentuate", "instantly"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
        >
          With the Highlight component, you can spotlight, emphasize and
          accentuate words instantly
        </Highlight>
      </Text>
    </CardBody>
  </Card>
);

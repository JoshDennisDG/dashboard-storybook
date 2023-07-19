import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

export default {
  title: "Components / Advanced / Stat",
};

export const Basic = () => (
  <StatGroup>
    <Stat>
      <StatLabel>Sent</StatLabel>
      <StatNumber>345,670</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />
        23.36%
      </StatHelpText>
    </Stat>

    <Stat>
      <StatLabel>Clicked</StatLabel>
      <StatNumber>45</StatNumber>
      <StatHelpText>
        <StatArrow type="decrease" />
        9.05%
      </StatHelpText>
    </Stat>
  </StatGroup>
);

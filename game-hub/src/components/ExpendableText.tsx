import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children: string;
}
const ExpendableText = ({ children }: Props) => {
  const [expanded, setexpanded] = useState(false);
  const limit = 300;
  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}{" "}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
        onClick={() => setexpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpendableText;

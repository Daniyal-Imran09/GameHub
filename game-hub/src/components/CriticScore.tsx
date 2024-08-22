import React from "react";
import { Games } from "../Hooks/UseGame";
import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"14px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;

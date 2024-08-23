import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  game: GameQuery;
}
const GameHeading = ({ game }: Props) => {
  const heading = `${game.platform?.name || ""} ${
    game.genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} marginBottom={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;

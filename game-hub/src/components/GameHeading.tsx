import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import UseGenre from "../Hooks/UseGenre";
import usePlatform from "../Hooks/UsePlatform";
import usePlatforms from "../Hooks/usePlatforms";
import useGenres from "../Hooks/useGenres";

interface Props {
  game: GameQuery;
}
const GameHeading = ({ game }: Props) => {
  const genre = useGenres(game.genreId);
  const platform = usePlatforms(game.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginBottom={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;

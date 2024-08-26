import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import UseGenre from "../Hooks/UseGenre";
import usePlatform from "../Hooks/UsePlatform";

interface Props {
  game: GameQuery;
}
const GameHeading = ({ game }: Props) => {
  const { data: genres } = UseGenre();
  const genre = genres.results.find((g) => g.id === game.genreId);
  const { data: platform } = usePlatform();
  const platforms = platform?.results.find((p) => p.id === game.platformId);
  const heading = `${platforms?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginBottom={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;

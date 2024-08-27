import { Heading } from "@chakra-ui/react";
import React from "react";
import UseGenre from "../Hooks/UseGenre";
import usePlatform from "../Hooks/UsePlatform";
import usePlatforms from "../Hooks/usePlatforms";
import useGenres from "../Hooks/useGenres";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreid = useGameQueryStore((s) => s.game.genreId);
  const platformid = useGameQueryStore((s) => s.game.platformId);
  const genre = useGenres(genreid);
  const platform = usePlatforms(platformid);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as={"h1"} marginBottom={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;

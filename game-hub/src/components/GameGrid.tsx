import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGame, { Platform } from "../Hooks/UseGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/UseGenre";
import { GameQuery } from "../App";

interface Props {
  game: GameQuery;
}
const GameGrid = ({ game }: Props) => {
  const { gameslist, Error, isloading } = UseGame(game);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {Error && <Text>{Error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={4}
      >
        {isloading &&
          skeletons.map((skeleton) => (
            // <GameCardSkeleton key={skeleton} />
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {gameslist.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

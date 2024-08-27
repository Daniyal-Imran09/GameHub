import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import UseGame from "../Hooks/UseGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../entities/Genre";

import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../store";

const GameGrid = () => {
  const game = useGameQueryStore((S) => S.game);
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = UseGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const fetchedgames =
    data?.pages.reduce(
      (total, page) => (total = total + page.results.length),
      0
    ) || 0;

  if (error) return <Text>{error.message}</Text>;
  return (
    <Box padding={"10px"}>
      <InfiniteScroll
        dataLength={fetchedgames}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {isLoading &&
            skeletons.map((skeleton) => (
              // <GameCardSkeleton key={skeleton} />
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((g) => (
                <GameCardContainer key={g.id}>
                  <GameCard game={g} />
                </GameCardContainer>
              ))}
              {/* {page?.results.map((game)=>{
              <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          })} */}
            </React.Fragment>
          ))}
          {/* {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))} */}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;

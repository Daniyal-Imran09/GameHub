import React from "react";
import { useParams } from "react-router-dom";
import useGames from "../Hooks/useGames";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpendableText from "./ExpendableText";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";
import GameAttributes from "./GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGames(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpendableText>{game.description_raw}</ExpendableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;

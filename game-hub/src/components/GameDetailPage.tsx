import React from "react";
import { useParams } from "react-router-dom";
import useGames from "../Hooks/useGames";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpendableText from "./ExpendableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGames(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpendableText>{game.description_raw}</ExpendableText>
    </>
  );
};

export default GameDetailPage;

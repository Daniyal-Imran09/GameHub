import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import UseGame from "../Hooks/UseGame";

const GameGrid = () => {
  const { gameslist, Error } = UseGame();

  return (
    <>
      {Error && <Text>{Error}</Text>}
      <ul>
        {gameslist.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

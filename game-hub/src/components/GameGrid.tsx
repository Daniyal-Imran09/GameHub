import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Games {
  id: number;
  name: string;
}

interface Fetchgames {
  count: number;
  results: Games[];
}
const GameGrid = () => {
  const [gameslist, setgameslist] = useState<Games[]>([]);
  const [Error, SetError] = useState("");
  useEffect(() => {
    apiClient
      .get<Fetchgames>("/games")
      .then((res) => setgameslist(res.data.results))
      .catch((err) => {
        SetError(err.message);
      });
  }, []);

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

import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./UseGenre";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface Fetchgames {
  count: number;
  results: Games[];
}

const UseGame = (game: GameQuery) => {
  const [gameslist, setgameslist] = useState<Games[]>([]);
  const [Error, SetError] = useState("");
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setisloading(true);
    apiClient
      .get<Fetchgames>("/games", {
        signal: controller.signal,
        params: {
          genres: game.genre?.id,
          platforms: game.platform?.id,
          ordering: game.selectedorder,
        },
      })
      .then((res) => {
        setgameslist(res.data.results);
        setisloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        SetError(err.message);
        setisloading(false);
      });

    return () => controller.abort();
  }, [game]);

  return { gameslist, Error, isloading };
};

export default UseGame;

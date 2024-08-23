import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./UseGenre";

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

const UseGame = (
  selectedgenre: Genre | null,
  selectedplatform: Platform | null
) => {
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
          genres: selectedgenre?.id,
          platforms: selectedplatform?.id,
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
  }, [selectedgenre?.id, selectedplatform?.id]);

  return { gameslist, Error, isloading };
};

export default UseGame;

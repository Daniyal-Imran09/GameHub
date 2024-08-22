import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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
}

interface Fetchgames {
  count: number;
  results: Games[];
}

const UseGame = () => {
  const [gameslist, setgameslist] = useState<Games[]>([]);
  const [Error, SetError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Fetchgames>("/games", { signal: controller.signal })
      .then((res) => setgameslist(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        SetError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { gameslist, Error };
};

export default UseGame;

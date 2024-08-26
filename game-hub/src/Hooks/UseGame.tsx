import React, { useEffect, useState } from "react";
import ApiClient, { FetchDataResponse } from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./UseGenre";
import { GameQuery } from "../App";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Platform } from "./UsePlatform";
import ms from "ms";

const apiclient = new ApiClient<Games>("/games");
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = (game: GameQuery) =>
  useInfiniteQuery<FetchDataResponse<Games>, Error>({
    queryKey: ["games", game],
    queryFn: ({ pageParam = 1 }) =>
      apiclient.getAll({
        params: {
          genres: game.genreId,
          parent_platforms: game.platformId,
          ordering: game.selectedorder,
          search: game.searchtext,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastpage, allpages) => {
      return lastpage.next ? allpages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });

export default useGame;

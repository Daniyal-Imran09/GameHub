import React, { useEffect, useState } from "react";
import ApiClient, { FetchDataResponse } from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "../entities/Genre";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../store";
import { Games } from "../entities/Games";

const apiclient = new ApiClient<Games>("/games");
const useGame = () => {
  const game = useGameQueryStore((S) => S.game);
  return useInfiniteQuery<FetchDataResponse<Games>, Error>({
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
};

export default useGame;

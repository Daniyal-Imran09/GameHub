import { useEffect, useState } from "react";
import apiClient, { FetchDataResponse } from "../services/api-client";
import { CanceledError } from "axios";
import { GameQuery } from "../App";
import Platforms from "../data/Platforms";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: Platforms.length, results: Platforms },
  });
export default usePlatform;

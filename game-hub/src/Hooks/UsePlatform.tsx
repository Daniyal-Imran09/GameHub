import { useEffect, useState } from "react";
import ApiClient, { FetchDataResponse } from "../services/api-client";
import { CanceledError } from "axios";
import { GameQuery } from "../App";
import Platforms from "../data/Platforms";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiclient = new ApiClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery<FetchDataResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiclient.getAll,
    staleTime: ms("24h"),
    initialData: { count: Platforms.length, results: Platforms },
  });
export default usePlatform;

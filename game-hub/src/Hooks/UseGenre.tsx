import { useEffect, useState } from "react";
import apiClient, { FetchDataResponse } from "../services/api-client";
import axios, { CanceledError } from "axios";

import genres from "../data/Genre";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const UseGenre = () =>
  useQuery({
    queryKey: ["Genres"],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Genre>>("/genres")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default UseGenre;

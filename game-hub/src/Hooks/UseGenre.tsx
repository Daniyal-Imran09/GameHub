import { useEffect, useState } from "react";
import ApiClient, { FetchDataResponse } from "../services/api-client";
import axios, { CanceledError } from "axios";
import genres from "../data/Genre";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiclient = new ApiClient<Genre>("/genres");
const UseGenre = () =>
  useQuery<FetchDataResponse<Genre>, Error>({
    queryKey: ["Genres"],
    queryFn: apiclient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default UseGenre;

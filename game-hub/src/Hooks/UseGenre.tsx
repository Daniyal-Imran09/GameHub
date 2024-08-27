import { useEffect, useState } from "react";
import ApiClient, { FetchDataResponse } from "../services/api-client";
import axios, { CanceledError } from "axios";
import genres from "../data/Genre";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiclient = new ApiClient<Genre>("/genres");
const UseGenre = () =>
  useQuery<FetchDataResponse<Genre>, Error>({
    queryKey: ["Genres"],
    queryFn: apiclient.getAll,
    staleTime: ms("24h"), //24h
    initialData: { count: genres.length, results: genres },
  });

export default UseGenre;

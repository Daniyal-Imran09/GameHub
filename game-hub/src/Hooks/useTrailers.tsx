import { useQueries, useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import Trailer from "../entities/Trailer";
import ms from "ms";

const useTrailers = (gameid: number) => {
  const apiclient = new ApiClient<Trailer>(`/games/${gameid}/movies`);

  return useQuery({
    queryKey: ["Trailers", gameid],
    queryFn: apiclient.getAll,
  });
};

export default useTrailers;

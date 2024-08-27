import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Games } from "../entities/Games";

const apiclient = new ApiClient<Games>("/games");
const useGames = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiclient.get(slug),
  });
export default useGames;

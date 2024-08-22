import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const UseGenre = () => {
  const [Genres, setGenres] = useState<Genre[]>([]);

  const [Error, SetError] = useState("");
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setisloading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setisloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        SetError(err.message);
        setisloading(false);
      });

    return () => controller.abort();
  }, []);

  return { Genres, Error, isloading };
};

export default UseGenre;

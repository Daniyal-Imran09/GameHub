import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchPlatform {
  count: number;
  results: Platform[];
}

const usePlatform = () => {
  const [Platform, setPlatform] = useState<Platform[]>([]);

  const [Error, SetError] = useState("");
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setisloading(true);
    apiClient
      .get<FetchPlatform>("/platforms/lists/parents", {
        signal: controller.signal,
      })
      .then((res) => {
        setPlatform(res.data.results);
        setisloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        SetError(err.message);
        setisloading(false);
      });

    return () => controller.abort();
  }, []);

  return { Platform, Error, isloading };
};

export default usePlatform;

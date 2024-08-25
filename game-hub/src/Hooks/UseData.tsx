import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchDataResponse<T> {
  count: number;
  results: T[];
}
const UseData = <T,>(
  endpoint: string,
  requestconfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [Data, setData] = useState<T[]>([]);

  const [Error, SetError] = useState("");
  const [isloading, setisloading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setisloading(true);
      apiClient
        .get<FetchDataResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestconfig,
        })
        .then((res) => {
          setData(res.data.results);
          setisloading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          SetError(err.message);
          setisloading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { Data, Error, isloading };
};

export default UseData;

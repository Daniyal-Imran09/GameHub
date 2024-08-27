import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
    count: number;
    next?: string | null,
    results: T[];
  } 

const axiosInstance = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"40ef4c8c573c4e268f87c576e6d3ae6f"
    }
})


class ApiClient<T>{
    endpoint: string

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) =>{
           return axiosInstance.get<FetchDataResponse<T>>(this.endpoint , config).then(res => res.data)
    }

    get = (id: number | string) =>{
        return axiosInstance.get<T>(this.endpoint + '/'+ id).then(res => res.data)
    }

}

export default ApiClient
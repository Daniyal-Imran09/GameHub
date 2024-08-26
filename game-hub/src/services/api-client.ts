import axios from "axios";

export interface FetchDataResponse<T> {
    count: number;
    results: T[];
  } 
  
export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"40ef4c8c573c4e268f87c576e6d3ae6f"
    }
})
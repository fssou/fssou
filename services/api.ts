// api.ts


import {Axios,} from "axios";

export default class ApiService {
    private baseURL: string;

    constructor(baseURL: string,) {
        this.baseURL = baseURL;
    }

    public async get<R>(path: string,): Promise<R> {
        const axios = new Axios({
            baseURL: this.baseURL,
        },);
        const response = axios.get(path,{
            method: "GET",
        },);
        return response.then((res,) => JSON.parse(res.data,),);
    }
}

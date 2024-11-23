import type {TwitterUserData,} from "~/services/types";
import ApiService from "~/services/api";

export default class XService {

    private baseURL: string;
    private api: ApiService;

    constructor(
        baseURL: string,
    ) {
        this.baseURL = baseURL
        this.api = new ApiService(baseURL,)
    }

    public async getUsersMe(): Promise<TwitterUserData> {
        const response: Promise<TwitterUserData> = this.api.get<TwitterUserData>("/",)
        return response
    }
}

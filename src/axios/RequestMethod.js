import axios from "axios"

const BASE_URL = "https://fabiramovie-api.up.railway.app"

export const privateRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,

})
import Axios from "axios";
import { parseCookies } from "nookies";
import { env } from "./env";

const { "taskmanagement.token": token } = parseCookies();

export const axios = Axios.create({
    baseURL: env.VITE_BASE_URL + "/api", // Replace with your API endpoint
    headers: {
        "Authorization": `Bearer ${token}` // Replace with your API token
    },
    //withCredentials: true, // Enable sending cookies
    timeout: 5000, // 5 seconds timeout
    validateStatus: status => status >= 200 && status <= 299 // Check if status code is within 200-299 range
});
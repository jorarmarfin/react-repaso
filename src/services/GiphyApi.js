import axios from "axios";
import {getEnvironments} from "../helpers/getEnvironments.js";


const { VITE_GIPHY_API_URL } = getEnvironments();

export const GiphyApi = axios.create({
    baseURL: VITE_GIPHY_API_URL
});


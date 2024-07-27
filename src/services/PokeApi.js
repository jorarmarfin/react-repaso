import axios from "axios";
import {getEnvironments} from "../helpers/getEnvironments.js";

const { VITE_POKEMON_API_URL } = getEnvironments();

export const PokeApi = axios.create({
    baseURL: VITE_POKEMON_API_URL
});

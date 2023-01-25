import axios from "axios";
let BASE_URL = "https://api.github.com/users/mukhriddin-dev";


export const API = {
    github: async () => await axios.get(BASE_URL),
    gitrep: async() => await axios.get(`${BASE_URL}/repos`),
    gitfolwer: async() => await axios.get(`${BASE_URL}/followers`),
    gitfoling: async() => await axios.get(`${BASE_URL}/following`),

 }




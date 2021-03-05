import axios from 'axios';

export const api = axios.create({
    baseURL: `${process.env.baseURL}/api/`,
    headers: {
        "Content-Type": "application/json",     
    }
});
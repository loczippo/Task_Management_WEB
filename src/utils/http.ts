import axios, { AxiosInstance } from 'axios';
class Http {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            timeout: 20000, //20000ms = 20s
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
}

const http = new Http().instance
export default http;
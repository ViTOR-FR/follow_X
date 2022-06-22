import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.followx.com.br',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export default api;
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://34.133.131.81',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export default api;
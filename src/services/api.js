import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://localhost:3306'
})

export default api;
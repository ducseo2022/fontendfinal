import axios from "axios";
import  queryString     from "query-string"

const axiosClient = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        'content-type': 'application/json',
    },
   paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
    
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response;
    }
    return response;
}, (error) => {
    // Handle errors
    throw error;
});

export default axiosClient;
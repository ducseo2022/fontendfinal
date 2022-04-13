import axios from "axios";
import  queryString     from "query-string"

const axiosClient = axios.create({
    baseURL: "https://1645-2001-ee0-79d6-7060-41cf-e205-6c83-aa8a.ngrok.io",
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
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_UEL,
    headers: {
        "Content-Type": "application/json",
    }
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        throw error;
    }
);export default axiosInstance;

import axios from 'axios';
import { app } from '../config/app';

const connect = (authState = null) => {
    const config = {
        baseURL: app.apiBaseUrl,
        timeout: 5000,
        headers: {
            common: {'Authorization': `${authState?.token_type} ${authState?.access_token}`}
        }
    }
    const axiosInstance = axios.create(
        config
    );
    return axiosInstance;
}

export {connect};
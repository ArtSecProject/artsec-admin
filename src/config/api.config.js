import axios from "axios";
import CryptoJS from 'crypto-js'
import Cookies from 'js-cookie';

// import store from '../store'
// const state = store.getState();

// const access_token = state.auth.access_token;



const encrypted_token = Cookies.get('access_token') && CryptoJS.AES.decrypt(Cookies.get('access_token'), process.env.REACT_APP_KEY);
const TOKEN = encrypted_token && encrypted_token.toString(CryptoJS.enc.Utf8);
const BASE_URL = 'https://artsec-service-cjfd8.ondigitalocean.app/api';


export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `Bearer ${TOKEN}`, "Content-type": "application/json"
    },
});



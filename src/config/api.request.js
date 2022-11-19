import { connect } from "formik";
import { publicRequest, userRequest } from "./api.config"


export const publicEnpoints = {

    async regUser(credentials) {
        try {
            const { data } = await publicRequest.post('/auth/register_profile', credentials)
            return data;
        } catch (err) {
            return { err: err.response.data }
        }
    },


    async verify_account(credentials) {
        try {
            const { data } = await publicRequest.post('/auth/verify-account', credentials)
            return data;
        } catch (err) {
            return { err: err.response.data }
        }
    },
    async complete_register(credentials) {
        try {
            const { data } = await publicRequest.post('/auth/completeRegister', credentials)
            return data;
        } catch (err) {
            return { err: err.response.data }
        }
    },
    async forgot_password(credentials) {
        try {
            const { data } = await publicRequest.post('/auth/forgot_password', credentials)
            return data;
        } catch (err) {
            return { err: err.response.data }
        }
    },







}



export const privateEndpoints = {
    async getProducts(access_token) {
        try {
            const { data } = await connect(access_token, 'GET' , '/v1/get_products');
            return data;
        } catch (err) {
            return { err: err.response.data }
        }
    }
};
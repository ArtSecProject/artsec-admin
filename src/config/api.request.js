import axios from "axios";
import { connect } from "formik";
import { toast } from "react-toastify";
import { publicRequest } from "./api.config"


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

export const handleLike = async(product_id , user , access_token , baseUrl) => {
    try {
        const config = {
            headers: {
                "Authorization": `Bearer ${access_token}`, "Content-type": "application/json"
            },
        };
        const { data } = await axios.post(`${baseUrl}/add_favourites`, {
           product_id : product_id.toString(),
           user_id : user.id.toString()
           
        } , config);
        console.log(data);

        toast.success(data.message , {
            position: "top-right",
        })

    } catch (err) {
        toast.error(err.message, {
            position: "top-right",
        });
    }
    
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
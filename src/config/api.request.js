import axios from "axios";
import { toast } from "react-toastify";
import store from '../store';
import { app } from "./app";
const state = store.getState();

const access_token = state.auth.access_token;
const user = state.auth.user;
const baseUrl = app.apiBaseUrl;

const publicRequest = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    }
});
const userRequest = axios.create({
    baseURL: baseUrl,
    headers: {
        "Authorization": `Bearer ${access_token}`, "Content-type": "application/json"
    },
});



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

    async fetchProducts(setProducts) {

        try {
            const config = {
                headers: {
                    "Authorization": `Bearer ${access_token}`, "Content-type": "application/json"
                },
            };
            const { data } = await axios.get(`${baseUrl}/get_products`, config);
            setProducts(data.data.data);

        } catch (err) {
            toast.error(err.message, {
                position: "top-right",
            });
        }

    },

    async handleLike(product_id, setProducts, products) {

        const controller = new AbortController();
        try {
            const { data } = await userRequest.post(`${baseUrl}/add_favourites`, {
                product_id: product_id.toString(),
                user_id: user.id.toString()

            }, { signal: controller.signal });

            products.map((product, i) => {
                if (product.id == product_id && data) {
                    if (product.favourite) {
                        product.favourite = null;
                        product.favourite_all.filter(f => f.user_id != user.id)
                    } else {
                        product.favourite = {
                            id: data.data.id,
                            user_id: data.data.product_id,
                            product_id: data.data.product_id
                        }
                        product.favourite_all = [...product.favourite_all, product.favourite]
                    }
                }
            })



            setProducts([...products]);


            controller.abort()

            toast.success(data.message, {
                position: "top-right",
            })
        }

        catch (err) {
            toast.error(err.message, {
                position: "top-right",
            });
        }


    },
    async placeBid(setIsLoading, setBidSuccess, payload) {
        setIsLoading(true);

        if (payload.amount === '') {
            toast.warn('Amount field is required', {
                position: "top-right",
            });
            return;
        }
        if (payload.expDate === '') {
            toast.warn('Amount field is required', {
                position: "top-right",
            });
            return;
        }

        if (payload.status === 'SPLIT' && payload.share === "") {
            toast.warn('Share field is required', {
                position: "top-right",
            });
            return;
        }

        try {
            const { data } = await userRequest.post('/add_bid', payload);
            setIsLoading(false);
            setBidSuccess(true);
            console.log(data);
        } catch (err) {
            toast.error(err.message, {
                position: "top-right",
            });
            setIsLoading(false);
        }

    },

    async getProduct(setProduct , id) {
        try {
            const { data } = await userRequest.post('/get_by_id_product', { id: id });

            console.log(data)

            setProduct(data.data);
        } catch (err) {

        }
    }

};
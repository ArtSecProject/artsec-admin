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

}



export const privateEndpoints = {
    async getProducts() {
        try {
            const { data } = await userRequest.get('/v1/get_products')
            return data;
        } catch (err) {
            return { err: err.response.data }
        }
    }
};

import { connect } from "../../api/connect";
import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;

// register user
const signup = async (userData) => {
    const response = await connect.post(API_URL + 'signup', userData)
    
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
};


const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
};


// logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authApi = {
    signup,
    logout,
    login,
}

export default authApi


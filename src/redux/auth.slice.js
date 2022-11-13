import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { publicRequest } from '../config/api.config';
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js';



export const fetchAuthUser = createAsyncThunk('/auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const { data } = await publicRequest.post('/auth/login', credentials)

        return data;
    } catch (err) {
        return rejectWithValue(err.response.data)
    }

})

const encrypted_token = Cookies.get('access_token') && CryptoJS.AES.decrypt(Cookies.get('access_token'), process.env.REACT_APP_KEY);

const initialState = {
    loading: false,
    user: JSON.parse(localStorage.getItem('user')),
    access_token: Cookies.get('access_token') ? encrypted_token.toString(CryptoJS.enc.Utf8) : '',
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('user');
            state.user = null;
            Cookies.remove('access_token');
            state.access_token = '';
        }
    },
    extraReducers: {
        [fetchAuthUser.pending]: (state) => {
            state.loading = true;
        },
        [fetchAuthUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.data.user;
            state.access_token = action.payload.data.access_token;
            Cookies.set('access_token', CryptoJS.AES.encrypt(state.access_token, process.env.REACT_APP_KEY).toString());
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        [fetchAuthUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }

})


export default authSlice.reducer

export const { logout } = authSlice.actions
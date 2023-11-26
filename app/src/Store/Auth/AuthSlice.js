// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false,
        loading: false,
        error: null,
    },
    reducers: {
        // Login reducers
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },

        // Register reducers
        registerStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state, action) => {
            state.userData = action.payload.data;
            state.email = action.payload.email;
            state.loading = false;
            state.error = null;
        },
        registerFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        //Verify Email
        verifyEmailStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        verifyEmailSuccess: (state, action) => {
            state.loading = false;
            state.userData = action.payload.data;
            state.email = action.payload.email;
        },
        verifyEmailFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    logout,
    verifyEmailStart,
    verifyEmailSuccess,
    verifyEmailFailure,
} = authSlice.actions;

export default authSlice.reducer;

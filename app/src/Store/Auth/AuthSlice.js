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

        //Logout  reducers
        logoutUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        logoutUserSuccess: (state) => {
            state.loading = false;
            state.isLoggedIn = false;
            state.user = null;
        },
        logoutUserFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
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
        verifyEmailSuccess: (state) => {
            state.loading = false;
            state.error = null;
        },
        verifyEmailFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Otp send

        otpSendStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        otpSendSuccess: (state,action) => {
            state.userData = action.payload.data;
            state.email = action.payload.email;
            state.loading = false;
            state.error = null;
        },
        otpSendFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        // Reset Password
        resetPasswordStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        resetPasswordSuccess: (state) => {
            state.loading = false;
            state.error = null;
        },
        resetPasswordFailure: (state, action) => {
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
    logoutUserStart,
    logoutUserSuccess,
    logoutUserFailure,
    verifyEmailStart,
    verifyEmailSuccess,
    verifyEmailFailure,
    otpSendStart,
    otpSendSuccess,
    otpSendFailure,
    resetPasswordStart,
    resetPasswordSuccess,
    resetPasswordFailure
} = authSlice.actions;

export default authSlice.reducer;

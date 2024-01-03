// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            firstName:null,
            lastName:null,
            email:null,
            phoneNumbers:null,
            userRole:null,
        },
        accessToken:null,
        refreshToken:null,
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
            state.user.firstName = action.payload.result.user.firstName;
            state.user.lastName = action.payload.result.user.lastName;
            state.user.email = action.payload.result.user.email;
            state.user.phoneNumbers = action.payload.result.user.phoneNumbers;
            state.user.userRole = action.payload.result.user.userRole;

            console.log (action.payload.result);
            if (action.payload.rememberMe) {
                state.accessToken=action.payload.result.token;
                state.refreshToken=action.payload.result.refreshToken;
            } else {
                sessionStorage.setItem("authToken", action.payload.result.token);
                sessionStorage.setItem("refreshToken", action.payload.result.refreshToken);
            }
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
            console.log ("auth slice logout olunur");

            state.loading = false;
            state.isLoggedIn = false;
            state.user.firstName = null;
            state.user.lastName = null;
            state.user.email = null;
            state.user.phoneNumbers = null;
            state.user.userRole = null;

            state.accessToken=null;
            state.refreshToken=null;
            localStorage.removeItem("authToken");
            sessionStorage.removeItem("authToken");
            sessionStorage.removeItem("refreshToken");
            console.log ("auth slice logout olundu");
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


        deleteAccountStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        deleteAccountSuccess: (state,action) => {
            state.loading = false;
            state.isLoggedIn = false;
            state.user.firstName = null;
            state.user.lastName = null;
            state.user.email = null;
            state.user.phoneNumbers = null;
            state.user.userRole = null;

            state.accessToken=null;
            state.refreshToken=null;
            localStorage.removeItem("authToken");
            sessionStorage.removeItem("authToken");
            sessionStorage.removeItem("refreshToken");

        },
        deleteAccountFailure: (state,action) => {
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
    resetPasswordFailure,
    deleteAccountFailure,
    deleteAccountStart,
    deleteAccountSuccess
} = authSlice.actions;

export default authSlice.reducer;

import {
    loginStart,
    loginSuccess,
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    verifyEmailStart,
    verifyEmailSuccess,
    verifyEmailFailure,
    logoutUserStart,
    logoutUserFailure,
    logoutUserSuccess,
    otpSendStart,
    otpSendFailure,
    otpSendSuccess, resetPasswordSuccess, resetPasswordFailure, resetPasswordStart,
} from './AuthSlice';
import authService from '../../api-services/AuthService';
import otpService from '../../api-services/OtpService';
import {useSelector} from "react-redux";

const AuthService = new authService ();
const OtpService = new otpService ();

export const loginUser = (credentials, rememberMe) => async (dispatch) => {
    dispatch (loginStart ());
    try {
        const response = await AuthService.Login (credentials);

        if (response.status === 200) {
            const responseData = await response.json ();
            dispatch (loginSuccess ({
                result: {
                    user: responseData,
                    token: responseData.token,
                    refreshToken: responseData.refreshToken
                }, rememberMe: rememberMe
            }));
            return responseData;
        } else if (response.status === 401) {
            dispatch (loginFailure ('Email or password is invalid'));
            return {status: 401}
        } else {
            dispatch (loginFailure ('An error occurred while processing your request'));
        }

        return null;
    } catch (error) {
        dispatch (loginFailure ('An error occurred while processing your request'));
        throw error;
    }
};

export const registerUser = (userData) => async (dispatch) => {
    dispatch (registerStart ());
    try {
        console.log (userData);
        const response = await AuthService.Register (userData);

        if (response.status === 200) {
            console.log ('SUCCESSFUL REGISTRATION');
            const email = userData.email;
            dispatch (registerSuccess ({data: response.data, email}));
            await OtpService.SendOTP (email);
            console.log (email);
            return response;
        } else {
            dispatch (registerFailure ('Registration failed'));
        }
    } catch (error) {
        dispatch (registerFailure ('An error occurred while processing your request'));
    }
};

export const verifyEmail = (userData) => async (dispatch) => {
    dispatch (verifyEmailStart ());
    try {
        const response = await OtpService.VerifyOTP (userData);

        if (response.status === 200) {
            dispatch (verifyEmailSuccess ());
            console.log ('SUCCESSFUL EMAIL VERIFICATION');
            return response;
        } else {
            dispatch (verifyEmailFailure ('Email verification failed'));
        }
    } catch (error) {
        dispatch (verifyEmailFailure ('An error occurred while processing your request'));
    }
};

export const logoutUser = (token) => async (dispatch) => {
    dispatch (logoutUserStart ());
    try {
        if (!token) {
            return null
        }

        const response = await AuthService.Logout (token);

        if (response.status === 204) {
            dispatch (logoutUserSuccess ())
            console.log ('SUCCESSFUL Logout');
            return response;
        } else {
            dispatch (logoutUserFailure ('Logout failed'));
        }
        dispatch (logoutUserSuccess ());


    } catch (error) {
        dispatch (logoutUserFailure ('An error occurred while processing your request'));
    }
};

export const sendOtp = (email) => async (dispatch) => {
    dispatch (otpSendStart ());
    try {
        const response = await OtpService.SendOTP (email);

        if (response.status === 200) {
            dispatch (otpSendSuccess ({data: response.data, email}));
            console.log ('SUCCESSFUL OTP SENT');
            return response;
        } else {
            dispatch (otpSendFailure ('Email verification failed'));
        }
    } catch (error) {
        dispatch (otpSendFailure ('An error occurred while processing your request'));
    }
};

export const resetPassword = (requestBody) => async (dispatch) => {
    dispatch (resetPasswordStart ());
    try {
        const response = await AuthService.ResetPassword (requestBody);

        if (response.status === 200) {
            dispatch (resetPasswordSuccess ());
            console.log ('SUCCESSFUL RESET PASSWORD');
            return response;
        } else {
            dispatch (resetPasswordFailure ('Email verification failed'));
        }
    } catch (error) {
        dispatch (resetPasswordFailure ('An error occurred while processing your request'));
    }
};



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
} from './AuthSlice';
import authService from '../../api-services/AuthService';
import otpService from '../../api-services/OtpService';

const AuthService = new authService();
const OtpService = new otpService();

export const loginUser = (credentials) => async (dispatch) => {
    dispatch(loginStart());
    try {
        const response = await AuthService.Login(credentials);


        if (response.status===200) {
            console.log("SUCCESFULL LOGIN");
            dispatch(loginSuccess(response.data));
            return response;
        } else {
            dispatch(loginFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(loginFailure('An error occurred while processing your request'));
    }
};


export const registerUser = (userData) => async (dispatch) => {
    dispatch(registerStart());
    try {
        const response = await AuthService.Register(userData);

        if (response.status === 200) {
            console.log('SUCCESSFUL REGISTRATION');
            const email=userData.email;
            dispatch(registerSuccess({ data: response.data, email }));
            await OtpService.SendOTP(email);
            console.log(email);
            return response;
        } else {
            dispatch(registerFailure('Registration failed'));
        }
    } catch (error) {
        dispatch(registerFailure('An error occurred while processing your request'));
    }
};

export const verifyEmail = (userData) => async (dispatch) => {
    dispatch(verifyEmailStart());
    try {
        const response = await OtpService.VerifyOTP(userData);

        if (response.status === 200) {
            dispatch(verifyEmailSuccess());
            console.log('SUCCESSFUL EMAIL VERIFICATION');
            return response;
        } else {
            dispatch(verifyEmailFailure('Email verification failed'));
        }
    } catch (error) {
        dispatch(verifyEmailFailure('An error occurred while processing your request'));
    }
};

export const logoutUser = () => async (dispatch) => {
    dispatch(logoutUserStart());
    try {
        const response = await AuthService.Logout();

        if (response.status === 200) {
            dispatch(logoutUserSuccess())
            console.log('SUCCESSFUL Logout');
            return response;
        } else {
            dispatch(logoutUserFailure('Logout failed'));
        }
    } catch (error) {
        dispatch(logoutUserFailure('An error occurred while processing your request'));
    }
};
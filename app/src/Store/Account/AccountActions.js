import {
  changePasswordStart,
    changePasswordSuccess,
    changePasswordFailure
} from './AccountSlice';

import authService from '../../api-services/AuthService';
import otpService from '../../api-services/OtpService';

const AuthService = new authService();
const OtpService = new otpService();


export const changePassword = (requestBody) => async (dispatch) => {
    dispatch(changePasswordStart());
    try {
        const response = await AuthService.ChangePassword(requestBody);

        console.log (response);
        if (response.status === 200) {
            console.log('SUCCESSFUL CHANGE PASSWORD');
            dispatch(changePasswordSuccess());
            return response;
        } else {
            dispatch(changePasswordFailure('Change Password failed'));
        }
    } catch (error) {
        dispatch(changePasswordFailure('An error occurred while processing your request'));
    }
};




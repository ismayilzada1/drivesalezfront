import {
    topUpBalanceSuccess,
    topUpBalanceFailure,
    topUpBalanceStart
} from './PaymentSlice';

import paymentService from '../../api-services/PaymentService';

const PaymentService = new paymentService();


export const TopUpBalance = (requestBody) => async (dispatch) => {
    dispatch(topUpBalanceStart());
    try {
        const token =
            localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

        if(!token){return null}

        const response = await PaymentService.TopUpBalance(requestBody,token);

        console.log (response);
        if (response.status === 200) {
            console.log('SUCCESSFUL CHANGE PASSWORD');
            dispatch(topUpBalanceSuccess());
            return response;
        } else {
            dispatch(topUpBalanceFailure('Top Up Balance failed'));
        }
    } catch (error) {
        dispatch(topUpBalanceFailure('An error occurred while processing your request'));
    }
};


export const AddAnnouncementLimit = (subId,count) => async (dispatch) => {
    dispatch(topUpBalanceStart());
    try {

        const token =
            localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

        if(!token){return null}

        const response = await PaymentService.AddAnnouncementLimit(subId,count,token);

        console.log (response);
        if (response.status === 200) {
            console.log('SUCCESSFUL CHANGE PASSWORD');
            dispatch(topUpBalanceSuccess());
            return response;
        } else {
            dispatch(topUpBalanceFailure('Top Up Balance failed'));
        }
    } catch (error) {
        dispatch(topUpBalanceFailure('An error occurred while processing your request'));
    }
};



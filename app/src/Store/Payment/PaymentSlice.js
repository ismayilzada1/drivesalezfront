import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
    name: 'UserPayment',
    initialState: {
        loading: false,
        error: null,
    },
    reducers: {
        topUpBalanceStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        topUpBalanceSuccess: (state,action) => {
            state.loading = false;
            state.error=null;
        },
        topUpBalanceFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },


    },
});

export const {
    topUpBalanceStart,
    topUpBalanceFailure,
    topUpBalanceSuccess

} = paymentSlice.actions;

export default paymentSlice.reducer;

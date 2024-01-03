import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        loading: false,
        error: null,
    },
    reducers: {

        changePasswordStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        changePasswordSuccess: (state,action) => {
            state.loading = false;
            state.error=null;
        },
        changePasswordFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },



    },
});

export const {
    changePasswordStart,
    changePasswordFailure,
    changePasswordSuccess

} = accountSlice.actions;

export default accountSlice.reducer;

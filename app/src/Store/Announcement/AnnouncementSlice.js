// announcementSlice.js
import { createSlice } from '@reduxjs/toolkit';

const announcementSlice = createSlice({
    name: 'announcement',
    initialState: {
        loading: false,
        error: null,
        // showAlert: false,
        // alertMessage: '',
        // showSuccessAlert: false,
        formData:
            {
                model: '',
                bodyType: '',
                fuelType: '',
                driveTrainType:'',
                gearboxType:'',
                color:'',
                marketVersion:'',
                options:[],
                conditions:[],
                manufactureYear:'',
                city:'',
                mileage:'',
                distanceUnit:'',
                ownerQuantity:'',
                engineVolume:'',
                horsePower:'',
                seatCount:'',
                vinCode:'',
                price:'',
                priceCurrency:'',
                credit:false,
                barter:false,
                brandNew:false,
                description:''
            },
    },
    reducers: {
        // setShowAlert: (state, action) => {
        //     state.showAlert = action.payload;
        // },
        // setAlertMessage: (state, action) => {
        //     state.alertMessage = action.payload;
        // },
        // setShowSuccessAlert: (state, action) => {
        //     state.showSuccessAlert = action.payload;
        // },

        sendAnnouncementStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        sendAnnouncementSuccess: (state,action) => {
            state.loading = false;
            state.error=null;
            state.formData = action.payload;
        },
        sendAnnouncementFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    sendAnnouncementStart,
    sendAnnouncementSuccess,
    sendAnnouncementFailure,
} = announcementSlice.actions;

export default announcementSlice.reducer;

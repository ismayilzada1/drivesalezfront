// announcementSlice.js
import { createSlice } from '@reduxjs/toolkit';

const announcementSlice = createSlice({
    name: 'announcement',
    initialState: {
        loading: false,
        error: null,
        announcements: [],
        filterParams:null,
        formDataSendAnnouncement:
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
                description:'',
                isPremium:false
            },
    },
    reducers: {
        //Send Announcement (Create Announcement)
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

        // Fetch Data (get announcements)
        getAnnouncementsStart(state) {
            state.loading = true;
        },
        getAnnouncementSuccess(state, action) {
            state.announcements = action.payload;
            state.loading = false;
            state.error = null;
        },
        getAnnouncementsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    sendAnnouncementStart,
    sendAnnouncementSuccess,
    sendAnnouncementFailure,
    getAnnouncementsStart,
    getAnnouncementSuccess,
    getAnnouncementsFailure
} = announcementSlice.actions;

export default announcementSlice.reducer;

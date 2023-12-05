// announcementSlice.js
import { createSlice } from '@reduxjs/toolkit';

const announcementSlice = createSlice({
    name: 'announcement',
    initialState: {
        loading: false,
        error: null,
        announcement:null,
        announcements: [],
        filterParams:null,
        pageNumber: 1,
        pageSize: 3,
        hasMore: true,
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

        getAnnouncementsStart(state) {
            state.loading = true;
        },
        getAnnouncementsSuccess(state, action) {
            const newAnnouncements = action.payload;

            state.announcements = [
                ...state.announcements,
                ...newAnnouncements.filter(
                    (newAnnouncement) =>
                        !state.announcements.some(
                            (existingAnnouncement) =>
                                existingAnnouncement.id === newAnnouncement.id
                        )
                ),
            ];

            state.loading = false;
            state.error = null;
            state.hasMore = newAnnouncements.length > 0;
        },
        getAnnouncementsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },


        setAnnouncements(state,action){
            state.announcements=action.payload;
        },

        // Pagination
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
        },

        setAnnouncement:(state,action)=>{
            state.announcement=action.payload;
        }
    },
});

export const {
    sendAnnouncementStart,
    sendAnnouncementSuccess,
    sendAnnouncementFailure,
    getAnnouncementsStart,
    getAnnouncementsSuccess,
    getAnnouncementsFailure,
    setPageNumber,
    setAnnouncements,
    setAnnouncement
} = announcementSlice.actions;

export default announcementSlice.reducer;

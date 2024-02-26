import { createSlice } from '@reduxjs/toolkit';

const announcementSlice = createSlice({
    name: 'announcement',
    initialState: {
        loading: false,
        error: null,
        announcement:null,
        regularAnnouncements: [],
        premiumAnnouncements: [],
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
            console.log(action.payload);
            const { regularAnnouncements, premiumAnnouncements } = action.payload;

            state.regularAnnouncements = [
                ...state.regularAnnouncements,
                ...(regularAnnouncements || []).filter(
                    (newAnnouncement) =>
                        !state.regularAnnouncements.some(
                            (existingAnnouncement) =>
                                existingAnnouncement.id === newAnnouncement.id
                        )
                ),
            ];

            state.premiumAnnouncements = [
                ...state.premiumAnnouncements,
                ...(premiumAnnouncements || []).filter(
                    (newAnnouncement) =>
                        !state.premiumAnnouncements.some(
                            (existingAnnouncement) =>
                                existingAnnouncement.id === newAnnouncement.id
                        )
                ),
            ];

            state.loading = false;
            state.error = null;
            state.hasMore = (regularAnnouncements && regularAnnouncements.length > 0) ||
                (premiumAnnouncements && premiumAnnouncements.length > 0);
        },


        getAnnouncementsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },


        setAnnouncements(state,action){
            state.regularAnnouncements=action.payload;
            state.premiumAnnouncements=action.payload;
        },

        // Pagination
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
        },

        setAnnouncementStart(state){
            state.loading=true;
        },

        setAnnouncementSuccess:(state,action)=>{
            state.announcement=action.payload;
            state.loading=false;
            state.error = null;
            },

        setAnnouncementFailure(state,action){
            state.announcement=null;
            state.loading=false;
            state.error=action.payload;
        },

        DeleteAnnouncementStart(state){
            state.loading=true;
        },

        DeleteAnnouncementSuccess:(state,action)=>{
            state.loading=false;
            state.error = null;
        },

        DeleteAnnouncementFailure(state,action){
            state.loading=false;
            state.error=action.payload;
        },

        setFilterParams(state,action){
            state.filterParams = action.payload;
        },


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
    setAnnouncementStart,
    setAnnouncementSuccess,
    setAnnouncementFailure,
    setFilterParams,
    DeleteAnnouncementSuccess,
    DeleteAnnouncementFailure,
    DeleteAnnouncementStart
} = announcementSlice.actions;

export default announcementSlice.reducer;

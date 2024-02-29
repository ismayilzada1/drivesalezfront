import { createSlice } from '@reduxjs/toolkit';

const announcementSlice = createSlice({
    name: 'announcement',
    initialState: {
        loading: false,
        error: null,
        announcement:null,
        premiumAnnouncements: [],
        allAnnouncements: [],
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
            const { premiumAnnouncements, allAnnouncements,hasMore } = action.payload;

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

            state.allAnnouncements = [
                ...state.allAnnouncements,
                ...(allAnnouncements || []).filter(
                    (newAnnouncement) =>
                        !state.allAnnouncements.some(
                            (existingAnnouncement) =>
                                existingAnnouncement.id === newAnnouncement.id
                        )
                ),
            ];

            state.loading = false;
            state.error = null;
            // state.hasMore = (premiumAnnouncements && premiumAnnouncements.length > 0) ||
            //     (allAnnouncements && allAnnouncements.length > 0);

            state.hasMore=hasMore;
        },


        getAnnouncementsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },


        setAnnouncements(state,action){
            state.premiumAnnouncements=action.payload;
            state.allAnnouncements=action.payload;
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

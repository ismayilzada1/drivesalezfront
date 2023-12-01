import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import authReducer from "./Auth/AuthSlice"
import announcementReducer from "./Announcement/AnnouncementSlice"

const reducers=combineReducers(
    {auth:authReducer,announcement:announcementReducer}
);

const config={
    key:'root',
    storage,
    expire: 14 * 60 * 60 * 1000, // 14 hours in milliseconds
};

const reducer = persistReducer(config,reducers);


const store=configureStore({
    reducer:reducer,
    devTools:process.env.NODE_ENV !== "production",
    middleware:[thunk],
})


export default store;
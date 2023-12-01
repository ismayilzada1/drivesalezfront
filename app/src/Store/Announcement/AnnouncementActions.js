import {
    sendAnnouncementStart,
    sendAnnouncementSuccess,
    sendAnnouncementFailure
} from "./AnnouncementSlice"

import annonucementService from "../../api-services/AnnouncementService"

const AnnouncementService=new annonucementService();

export const SendAnnouncement = (requestBody,token) => async (dispatch) => {
    dispatch(sendAnnouncementStart());
    try {

        const response = await AnnouncementService.SendNewAnnouncement(requestBody,token);

        if (response.status===200) {
            console.log("SUCCESFULL SEND ANNOUNCEMENT");
            dispatch(sendAnnouncementSuccess(response.data));
            return response;
        } else {
            dispatch(sendAnnouncementFailure('Email or password is invalid'));
        }
    } catch (error) {
        console.log(error);
        dispatch(sendAnnouncementFailure('An error occurred while processing your request'));
    }
};


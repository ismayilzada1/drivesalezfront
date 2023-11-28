import {
    sendAnnouncementStart,
    sendAnnouncementSuccess,
    sendAnnouncementFailure
} from "./AnnouncementSlice"

import annonucementService from "../../api-services/AnnouncementService"

const AnnouncementService=new annonucementService();

export const sendAnnouncement = (requestBody) => async (dispatch) => {
    dispatch(sendAnnouncementStart());
    try {
        const response = await annonucementService.SendNewAnnouncement(requestBody);

        if (response.status===200) {
            console.log("SUCCESFULL SEND ANNOUNCEMENT");
            dispatch(sendAnnouncementSuccess(response.data));
            return response;
        } else {
            dispatch(sendAnnouncementFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(sendAnnouncementFailure('An error occurred while processing your request'));
    }
};


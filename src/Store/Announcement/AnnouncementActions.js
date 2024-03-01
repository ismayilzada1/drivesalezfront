import {
    sendAnnouncementStart,
    sendAnnouncementSuccess,
    sendAnnouncementFailure,
    getAnnouncementsStart,
    getAnnouncementsFailure,
    getAnnouncementsSuccess,
    setPageNumber,
    setAnnouncements,
    setAnnouncementSuccess,
    setAnnouncementFailure,
    setAnnouncementStart,
    DeleteAnnouncementFailure,
    DeleteAnnouncementStart,
    DeleteAnnouncementSuccess
} from "./AnnouncementSlice"

import annonucementService from "../../api-services/AnnouncementService"
import authService from "../../api-services/AuthService";
import {useSelector} from "react-redux";

const AnnouncementService=new annonucementService();
const AuthService = new authService();
export const SendAnnouncement = (requestBody,accessToken) => async (dispatch) => {
    dispatch(sendAnnouncementStart());
    try {
        let token = accessToken || sessionStorage.getItem("authToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.SendNewAnnouncement(requestBody,token);

        console.log(response);

        if (response.status===200) {
            console.log("SUCCESFULL SEND ANNOUNCEMENT");
            dispatch(sendAnnouncementSuccess(response.data));
            return response;
        }
        else if(response.status===401){
            refreshToken().then(()=>{
                return SendAnnouncement(requestBody);
            });
        }
        else {
            dispatch(sendAnnouncementFailure('Email or password is invalid'));
        }
    } catch (error) {
        console.log(error);
        dispatch(sendAnnouncementFailure('An error occurred while processing your request'));
    }
};

// export const GetAnnouncements = (pageNumber,PageSize) => async (dispatch) => {
//     try {
//         dispatch(getAnnouncementsStart());
//
//         const response = await AnnouncementService.GetAnnouncements(pageNumber,PageSize);
//         console.log(response);
//         if (response.status===200) {
//             console.log("SUCCESFULL FETCH ANNOUNCEMENTS");
//             const data=await response.json();
//             console.log("data");
//             console.log(data);
//
//             if(data.length===0){
//                 return {
//                     response,
//                     hasMore:false
//                 }
//             }
//             dispatch(getAnnouncementsSuccess(data));
//             return {
//                 response,
//                 hasMore:true
//             }
//         } else {
//             dispatch(getAnnouncementsFailure('Email or password is invalid'));
//         }
//     } catch (error) {
//         console.log(error);
//         dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
//     }
// };

export const GetAnnouncements = (pageNumber, pageSize) => async (dispatch) => {
    try {
        dispatch(getAnnouncementsStart());

        const response = await AnnouncementService.GetAnnouncements(pageNumber, pageSize);
        console.log(response);
        if (response.status === 200) {
            console.log("SUCCESSFUL FETCH ANNOUNCEMENTS");
            const data = await response.json();
            console.log("elvin data");
            console.log(data);

            // elvine qoyum backde deyishek ( has more for paging)
            if (data.item2.length === 0) {
                return {
                    response,
                    hasMore: false
                };
            }
            else if (data.item2.length < pageSize) {

                const premiumAnnouncements = data.item1;
                const allAnnouncements = data.item2;
                const hasMore=false;
                dispatch(getAnnouncementsSuccess({ premiumAnnouncements,  allAnnouncements,hasMore}));
                return {
                    response,
                    hasMore: hasMore
                };
            }

            const premiumAnnouncements = data.item1;
            const allAnnouncements = data.item2;
            const hasMore=true;
            dispatch(getAnnouncementsSuccess({ premiumAnnouncements,  allAnnouncements,hasMore}));
            return {
                response,
                hasMore: hasMore
            };
        } else {
            dispatch(getAnnouncementsFailure('An error occurred while fetching announcements'));
        }
    } catch (error) {
        console.log(error);
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};


export const GetUserLimits = (accessToken) => async (dispatch) => {
    try {
        // dispatch(getAnnouncementsStart());

        let token = accessToken || sessionStorage.getItem("authToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.GetUserLimits(token);
        console.log(response);
        if (response.status===200) {
            console.log("SUCCESFULL GET USER LIMITS");
            const data=await response.json();
            console.log (data);
            // dispatch(getAnnouncementsSuccess(data.reverse()));
            return data;
        } else {
            // dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        console.log(error);
        // dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};


export const SetPageNumber = (pageNumber) => async (dispatch) => {
    try {
        const response = await dispatch(setPageNumber(pageNumber));
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const SetAnnouncement = (id) => async (dispatch) => {
    try {
        dispatch(setAnnouncementStart());

        const response = await AnnouncementService.GetAnnouncementByID(id);

        if (response.status===200) {
            console.log("SUCCESFULL SET ANNOUNCEMENT");
            const data=await response.json();
            dispatch(setAnnouncementSuccess(data));
            return data;
        } else {
            dispatch(setAnnouncementFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(setAnnouncementFailure('An error occurred while processing your request'));
    }
};

export const SetAnnouncementAuthorize = (id,accessToken) => async (dispatch) => {
    try {
        dispatch(setAnnouncementStart());

        let token = accessToken || sessionStorage.getItem("authToken");

        if (!token) {
            return null;
        }


        const response = await AnnouncementService.GetAnnouncementByIDAuthorize(id,token);

        if (response.status===200) {
            console.log("SUCCESFULL SET ANNOUNCEMENT");
            const data=await response.json();
            dispatch(setAnnouncementSuccess(data));
            return data;
        } else {
            dispatch(setAnnouncementFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(setAnnouncementFailure('An error occurred while processing your request'));
    }
};



export const GetAllAnnouncementsByUserId = () => async (dispatch) => {
    try {
        dispatch(getAnnouncementsStart());

        const token =
            localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

        if(!token){return null}

        const response = await AnnouncementService.GetAllAnnouncementsByUserId(token);

        if (response.status===200) {
            console.log("SUCCESFULL SET ANNOUNCEMENT");
            const data=await response.json();
            dispatch(getAnnouncementsSuccess(data));
            return data;
        } else {
            dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};

export const GetAllWaitingAnnouncementsByUserId = (accessToken) => async (dispatch) => {
    try {
        dispatch(getAnnouncementsStart());

        let token = accessToken || sessionStorage.getItem("authToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.GetAllWaitingAnnouncementsByUserId(token);

        if (response.status===200) {
            console.log("SUCCESFULL SET ANNOUNCEMENT");
            const data=await response.json();
            dispatch(getAnnouncementsSuccess(data));
            return data;
        } else {
            dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};

export const GetAllActiveAnnouncementsByUserId = (accessToken) => async (dispatch) => {
    try {
        dispatch(getAnnouncementsStart());

        let token = accessToken || sessionStorage.getItem("authToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.GetAllActiveAnnouncementsByUserId(token);

        if (response.status===200) {
            console.log("SUCCESFULL GET ALL ACTIVE ANNOUNCEMENT");
            const data=await response.json();
            dispatch(getAnnouncementsSuccess(data));
            return data;
        } else {
            dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};

export const GetAllInactiveAnnouncementsByUserId = (accessToken) => async (dispatch) => {
    try {
        dispatch(getAnnouncementsStart());

        let token = accessToken || sessionStorage.getItem("authToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.GetAllInactiveAnnouncementsByUserId(token);

        if (response.status===200) {
            console.log("SUCCESFULL GET ALL Inactive ANNOUNCEMENT");
            const data=await response.json();
            dispatch(getAnnouncementsSuccess(data));
            return data;
        } else {
            dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};

export const GetAllFilterAnnouncements = (filter) => async (dispatch) => {
    try {
        dispatch(getAnnouncementsStart());

        const response = await AnnouncementService.GetFilterAnnouncements(filter);

        if (response.status===200) {
            console.log("SUCCESFULL GET ALL Inactive ANNOUNCEMENT");
            const data=await response.json();
            console.log (data);
            dispatch(setAnnouncements(data));
            return data;
        }
        else {
            dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};

export const MakeAnnouncementInactiveAuthorize = (requestBody, accessToken) => async (dispatch) => {
    dispatch(DeleteAnnouncementStart());
    try {
        let token = accessToken || sessionStorage.getItem("authToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.MakeAnnouncementInactiveAuthorize(requestBody,token);

        if (response.status===200) {
            console.log("SUCCESFULL DELETE ANNOUNCEMENT");
            dispatch(DeleteAnnouncementSuccess());
            return response;
        }
        else if(response.status===401){
            refreshToken().then(()=>{
                return SendAnnouncement(requestBody);
            });
        }
        else {
            dispatch(DeleteAnnouncementFailure('Something is wrong !'));
        }
    } catch (error) {
        console.log(error);
        dispatch(DeleteAnnouncementFailure('An error occurred while processing your request'));
    }
};

export const MakeAnnouncementActiveAuthorize = (requestBody, accessToken) => async (dispatch) => {
    dispatch(DeleteAnnouncementStart());
    try {
        let token = accessToken || sessionStorage.getItem("authToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.MakeAnnouncementActiveAuthorize(requestBody,token);

        if (response.status===200) {
            console.log("SUCCESFULL Activate ANNOUNCEMENT");
            dispatch(DeleteAnnouncementSuccess());
            return response;
        }
        else if(response.status===401){
            refreshToken().then(()=>{
                return SendAnnouncement(requestBody);
            });
        }
        else {
            dispatch(DeleteAnnouncementFailure('Something is wrong !'));
        }
    } catch (error) {
        console.log(error);
        dispatch(DeleteAnnouncementFailure('An error occurred while processing your request'));
    }
};

export const DeleteAnnouncementAuthorize = (requestBody, accessToken) => async (dispatch) => {
    dispatch(DeleteAnnouncementStart());
    try {
        let token = accessToken || sessionStorage.getItem("authToken");

        if (!token) {
            return null;
        }

        const response = await AnnouncementService.DeleteAnnouncementAuthorize(requestBody,token);

        if (response.status===200) {
            console.log("SUCCESFULL Activate ANNOUNCEMENT");
            dispatch(DeleteAnnouncementSuccess());
            return response;
        }
        else if(response.status===401){
            refreshToken().then(()=>{
                return SendAnnouncement(requestBody);
            });
        }
        else {
            dispatch(DeleteAnnouncementFailure('Something is wrong !'));
        }
    } catch (error) {
        console.log(error);
        dispatch(DeleteAnnouncementFailure('An error occurred while processing your request'));
    }
};




async function refreshToken() {
    const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    const refreshToken = localStorage.getItem("refreshToken") || sessionStorage.getItem("refreshToken");

    const refreshResponse = await AuthService.RefreshToken(
        {
            "token": token,
            "refreshToken": refreshToken
        }
    )


    if (refreshResponse.ok) {
        const newToken = await refreshResponse.json().token;
        if (localStorage.getItem("authToken")) {
            localStorage.setItem("authToken", newToken);
        } else {
            sessionStorage.setItem("authToken", newToken);
        }
    } else {
        throw "Refresh token request failed";
    }
}

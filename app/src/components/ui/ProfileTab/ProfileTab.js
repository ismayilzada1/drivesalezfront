import React, {useEffect, useState} from "react";
import './ProfileTab.css'
import {useDispatch, useSelector} from "react-redux";
import {GetUserLimits} from '../../../Store/Announcement/AnnouncementActions'
import {useTranslation} from "react-i18next";




const ProfileTab=()=>{

    const {t}=useTranslation();


    const createLabelValue = (label, value) => (
        <li className="list-group-item">
            <span className="label info-key">{t(label)} :</span>
            <span className="value"><strong>{value}</strong></span>
        </li>
    );

    const { user } = useSelector((state) => state.auth);

    if (!user) {
        return (
            <div className="card card-profile-tab">
                <div className="card-body pe-2">
                    <h5 className="card-title">{t("personalData")}</h5>
                    <hr/>
                </div>
                <div className="card-body">
                    <p>User data not available.</p>
                </div>
            </div>
        );
    }



    return (
        <div className="card card-profile-tab">
            <div className="card-body pe-2">
                <h5 className="card-title">{t("personalData")}</h5>
                <hr/>
            </div>
            <ul className="list-group list-group-flush">
                {createLabelValue("name", user?.firstName)}
                {createLabelValue("surname", user?.lastName)}
                {createLabelValue("email", user?.email)}
                {createLabelValue("accountType", user?.userRole)}
                {createLabelValue("phoneNumber", user?.phoneNumbers?.[0]?.phoneNumber)}
            </ul>
            <div className="card-body d-flex flex-row justify-content-between">
                <a href="#" className="card-link">{t("removeAccount")}</a>
                <a href="/auth/changePassword" className="card-link">{t("changePassword")}</a>
                <a href="/updateAccount" className="card-link">{t("updateAccount")}</a>
            </div>
        </div>
    );
}

export default ProfileTab;
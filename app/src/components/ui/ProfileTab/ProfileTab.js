import React, {useEffect, useState} from "react";
import './ProfileTab.css'
import {useDispatch, useSelector} from "react-redux";
import {GetUserLimits} from '../../../Store/Announcement/AnnouncementActions'

const createLabelValue = (label, value) => (
    <li className="list-group-item">
        <span className="label info-key">{label} :</span>
        <span className="value"><strong>{value}</strong></span>
    </li>
);

const ProfileTab=()=>{

    const { user } = useSelector((state) => state.auth);

    if (!user) {
        return (
            <div className="card card-profile-tab">
                <div className="card-body pe-2">
                    <h5 className="card-title">Personal Data</h5>
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
                <h5 className="card-title">Personal Data</h5>
                <hr/>
            </div>
            <ul className="list-group list-group-flush">
                {createLabelValue("Name", user?.firstName)}
                {createLabelValue("Surname", user?.lastName)}
                {createLabelValue("Email", user?.email)}
                {createLabelValue("Account Type", user?.userRole)}
                {createLabelValue("Phone Number", user?.phoneNumbers?.[0]?.phoneNumber)}
            </ul>
            <div className="card-body d-flex flex-row justify-content-between">
                <a href="#" className="card-link">Remove Account</a>
                <a href="/changePassword" className="card-link">Change Password</a>
                <a href="/updateAccount" className="card-link">Update Account</a>
            </div>
        </div>
    );
}

export default ProfileTab;
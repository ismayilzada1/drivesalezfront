import React,{useState} from "react";
import './ProfileTab.css'
import {useSelector} from "react-redux";

const ProfileTab=()=>{

    const { user } = useSelector((state) => state.auth);


    const createLabelValue = (label, value) => (
        <li className="list-group-item">
            <span className="label info-key">{label} :</span>
            <span className="value"><strong>{value}</strong></span>
        </li>
    );

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
                {createLabelValue("Name", user.firstName)}
                {createLabelValue("Surname", user.lastName)}
                {createLabelValue("Email", user.email)}
                {createLabelValue("Account Type", user.userRole)}
                {createLabelValue("Phone Number", user.phoneNumber)}
            </ul>
            <div className="card-body d-flex flex-row justify-content-between">
                <a href="#" className="card-link">Remove Account</a>
                <a href="/changePassword" className="card-link">Change Password</a>
                <a href="#" className="card-link">Update Account</a>
            </div>
        </div>
    );
}

export default ProfileTab;
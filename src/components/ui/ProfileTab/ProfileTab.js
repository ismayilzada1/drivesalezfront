import React, {useEffect, useState} from "react";
import './ProfileTab.css'
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {DeleteAccount} from "../../../Store/Auth/authActions";
import {useNavigate} from "react-router-dom";

const ProfileTab = () => {

    const {t} = useTranslation ();
    const { accessToken } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [password,setPassword]=useState('');
    const {loading} = useSelector((state) => state.announcement);

    const navigate=useNavigate();


    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const createLabelValue = (label, value) => (
        <li className="list-group-item">
            <span className="label info-key">{t (label)} :</span>
            <span className="value"><strong>{value}</strong></span>
        </li>
    );

    const {user} = useSelector ((state) => state.auth);

    if (!user) {
        return (
            <div className="card card-profile-tab">
                <div className="card-body pe-2">
                    <h5 className="card-title">{t ("personalData")}</h5>
                    <hr/>
                </div>
                <div className="card-body">
                    <p>User data not available.</p>
                </div>
            </div>
        );
    }

    const handleDeleteAnnouncement = async () => {
        if(!password){return null}
        try {
            const response= await dispatch(DeleteAccount(password,accessToken));

            if (response.status === 200) {
                setAlertMessage("Account Deleted succesfully !");
                setShowSuccessAlert(true);

                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setShowAlert(true);
                setAlertMessage('Something went wrong !');
            }
        } catch (error) {
            setShowAlert(true);
            setAlertMessage('Something went wrong !');
        }
    }


    return (
        <>
            <div className="card card-profile-tab">
                <div className="card-body pe-2">
                    <h5 className="card-title">{t ("personalData")}</h5>
                    <hr/>
                </div>
                <ul className="list-group list-group-flush">
                    {createLabelValue ("name", user?.firstName)}
                    {createLabelValue ("surname", user?.lastName)}
                    {createLabelValue ("email", user?.email)}
                    {createLabelValue ("accountType", user?.userRole)}
                    {createLabelValue ("phoneNumber", user?.phoneNumbers?.[0]?.phoneNumber)}
                </ul>
                <div className="card-body d-flex flex-row justify-content-between">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#DeleteModal" className="card-link">{t ("removeAccount")}</a>
                    <a href="/src/pages/auth/changePassword" className="card-link">{t ("changePassword")}</a>
                    <a href="/updateAccount" className="card-link">{t ("updateAccount")}</a>
                </div>
            </div>

            <div className="modal fade" id="DeleteModal" tabIndex="-1" role="dialog"
                 aria-labelledby="DeleteModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("deleteAccount")}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="form-label" htmlFor="pno">Password:</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="passwordInput" className="form-control rounded"/>
                            </div>

                        </div>

                        <button type="button" data-toggle="modal"
                                data-target="#DeleteModal" onClick={handleDeleteAnnouncement} disabled={loading}
                                className="btn btn-danger m-3">{loading ? t ('deleteLoading') : t ('delete')}
                        </button>

                        {showAlert && (
                            <div className="alert alert-warning m-4" role="alert">
                                {alertMessage}
                            </div>
                        )}
                        {showSuccessAlert && (
                            <div className="alert alert-success m-4" role="alert">
                                {alertMessage}
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </>
    );
}

export default ProfileTab;
import React, { useState,useEffect } from 'react';
import './ChangePassword.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {resetPassword} from "../../Store/Auth/authActions";
import Logo from "../../components/ui/logo";

const ChangePassword = () => {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useSelector((state) => state.auth.email);
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);


    const [Password,setPassword]=useState('');
    const [ConfirmNewPassword,setConfirmNewPassword]=useState('');
    const [NewPassword,setNewPassword]=useState('');




    const handleResetPassword = async ()=>{
        if(!Password || !NewPassword || !ConfirmNewPassword){return;}
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return null;
    }


    return(
        <div className="wrapper">
            <div className="main-auth-page">
                <Logo/>
                <div className="clip-board">
                    <div className="container">
                        <div className="row auth-details-card">
                            <div className="col-lg-12">
                                <div className="card iq-auth-card mb-0 row">
                                    <img src="../../assets/images/auth/01.webp" alt="background" className="img-fluid w-75 position-absolute" />
                                    <div className="card-body col-5 offset-7">
                                        <div className="auth-form">
                                            <div className="text-center">
                                                <h2>Change Password</h2>
                                            </div>
                                            <div>
                                                <p className="mt-3 text-center"> Enter Current Password and your new password </p>
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" value={Password} onChange={(e) => setPassword(e.target.value)} id="floatingInput" placeholder="123456" />
                                                    <label htmlFor="floatingInput">Current Password</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" value={NewPassword} onChange={(e) => setNewPassword(e.target.value)} id="floatingInput" placeholder="123456" />
                                                    <label htmlFor="floatingInput">New Password</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" value={ConfirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} id="floatingInput" placeholder="123456" />
                                                    <label htmlFor="floatingInput">Confirm New Password</label>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button onClick={handleResetPassword} className="btn btn-primary mt-3" disabled={loading}>{loading ? 'Change Password ...' : 'Change Password'}</button>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="responsive-card auth-small">
                <div className="card">
                    <div className="card-body">
                        <div className="auth-form">
                            <div className="text-center">
                                <h2>Change Password</h2>
                            </div>
                            <div>
                                <p className="mt-3 text-center">Enter Current Password and your new password</p>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control"  value={Password} onChange={(e) => setPassword(e.target.value)} id="floatingInput"   placeholder="123456" />
                                    <label htmlFor="floatingInput">Current Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" value={NewPassword} onChange={(e) => setNewPassword(e.target.value)} id="floatingInput" placeholder="123456" />
                                    <label htmlFor="floatingInput">New Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" value={ConfirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} id="floatingInput" placeholder="123456" />
                                    <label htmlFor="floatingInput">Confirm New Password</label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button onClick={handleResetPassword} className="btn btn-primary mt-3" disabled={loading}>{loading ? 'Change Password ...' : 'Change Password'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;

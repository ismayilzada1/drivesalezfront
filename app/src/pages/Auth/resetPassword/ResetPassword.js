import React, { useState } from 'react';
import Logo from '../../../components/ui/logo';
import Service from "../../../api-services/AuthService";
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {resetPassword} from "../../../Store/Auth/authActions";

const ResetPassword=()=> {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useSelector((state) => state.auth.email);
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);


    const [Password,setPassword]=useState('');
    const [ConfirmPassword,setConfirmPassword]=useState('');
    const [otpCode,setOtpCode]=useState('');




    const handleResetPassword = async ()=>{
            if(!otpCode || !Password || !ConfirmPassword){return;}

        const requestBody = {
            "validateRequest": {
                "email": email,
                "otp": otpCode
            },
            "newPassword": Password,
            "confirmPassword": ConfirmPassword
        };

        try {

            console.log(requestBody);
            const response  = await dispatch(resetPassword(requestBody));

            if (response) {
                navigate('/login');
            } else {

            }

        }
        catch (error) {
            console.error('Reser Password failed:', error);
        }

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
                                                <h2>Reset Password</h2>
                                            </div>
                                            <div>
                                                <p className="mt-3 text-center"> Enter OTP Code and your new password </p>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" value={otpCode} onChange={(e) => setOtpCode(e.target.value)} id="floatingInput" placeholder="123456" />
                                                    <label htmlFor="floatingInput">OTP Code</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" value={Password} onChange={(e) => setPassword(e.target.value)} id="floatingInput" placeholder="123456" />
                                                    <label htmlFor="floatingInput">Password</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="floatingInput" placeholder="123456" />
                                                    <label htmlFor="floatingInput">Confirm Password</label>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button onClick={handleResetPassword} className="btn btn-primary mt-3" disabled={loading}>{loading ? 'Reset Password ...' : 'Reset Password'}</button>
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
                                <h2>Reset Password</h2>
                            </div>
                            <div>
                                <p className="mt-3 text-center">Enter OTP Code and your new password</p>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control"  value={otpCode} onChange={(e) => setOtpCode(e.target.value)} id="floatingInput"   placeholder="123456" />
                                    <label htmlFor="floatingInput">OTP Code</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" value={Password} onChange={(e) => setPassword(e.target.value)} id="floatingInput" placeholder="123456" />
                                    <label htmlFor="floatingInput">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="floatingInput" placeholder="123456" />
                                    <label htmlFor="floatingInput">Confirm Password</label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button onClick={handleResetPassword} className="btn btn-primary mt-3" disabled={loading}>{loading ? 'Reset Password ...' : 'Reset Password'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
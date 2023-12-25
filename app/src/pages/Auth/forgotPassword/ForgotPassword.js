import React, {useEffect, useState} from "react";
import "./ForgotPassword.css";
import Logo from "../../../components/ui/Logo";
import Service from "../../../api-services/OtpService";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {sendOtp, verifyEmail} from "../../../Store/Auth/authActions";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);

    const [email, setEmail] = useState("");


    const handleSendEmail = async () => {
        if(!email){
            return;
        }

        try {
            const response  =await dispatch(sendOtp(email));

            if (response) {
                navigate('/auth/reset-password');
            } else {

            }

        }
        catch (error) {
            console.error('OTP SEND failed:', error);
        }

    };



    return (
            <div className="wrapper">
                <div className="main-auth-page">
                    <Logo size="80px" />
                    <div className="clip-board">
                        <div className="container">
                            <div className="row auth-details-card">
                                <div className="col-lg-12">
                                    <div className="card iq-auth-card mb-0 row">
                                        <img src="../../assets/images/auth/01.webp" alt="background" className="img-fluid w-75 position-absolute" />
                                        <div className="card-body col-5 offset-7">
                                            <div className="auth-form">
                                                <div className="text-center">
                                                    <h2 >Forgot Password ?</h2>
                                                </div>
                                                <div>
                                                    <h4 className="mt-3 text-center" style={{fontWeight:400}}>Enter your  email</h4>
                                                    <div className="form-floating mb-3">
                                                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInput" placeholder="123456" />
                                                        <label htmlFor="floatingInput">E-Mail</label>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button onClick={handleSendEmail} className="btn btn-primary mt-3" disabled={loading}>{loading ? 'Next ...' : 'Next'}</button>
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
                                    <h2>Forgot Password ?</h2>
                                </div>
                                <div>
                                    <h4 className="mt-3 text-center">Enter your  email</h4>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control"  value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInput"  id="floatingInput" placeholder="123456" />
                                        <label htmlFor="floatingInput">E-Mail</label>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button onClick={handleSendEmail} className="btn btn-primary mt-3" disabled={loading}>{loading ? 'Next ...' : 'Next'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default ForgotPassword;
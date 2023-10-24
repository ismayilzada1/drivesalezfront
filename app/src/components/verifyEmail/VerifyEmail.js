import React from "react";
import './VerifyEmail.css';
import Logo from "../logo";
const VerifyEmail = () => {
    return (
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
                                                <h2>Verify Email</h2>
                                            </div>
                                            <div>
                                                <p className="mt-3 text-center">Please enter the OTP code sent to your email to verify your account.</p>
                                                <div className="form-floating mb-3">
                                                    <input type="text" className="form-control" id="floatingInput" placeholder="123456" />
                                                    <label htmlFor="floatingInput">OTP code</label>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button className="btn btn-primary mt-3">Verify</button>
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
                                <p className="mt-3 text-center">Please enter the OTP code sent to your email to verify your account.</p>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="123456" />
                                    <label htmlFor="floatingInput">OTP code</label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary mt-3">Verify</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;

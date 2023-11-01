import React, {useEffect, useState} from "react";
import "./ForgotPassword.css";
import Logo from "../logo";
import Service from "../../api-services/service";
import {useNavigate} from "react-router-dom";

const ForgotPassword = () => {
    const MyService = new Service();
    const [email, setEmail] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSendEmail = async () => {
        setIsLoading(true);

        setShowSuccessAlert(false);
        setShowAlert(false);

        const requestBody = {
            email: email,
        };
        localStorage.setItem("emailForForgotPassword", email);

        try {
            const response = await MyService.SendOTP(requestBody.email);

            if (response.status === 200) {
                setAlertMessage('OTP sent to your email.');
                setShowSuccessAlert(true);
                setTimeout(() => {
                    setShowSuccessAlert(false);
                    setAlertMessage('');

                    navigate("/reset-password");
                }, 2000);
            } else {
                setShowAlert(true);
                setAlertMessage("Email or password is invalid");
            }
        } catch (error) {
            setShowAlert(true);
            setAlertMessage("An error occurred while processing your request");
        }

        setIsLoading(false);
    };



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
                                                    <h2>Find your email</h2>
                                                </div>
                                                <div>
                                                    <p className="mt-3 text-center"> Enter your recovery email </p>
                                                    <div className="form-floating mb-3">
                                                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInput" placeholder="123456" />
                                                        <label htmlFor="floatingInput">E-Mail</label>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button onClick={handleSendEmail} className="btn btn-primary mt-3" disabled={isLoading}>{isLoading ? 'Next ...' : 'Next'}</button>
                                                </div>

                                                {showAlert && (
                                                    <div className="alert alert-warning mt-3" role="alert">
                                                        {alertMessage}
                                                    </div>
                                                )}
                                                {showSuccessAlert && (
                                                    <div className="alert alert-success mt-3" role="alert">
                                                        {alertMessage}
                                                    </div>
                                                )}
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
                                    <h2>Find your email</h2>
                                </div>
                                <div>
                                    <p className="mt-3 text-center">Enter your recovery email</p>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control"  value={email} onChange={(e) => setEmail(e.target.value)} id="floatingInput"  id="floatingInput" placeholder="123456" />
                                        <label htmlFor="floatingInput">E-Mail</label>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button onClick={handleSendEmail} className="btn btn-primary mt-3" disabled={isLoading}>{isLoading ? 'Next ...' : 'Next'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default ForgotPassword;
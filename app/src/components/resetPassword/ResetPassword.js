import React, { useState } from 'react';
import Logo from '../logo';
import Service from "../../api-services/AuthService";
import { useNavigate } from 'react-router-dom';

const ResetPassword=()=> {
    const MyService = new Service();

    const [password,setPassword]=useState('');
    const [otpCode,setOtpCode]=useState('');

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();


    const handleResetPassword = async ()=>{

        setIsLoading(true);

        setShowSuccessAlert(false);
        setShowAlert(false);

        const requestBody = {
            "validateRequest": {
                "email": localStorage.getItem('emailForForgotPassword'),
                "otp": otpCode
            },
            "newPassword": password
        };

        try {
            const response = await MyService.ResetPassword(requestBody);

            if (response.status === 200) {
                setAlertMessage('Password reset successfully');
                setShowSuccessAlert(true);
                setTimeout(() => {
                    setShowSuccessAlert(false);
                    setAlertMessage('');

                    navigate("/login");
                }, 2000);
            } else if(response.status===400) {
                setShowAlert(true);
                setAlertMessage("Can't validate OTP Code");
            }
            else{
                setShowAlert(true);
                setAlertMessage("OTP Code or new Password is wrong");
            }
        } catch (error) {
            setShowAlert(true);
            setAlertMessage("An error occurred while processing your request");
        }

        setIsLoading(false);

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
                                                    <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="floatingInput" placeholder="123456" />
                                                    <label htmlFor="floatingInput">E-Mail</label>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button onClick={handleResetPassword} className="btn btn-primary mt-3" disabled={isLoading}>{isLoading ? 'Reset Password ...' : 'Reset Password'}</button>
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
                                <h2>Reset Password</h2>
                            </div>
                            <div>
                                <p className="mt-3 text-center">Enter OTP Code and your new password</p>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control"  value={otpCode} onChange={(e) => setOtpCode(e.target.value)} id="floatingInput"   placeholder="123456" />
                                    <label htmlFor="floatingInput">OTP Code</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control"  value={password} onChange={(e) => setPassword(e.target.value)} id="floatingInput"   placeholder="123456" />
                                    <label htmlFor="floatingInput">E-Mail</label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button onClick={handleResetPassword} className="btn btn-primary mt-3" disabled={isLoading}>{isLoading ? 'Reset Password ...' : 'Reset Password'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
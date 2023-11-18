import React, {useEffect, useState} from "react";
import './VerifyEmail.css';
import Logo from "../logo";
import Service from "../../api-services/OtpService";
import { useNavigate  } from 'react-router-dom';

const VerifyEmail = () => {

    const MyService= new Service();

    const navigate = useNavigate();

    const [otp,setOTP]=useState('');

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleVerify = async () => {
        const requestBody = {
            email: localStorage.getItem("email"),
            otp: otp,
        };

        try {
            const response = await MyService.VerifyOTP(requestBody);

            if (response.status === 200) {
                console.log("Verified Successfully");
                setShowSuccessAlert(true);
                setAlertMessage('Email verification successful.');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);

            } else {
                setShowAlert(true);
                setAlertMessage('Email verification failed. Please check the OTP.');
            }
            console.log(response);

        } catch (error) {
            console.error('Verify failed:', error);
            setShowAlert(true);
            setAlertMessage('An error occurred during verification.');
        }

    };


    useEffect(() => {
        console.log(otp);
        console.log(localStorage.getItem('email'));
    }, [otp]);

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
                                                    <input type="text" className="form-control" value={otp} onChange={(e) => setOTP(e.target.value)} id="floatingInput" placeholder="123456" />
                                                    <label htmlFor="floatingInput">OTP code</label>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button onClick={handleVerify} className="btn btn-primary mt-3">Verify</button>
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
                                <h2>Verify Mail</h2>
                            </div>
                            <div>
                                <p className="mt-3 text-center">Please enter the OTP code sent to your email to verify your account.</p>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control"  value={otp} onChange={(e) => setOTP(e.target.value)} id="floatingInput" placeholder="123456" />
                                    <label htmlFor="floatingInput">OTP code</label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button onClick={handleVerify} className="btn btn-primary mt-3">Verify</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;

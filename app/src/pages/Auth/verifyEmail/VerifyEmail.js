import React, {useEffect, useState} from "react";
import './VerifyEmail.css';
import Logo from "../../../components/ui/Logo";
import { useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail } from '../../../Store/Auth/authActions';
import OtpInput from 'react-otp-input';
const VerifyEmail = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useSelector((state) => state.auth.email);
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);

    const [otp,setOtp]=useState('');

    const setOTP = (otpValue) => {
        const numericValue = otpValue.replace(/\D/g, '');
        if (numericValue !== "") {
            setOtp(numericValue);
        }
    };

    const handleVerify = async () => {
        const requestBody = {
            email: email,
            otp: otp,
        };

        try {
            const response  =await dispatch(verifyEmail(requestBody));

            if (response) {
                navigate('/auth/login');
            } else {

            }

        }
        catch (error) {
            console.error('Verify failed:', error);

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
                                                <h2>Verify Email</h2>
                                            </div>
                                            <div>
                                                <p className="mt-3 text-center">Please enter the OTP code sent to your email to verify your account.</p>
                                                <div className="mb-3 text-center">
                                                    {/*<input type="email" className="form-control"  value={otp} onChange={(e) => setOTP(e.target.value)} id="floatingInput" placeholder="123456" />*/}
                                                    <label htmlFor="floatingInput" className='form-label' style={{ fontSize: '1.5em' }}>OTP code</label>

                                                    <div className="d-flex justify-content-center"> {/* Ensure this container is a flex container */}
                                                        <OtpInput
                                                            id="otpInput"
                                                            value={otp}
                                                            onChange={setOTP}
                                                            numInputs={6}
                                                            renderInput={(props, index) => (
                                                                <input
                                                                    {...props}
                                                                    key={index}
                                                                    className="form-control"
                                                                    style={{ color:"black",width:'3em',height:'3em'}}
                                                                    inputMode="numeric"
                                                                />
                                                            )}
                                                            renderSeparator={<span>-</span>}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button onClick={handleVerify} className="btn btn-primary mt-3" disabled={loading}>
                                                    Verify
                                                </button>
                                            </div>
                                            {loading && <p>Loading...</p>}
                                            {error && <p className="error-message">{error}</p>}
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
                                <div className="mb-3 text-center">
                                    {/*<input type="email" className="form-control"  value={otp} onChange={(e) => setOTP(e.target.value)} id="floatingInput" placeholder="123456" />*/}
                                    <label htmlFor="floatingInput" className='form-label' style={{ fontSize: '1.5em' }}>OTP code</label>

                                    <div className="d-flex justify-content-center"> {/* Ensure this container is a flex container */}
                                        <OtpInput
                                            id="otpInput"
                                            value={otp}
                                            onChange={setOTP}
                                            numInputs={6}
                                            renderInput={(props, index) => (
                                                <input
                                                    {...props}
                                                    key={index}
                                                    className="form-control"
                                                    style={{ color:"black" }}
                                                    inputMode="numeric"
                                                />
                                            )}
                                            renderSeparator={<span>-</span>}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-center">
                                    <button onClick={handleVerify} className="btn btn-primary mt-3" disabled={loading}>
                                        Verify
                                    </button>
                                </div>
                                {loading && <p>Loading...</p>}
                                {error && <p className="error-message">{error}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;

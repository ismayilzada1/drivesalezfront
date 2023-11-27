import React, { useState } from 'react';
import Logo from '../logo';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Store/Auth/authActions';

function Register() {

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);


    const navigate = useNavigate();




    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Password: '',
        ConfirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSignUp = async () => {

        const requestBody = {
            firstName: formData.FirstName,
            lastName: formData.LastName,
            email: formData.Email,
            phoneNumbers: [{ id: 0, phoneNumber: formData.PhoneNumber }],
            password: formData.Password,
            confirmPassword: formData.ConfirmPassword,
        };

        try {
            const response = await dispatch(registerUser(requestBody));
            if(response){
                navigate('/verifyEmail');
            }
        }
        catch (error) {
        }
    };


    return (
        <div className="wrapper">
            <div className="main-auth-page">
                <Logo />
                <div className="clip-board">
                    <div className="container">
                        <div className="row auth-details-card">
                            <div className="col-lg-12">
                                <div className="card iq-auth-card mb-0 row">
                                    <img
                                        src="../../assets/images/auth/01.webp"
                                        alt="background"
                                        className="img-fluid w-75 position-absolute"
                                        style={{ top: '8%' }}
                                    />
                                    <div className="card-body col-5 offset-7">
                                        <div className="auth-form">
                                            <h2 className="text-center mb-3">Sign Up</h2>
                                            <form>
                                                <p className="text-center">Create Your Vrooom Account.</p>
                                                <div className="row text-start mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="input1"
                                                                placeholder="First Name"
                                                                value={formData.FirstName}
                                                                onChange={handleChange}
                                                                name="FirstName"
                                                            />
                                                            <label htmlFor="input1">First Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="input2"
                                                                placeholder="Last Name"
                                                                value={formData.LastName}
                                                                onChange={handleChange}
                                                                name="LastName"
                                                            />
                                                            <label htmlFor="input2">Last Name</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row text-start mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="input3"
                                                                placeholder="Email"
                                                                value={formData.Email}
                                                                onChange={handleChange}
                                                                name="Email"
                                                            />
                                                            <label htmlFor="input3">Email</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="input4"
                                                                placeholder="Phone No"
                                                                value={formData.PhoneNumber}
                                                                onChange={handleChange}
                                                                name="PhoneNumber"
                                                            />
                                                            <label htmlFor="input4">Phone No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row text-start mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                id="input5"
                                                                placeholder="Password"
                                                                value={formData.Password}
                                                                onChange={handleChange}
                                                                name="Password"
                                                            />
                                                            <label htmlFor="input5">Password</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                id="input6"
                                                                placeholder="Confirm Password"
                                                                value={formData.ConfirmPassword}
                                                                onChange={handleChange}
                                                                name="ConfirmPassword"
                                                            />
                                                            <label htmlFor="input6">Confirm Password</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-center mb-4">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="termsCondition"
                                                    />
                                                    <label
                                                        className="ms-2 form-check-label"
                                                        htmlFor="termsCondition"
                                                    >
                                                        I agree with the terms of use
                                                    </label>
                                                </div>
                                                <div className="text-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={handleSignUp}
                                                        disabled={loading}
                                                    >
                                                        {loading ? 'Signing Up...' : 'Sign Up'}
                                                    </button>
                                                </div>

                                                {alert.show && (
                                                    <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-warning'} mt-3`} role="alert">
                                                        {alert.message}
                                                    </div>
                                                )}
                                            </form>
                                            <div className="new-account mt-3 text-center">
                                                <p className="mb-0">
                                                    Already have an Account{' '}
                                                    <a className="text-primary" href="/login">
                                                        Sign in
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="responsive-card">
                <div className="card">
                    <div className="card-body">
                        <div className="auth-form">
                            <h2 className="text-center mb-3">Sign Up</h2>
                            <form className="ath-text-input">
                                <p className="text-center">Create Your Vrooom Account.</p>
                                <div className="row text-start mb-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="input1"
                                                value={formData.FirstName}
                                                onChange={handleChange}
                                                placeholder="First Name"
                                                name="FirstName"
                                            />
                                            <label htmlFor="input1">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="input2"
                                                value={formData.LastName}
                                                onChange={handleChange}
                                                placeholder="Last Name"
                                                name="LastName"
                                            />
                                            <label htmlFor="input2">Last Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-start mb-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={formData.Email}
                                                onChange={handleChange}
                                                id="input3"
                                                placeholder="Email"
                                                name="Email"
                                            />
                                            <label htmlFor="input3">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="input4"
                                                value={formData.PhoneNumber}
                                                onChange={handleChange}
                                                placeholder="Phone No"
                                                name="PhoneNumber"
                                            />
                                            <label htmlFor="input4">Phone No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-start mb-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="input5"
                                                value={formData.Password}
                                                onChange={handleChange}
                                                placeholder="Password"
                                                name="Password"
                                            />
                                            <label htmlFor="input5">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="input6"
                                                value={formData.ConfirmPassword}
                                                onChange={handleChange}
                                                placeholder="Confirm Password"
                                                name="ConfirmPassword"
                                            />
                                            <label htmlFor="input6">Confirm Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="termsCondition"
                                    />
                                    <label
                                        className="ms-2 form-check-label"
                                        htmlFor="termsCondition"
                                    >
                                        I agree with the terms of use
                                    </label>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleSignUp}
                                        disabled={loading}
                                    >
                                        {loading ? 'Signing Up...' : 'Sign Up'}
                                    </button>
                                </div>
                                <div className="text-center mt-3">
                                    <p>or sign in with others account?</p>
                                </div>
                                <div className="d-flex justify-content-center ">
                                    <ul className="list-group list-group-horizontal list-group-flush">
                                        <li className="list-group-item bg-transparent border-0">
                                            <a href="#">
                                                <img
                                                    src="../../assets/images/brands/15.png"
                                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                                    alt="img60"
                                                />
                                            </a>
                                        </li>
                                        <li className="list-group-item bg-transparent border-0">
                                            <a href="#">
                                                <img
                                                    src="../../assets/images/brands/08.png"
                                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                                    alt="gm"
                                                />
                                            </a>
                                        </li>
                                        <li className="list-group-item bg-transparent border-0">
                                            <a href="#">
                                                <img
                                                    src="../../assets/images/brands/10.png"
                                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                                    alt="im"
                                                />
                                            </a>
                                        </li>
                                        <li className="list-group-item bg-transparent border-0">
                                            <a href="#">
                                                <img
                                                    src="../../assets/images/brands/13.png"
                                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                                    alt="li"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            <div className="new-account mt-3 text-center">
                                <p className="mb-0">
                                    Already have an Account{' '}
                                    <a className="text-primary" href="/login">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

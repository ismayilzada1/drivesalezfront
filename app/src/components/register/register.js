import React, { useState } from 'react';
import Logo from '../logo';
function Register(){


    const [FirstName,setFirstName]=useState('Magomed');
    const [LastName,setLastName]=useState('Ismayilzade');
    const [Email,setEmail]=useState('Ismayilzade@gmail.com');
    const [PhoneNumber,setPhoneNumber]=useState('0504561252');
    const [Password,setPassword]=useState('P@ss12345');
    const [ConfirmPassword,setConfirmPassword]=useState('P@ss12345');

    const handleSignUp = () => {
        const requestBody = {
            personName: FirstName,
            email: Email,
            phone: PhoneNumber,
            password: Password,
            confirmPassword: ConfirmPassword,
        };


        fetch('https://localhost:7261/api/Account/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => {
                if (response.status === 200) {
                    // Registration was successful, handle success here
                    console.log('Registration successful');
                } else {
                    // Registration failed, handle error here
                    console.error('Registration failed');
                }
            })
            .catch((error) => {
                // Handle network errors or other issues here
                console.error('Error:', error);
            });
    };

    return(
        <>
            <div className="wrapper">
                <div className="main-auth-page">
                    <Logo/>
                    <div className="clip-board">
                        <div className="container">
                            <div className="row auth-details-card">
                                <div className="col-lg-12">
                                    <div className="card iq-auth-card mb-0 row">
                                        <img src="../../assets/images/auth/01.webp" alt="background" className="img-fluid w-75 position-absolute" style={{top: '8%'}}/>
                                            <div className="card-body col-5 offset-7">
                                                <div className="auth-form">
                                                    <h2 className="text-center mb-3">Sign Up</h2>
                                                    <form>
                                                        <p className="text-center">Create Your Vrooom Account.</p>
                                                        <div className="row text-start mb-3">
                                                            <div className="col-md-6">
                                                                <div className="form-floating">
                                                                    <input type="text" className="form-control" id="input1"   placeholder="First Name"/>
                                                                        <label htmlFor="input1">First Name</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-floating">
                                                                    <input type="text" className="form-control" id="input2" placeholder="Last Name"/>
                                                                        <label htmlFor="input2">Last Name</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row text-start mb-3">
                                                            <div className="col-md-6">
                                                                <div className="form-floating">
                                                                    <input type="email" className="form-control" id="input3" placeholder="Email"/>
                                                                        <label htmlFor="input3">Email</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-floating">
                                                                    <input type="text" className="form-control" id="input4" placeholder="Phone No"/>
                                                                        <label htmlFor="input4">Phone No</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row text-start mb-3">
                                                            <div className="col-md-6">
                                                                <div className="form-floating">
                                                                    <input type="password" className="form-control" id="input5" placeholder="Password"/>
                                                                        <label htmlFor="input5">Password</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-floating">
                                                                    <input type="password" className="form-control" id="input6" placeholder="Confirm Password"/>
                                                                        <label htmlFor="input6">Confirm Password</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-check d-flex justify-content-center mb-4">
                                                            <input type="checkbox" className="form-check-input" id="termsCondition"/>
                                                                <label className="ms-2 form-check-label" htmlFor="termsCondition">I agree with the terms of
                                                                    use</label>
                                                        </div>
                                                        <div className="text-center">
                                                            <button type="button" className="btn btn-primary">Sign Up</button>
                                                        </div>
                                                        <div className="text-center mt-3">
                                                            <p>or sign in with others account?</p>
                                                        </div>
                                                        <div className="d-flex justify-content-center ">
                                                            <ul className="list-group list-group-horizontal list-group-flush">
                                                                <li className="list-group-item bg-transparent border-0">
                                                                    <a href="#"><img src="../../assets/images/brands/15.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="img60"/></a>
                                                                </li>
                                                                <li className="list-group-item bg-transparent border-0">
                                                                    <a href="#"><img src="../../assets/images/brands/08.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="gm"/></a>
                                                                </li>
                                                                <li className="list-group-item bg-transparent border-0">
                                                                    <a href="#"><img src="../../assets/images/brands/10.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="im"/></a>
                                                                </li>
                                                                <li className="list-group-item bg-transparent border-0">
                                                                    <a href="#"><img src="../../assets/images/brands/13.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="li"/></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </form>
                                                    <div className="new-account mt-3 text-center">
                                                        <p className="mb-0">Already have an Account <a className="text-primary" href="../../dashboard/auth/sign-in.html">Sign in</a>
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
                                                <input type="text" className="form-control" id="input1" value={FirstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
                                                    <label htmlFor="input1">First Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="input2" value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
                                                    <label htmlFor="input2">Last Name</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row text-start mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} id="input3" placeholder="Email"/>
                                                    <label htmlFor="input3">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control"  id="input4" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone No"/>
                                                    <label htmlFor="input4">Phone No</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row text-start mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="input5" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                                                    <label htmlFor="input5">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="input6" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
                                                    <label htmlFor="input6">Confirm Password</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="termsCondition"/>
                                            <label className="ms-2 form-check-label" htmlFor="termsCondition">
                                                I agree with the terms of use
                                            </label>
                                    </div>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
                                    </div>
                                    <div className="text-center mt-3">
                                        <p>or sign in with others account?</p>
                                    </div>
                                    <div className="d-flex justify-content-center ">
                                        <ul className="list-group list-group-horizontal list-group-flush">
                                            <li className="list-group-item bg-transparent border-0">
                                                <a href="#"><img src="../../assets/images/brands/15.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="img60"/></a>
                                            </li>
                                            <li className="list-group-item bg-transparent border-0">
                                                <a href="#"><img src="../../assets/images/brands/08.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="gm"/></a>
                                            </li>
                                            <li className="list-group-item bg-transparent border-0">
                                                <a href="#"><img src="../../assets/images/brands/10.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="im"/></a>
                                            </li>
                                            <li className="list-group-item bg-transparent border-0">
                                                <a href="#"><img src="../../assets/images/brands/13.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="li"/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                                <div className="new-account mt-3 text-center">
                                    <p className="mb-0">Already have an Account <a className="text-primary" href="../../dashboard/auth/sign-in.html">Sign in</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
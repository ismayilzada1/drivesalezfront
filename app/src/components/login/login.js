import React, { useState } from 'react';
import Logo from '../logo';
import './login.css';
import Service from '../../api-services/service';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const MyService = new Service();
   const navigate = useNavigate();

   const [Email, setEmail] = useState('');
   const [Password, setPassword] = useState('');
   const [showAlert, setShowAlert] = useState(false);
   const [alertMessage, setAlertMessage] = useState('');
   const [showSuccessAlert, setShowSuccessAlert] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const handleSignUp = async () => {
      const requestBody = {
         email: Email,
         password: Password,
      };

      setIsLoading(true);

      try {
         const response = await MyService.Login(requestBody);

         if (response.status === 200) {
            setShowSuccessAlert(true);
            setTimeout(() => {
               navigate('/home');
            }, 1000);
         } else {
            setShowAlert(true);
            setAlertMessage('Email or password is invalid');
         }
      } catch (error) {
         setShowAlert(true);
         setAlertMessage('An error occurred while processing your request');
      }

      setIsLoading(false);
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
                            <img src="../../assets/images/auth/01.webp" alt="background" className="img-fluid w-75 position-absolute" style={{ top: '8%' }} />
                            <div className="card-body col-5 offset-7">
                               <div className="auth-form">
                                  <h2 className="text-center mb-3">Sign In</h2>
                                  <form>
                                     <p className="text-center">Sign in to stay connected.</p>
                                     <div className="row text-start mb-3">
                                        <div className="col-12 mb-3">
                                           <div className="form-floating">
                                              <input type="email" className="form-control" id="input1" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                                              <label htmlFor="input1">Email</label>
                                           </div>
                                        </div>
                                        <div className="col-12 mb-3">
                                           <div className="form-floating">
                                              <input type="password" className="form-control" id="input2" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                              <label htmlFor="input2">Password</label>
                                           </div>
                                        </div>
                                     </div>
                                     <div className="d-flex justify-content-between  align-items-center flex-wrap">
                                        <div className="form-group">
                                           <div className="form-check">
                                              <input className="form-check-input" type="checkbox" id="Remember" />
                                              <label className="form-check-label" htmlFor="Remember">Remember me?</label>
                                           </div>
                                        </div>
                                        <div className="form-group">
                                           <a href="/forgot-password">Forgot Password?</a>
                                        </div>
                                     </div>
                                     <div className="text-center">
                                        <button type="button" className="btn btn-primary" onClick={handleSignUp} disabled={isLoading}>
                                           {isLoading ? 'Signing In...' : 'Sign In'}
                                        </button>
                                     </div>

                                     {showAlert && (
                                         <div className="alert alert-primary rounded-0 alert-dismissible fade show mt-1" role="alert">
                                            {alertMessage}
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                                onClick={() => setShowAlert(false)}
                                            ></button>
                                         </div>
                                     )}

                                     {showSuccessAlert && (
                                         <div className="alert alert-left alert-success alert-dismissible fade show mb-3" role="alert">
                                            <span> Login successfully completed !</span>
                                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
                                         </div>
                                     )}


                                  </form>
                                  <div className="new-account mt-3 text-center">
                                     <p>Don't have an account? <a className="" href="../register">Click here to sign up</a></p>
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
                      <h2 className="text-center mb-3">Sign In</h2>
                      <form>
                         <p className="text-center">Sign in to stay connected.</p>
                         <div className="row text-start mb-3">
                            <div className="col-12 mb-3">
                               <div className="form-floating">
                                  <input type="email" className="form-control" id="input1" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                                  <label htmlFor="input1">Email</label>
                               </div>
                            </div>
                            <div className="col-12 mb-3">
                               <div className="form-floating">
                                  <input type="password" className="form-control" id="input2" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                  <label htmlFor="input2">Password</label>
                               </div>
                            </div>
                         </div>
                         <div className="d-flex justify-content-between  align-items-center flex-wrap">
                            <div className="form-group">
                               <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="checkMe" />
                                  <label className="form-check-label" htmlFor="checkMe">Remember me?</label>
                               </div>
                            </div>
                            <div className="form-group">
                               <a href="#">Forgot Password?</a>
                            </div>
                         </div>
                         <div className="text-center">
                            <button type="button" className="btn btn-primary" onClick={handleSignUp} disabled={isLoading}>
                               {isLoading ? 'Signing In...' : 'Sign In'}
                            </button>
                         </div>
                         <div className="text-center mt-3">
                            <p>or sign in with others account?</p>
                         </div>
                         <div className="d-flex justify-content-center ">
                            <ul className="list-group list-group-horizontal list-group-flush">
                               <li className="list-group-item bg-transparent border-0">
                                  <a href="#"><img src="../../assets/images/brands/15.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="img60" /></a>
                               </li>
                               <li className="list-group-item bg-transparent border-0">
                                  <a href="#"><img src="../../assets/images/brands/08.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="gm" /></a>
                               </li>
                               <li className="list-group-item bg-transparent border-0">
                                  <a href="#"><img src="../../assets/images/brands/10.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="im" /></a>
                               </li>
                               <li className="list-group-item bg-transparent border-0">
                                  <a href="#"><img src="../../assets/images/brands/13.png" className="img-fluid avatar avatar-30 avatar-rounded" alt="li" /></a>
                               </li>
                            </ul>
                         </div>
                      </form>
                      <div className="new-account mt-3 text-center">
                         <p>Don't have an account? <a className="" href="../../dashboard/auth/sign-up.html">Click here to sign up</a></p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
   );
};

export default Login;

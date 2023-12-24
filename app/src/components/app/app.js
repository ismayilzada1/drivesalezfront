import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Store/Auth/authActions';
import { Routes, Route,useLocation } from 'react-router-dom';
import './app.css'
import NewAnnouncement from "../../pages/NewAnnouncement";
import Register from "../../pages/Auth/register";
import Login from "../../pages/Auth/login";
import NotFound from "../../pages/errors/NotFound";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import VerifyEmail from "../../pages/Auth/verifyEmail";
import ForgotPassword from "../../pages/Auth/forgotPassword";
import ResetPassword from "../../pages/Auth/resetPassword";
import Home from "../../pages/home";
import LoadingPage from "../ui/LoadingPage";
import ComingSoon  from '../../pages/StaticPages/ComingSoon'
import PrivacyPolicy from "../../pages/StaticPages/PrivacyPolicy";
import TermsOfUse from "../../pages/StaticPages/TermsOfUse";
import Profile from "../../pages/Profile";
import ChangePassword from "../../pages/Auth/ChangePassword"
import UpdateAccount from "../../pages/UpdateAccount";
import AnnouncementDetailsUserProfile from "../../pages/announcementDetailsUserProfile";
import AnnouncementDetails from "../../pages/announcementDetails";
import PrivateRoute from "../PrivateRoute";
import AuthLayout from "../../pages/Auth/AuthLayout";
import HomeLayout from "../../pages/HomeLayout"


import {useRoutes} from 'react-router-dom'
import routes from '../../routes'

function App() {

    // return useRoutes(routes);

    return (
        <div className="app-container">
            <Routes>
                <Route path={'/'} element={<HomeLayout/>}>
                    <Route index={true} element={<Home />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="terms-of-use" element={<TermsOfUse  />} />
                    <Route path="coming-soon" element={<ComingSoon  />} />
                    <Route path="AnnouncementDetails/:id" element={<AnnouncementDetails/>}/>
                    <Route path={'profile'} element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
                    <Route path={'updateAccount'} element={<PrivateRoute> <UpdateAccount/> </PrivateRoute>}/>
                    <Route path={'AnnouncementDetailsUserProfile/:id'} element={<PrivateRoute><AnnouncementDetailsUserProfile/></PrivateRoute>}></Route>
                    <Route path="new-announcement" element={<PrivateRoute><NewAnnouncement/></PrivateRoute>} />
                </Route>

                <Route path="/loading" element={<LoadingPage />} />

                <Route path={'/auth'} element={<AuthLayout/>}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="verifyEmail" element={<VerifyEmail />} />
                </Route>

                <Route path={'/changePassword'} element={<PrivateRoute><ChangePassword/></PrivateRoute>}></Route>

                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );


}

export default App;

import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Store/Auth/authActions';
import { Routes, Route,useLocation } from 'react-router-dom';
import './app.css'
import NewAnnouncement from "../../pages/NewAnnouncement";
import Register from "../../pages/register";
import Login from "../../pages/login";
import NotFound from "../../pages/errors/NotFound";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import VerifyEmail from "../../pages/verifyEmail";
import ForgotPassword from "../../pages/forgotPassword";
import ResetPassword from "../../pages/resetPassword";
import Home from "../../pages/home";
import AnnouncementDetails from "../../pages/announcementDetails";
import LoadingPage from "../ui/LoadingPage";
import ComingSoon  from '../../pages/ComingSoon'
import PrivacyPolicy from "../../pages/PrivacyPolicy";
import TermsOfUse from "../../pages/TermsOfUse";
import Profile from "../../pages/Profile";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const logoutAfterTimeout = () => {
            dispatch(logoutUser());
        };
        const timeoutId = setTimeout(logoutAfterTimeout, 14 * 60 * 60 * 1000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [dispatch]);


    const location = useLocation();

    const excludeHeaderFooterPaths = [
        "/login",
        "/register",
        "/verifyEmail",
        "/reset-password",
        "/forgot-password"

    ];

    const shouldDisplayHeaderFooter = !excludeHeaderFooterPaths.includes(location.pathname);


        return (
            <div className="app-container">
                {shouldDisplayHeaderFooter && <Header />}
                <Routes>
                    <Route path="/new-announcement" element={<NewAnnouncement />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-use" element={<TermsOfUse  />} />
                    <Route path="/profile" element={<Profile  />} />
                    <Route path="/coming-soon" element={<ComingSoon  />} />
                    <Route path="/verifyEmail" element={<VerifyEmail />} />
                    <Route path="/AnnouncementDetails" element={<AnnouncementDetails announcementId={'203ea3a6-bc81-4666-0778-08dbec5b6816'} />} />
                    <Route path="/loading" element={<LoadingPage />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                {shouldDisplayHeaderFooter && <Footer />}
            </div>
        );

}

export default App;

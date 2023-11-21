import React, { Component } from "react";
import { Routes, Route,useLocation } from 'react-router-dom';
import './app.css'
import NewAnnouncement from "../NewAnnouncement";
import Register from "../register";
import Login from "../login";
import NotFound from "../NotFound";
import Footer from "../Footer";
import Header from "../Header";
import VerifyEmail from "../verifyEmail";
import ForgotPassword from "../forgotPassword";
import ResetPassword from "../resetPassword";
import Home from "../home";
import AnnouncementDetails from "../announcementDetails";
import LoadingPage from "../LoadingPage";
import ComingSoon  from '../ComingSoon'

function App() {

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
                    <Route path="/coming-soon" element={<ComingSoon  />} />
                    <Route path="/verifyEmail" element={<VerifyEmail />} />
                    <Route path="/AnnouncementDetails" element={<AnnouncementDetails />} />
                    <Route path="/loading" element={<LoadingPage />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                {shouldDisplayHeaderFooter && <Footer />}
            </div>
        );

}

export default App;

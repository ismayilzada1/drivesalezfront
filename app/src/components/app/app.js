import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
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

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <Header/>
                <Routes>
                    <Route path="/new-announcement" element={<NewAnnouncement />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/verifyEmail" element={<VerifyEmail />} />
                    <Route path="/AnnouncementDetails" element={<AnnouncementDetails />} />
                    <Route path="/header" element={<Header />} />
                    <Route path="/loading" element={<LoadingPage />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>

                {/*{window.location.pathname !== "/login" && window.location.pathname !== "/register" && (*/}
                {/*    <div>*/}
                {/*        <Header />*/}
                {/*        <Footer/>*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        );
    }
}

export default App;

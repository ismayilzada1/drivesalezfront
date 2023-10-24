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

class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route
                        path="/new-announcement"
                        element={
                            <>
                                <Header />
                                <NewAnnouncement />
                            </>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/verifyEmail" element={<VerifyEmail />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer/>
            </div>
        );
    }
}

export default App;

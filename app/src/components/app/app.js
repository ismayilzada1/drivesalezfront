import React, {Component, useState} from "react";
import { Routes, Route } from 'react-router-dom';
import './app.css'
import NewAnnouncement from "../NewAnnouncement";
import Register from "../register";
import Login from "../login";
import NotFound from "../NotFound";
import Footer from "../Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/new-announcement" element={<NewAnnouncement />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer/>
            </div>
        )
    }
}

export default App;
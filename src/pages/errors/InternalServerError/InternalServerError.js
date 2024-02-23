import React from 'react';
import "./InternalServerError.css"
const InternalServerError = () => {
    return (
    <div className="full-screen-video">
        <video autoPlay loop playsInline>
            <source src={"../../assets/videos/TheSimpsonsTechnicalDifficulties.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>

    );
};

export default InternalServerError;
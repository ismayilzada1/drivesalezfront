import React from 'react';
import './LoadingPage.css';

const LoadingPage = () => {
    return (
        <div className="loading-page">
            <div className="spinner-container">
                <div className="spinner-border text-primary" role="status"></div>
            </div>
        </div>
    );
};

export default LoadingPage;

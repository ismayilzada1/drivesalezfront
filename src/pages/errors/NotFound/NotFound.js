import React, {Component, useState} from "react";
import './NotFound.css'

const NotFound=()=>{
    return (
        <div className="wrapper">
            <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>

            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="container">
                    <div className="container text-center ">
                        <img src="../../assets/images/error/404.webp" className="img-fluid mb-4 w-50" alt=""/>
                            <h2 className="mb-0 mt-4">Page Not Found.</h2>
                            <p className="mt-2">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
                            <div className="d-flex justify-content-center">
                                <a href="/" className="btn btn-primary">Back to Home</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        Drive Salez
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" style={{ fontSize: '18px' }}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ fontSize: '18px' }}>
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ fontSize: '18px' }}>
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" style={{ fontSize: '18px' }}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;

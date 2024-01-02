import React, {useState, useEffect} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './Header.css';
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux';
import {logoutUser} from '../../../Store/Auth/authActions';
import Logo from "../Logo";
import {
    GetAllFilterAnnouncements, GetAnnouncements
} from "../../../Store/Announcement/AnnouncementActions";
import commonDataService from "../../../api-services/CommonDataService";
import {setAnnouncements, setPageNumber, setFilterParams} from '../../../Store/Announcement/AnnouncementSlice';
import '../../../i18n'
import {useTranslation} from "react-i18next";

const Header = () => {


    const {user, accessToken} = useSelector ((state) => state.auth);
    const isLoggedIn = useSelector ((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch ();
    const CommonDataService = new commonDataService ();
    const [carBodyTypes, setCarBodyTypes] = useState ([]);

    const {pageNumber} = useSelector ((state) => state.announcement);





    const pageSize = 4;

    useEffect (() => {
        Promise.all ([
            CommonDataService.getAllCarBodyTypes (),
        ])
            .then (([
                        carBodyTypesData,
                    ]) => {
                setCarBodyTypes (carBodyTypesData);
            })
            .catch ((error) => {
                console.error ('Error fetching data:', error);
            })
            .finally (() => {
                if (carBodyTypes.length === 0) {
                    console.warn ('No car models data received.');
                } else {
                }
            });


    }, []);

    const [isMobile, setIsMobile] = useState (window.innerWidth <= 767);
    const navigate = useNavigate ();

    const {t, i18n} = useTranslation ();


    useEffect (() => {
        const handleResize = () => {
            setIsMobile (window.innerWidth <= 767);
        };

        window.addEventListener ('resize', handleResize);

        return () => {
            window.removeEventListener ('resize', handleResize);
        };
    }, []);

    const handleAddVehicleButton = () => navigate ('/new-announcement');

    const handleSignUpButton = () => navigate ('/auth/register');


    const handleLanguageChange = async (lang,e) => {
        e.preventDefault();
        await i18n.changeLanguage (lang);
        localStorage.setItem('lng',lang);
    }

    const handleLogout = async (e) => {
        e.preventDefault ();

        if (accessToken) {
            await dispatch (logoutUser (accessToken));
        }
        else{
            const token=sessionStorage.getItem('authToken');
            if(token){
                await dispatch (logoutUser (token));
            }
            else{
                console.log ("Something went wrong with tokens");
            }
        }
    };

    const handleMotorcycleButton = async () => {
        const motorcycleId = carBodyTypes.find (type => type.bodyType === 'Motorcycle')?.id;
        const filterUrl = `&bodyTypesIds=${motorcycleId}`

        try {
            dispatch (setFilterParams (filterUrl));
            // dispatch (setAnnouncements ([]));
            // dispatch (setPageNumber (1));

            // const response = await dispatch (GetAllFilterAnnouncements (filterUrl));
            // console.log (response);

        } catch (error) {
            console.log (error);
        }
    }

    const handleTruckButton = async () => {
        const TruckId = carBodyTypes.find (type => type.bodyType === 'Truck')?.id;
        const filterUrl = `&bodyTypesIds=${TruckId}`

        try {
            dispatch (setFilterParams (filterUrl));
            dispatch (setAnnouncements ([]));
            dispatch (setPageNumber (1));

            await dispatch (GetAllFilterAnnouncements (filterUrl));

        } catch (error) {
            console.log (error);
        }
    }

    const handleHomeButton = async () => {

        try {
            dispatch (setFilterParams (null));
            dispatch (setAnnouncements ([]));
            dispatch (setPageNumber (1));
            dispatch (GetAnnouncements (pageNumber, pageSize))
                .then ((response) => {
                    console.log (response);
                })
                .catch ((error) => {
                    console.error ('Error fetching announcements:', error);
                });
        } catch (error) {
            console.log (error);
        }

    }

    return (

        <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar rounded">

            <div className="container w-100 navbar-inner">

                <a href="/" className="navbar-brand p-0">
                    <Logo size="50px"/>
                    <span style={{
                        fontSize: "1.4em",
                        color: "#f52123",
                        fontWeight: "550",
                        marginLeft: ".4em"
                    }}>DriveSalez</span>
                </a>

                <div className="sidebar-toggle sidebar-toggle-responsive" data-toggle="sidebar" data-active="true">
                    <i className="icon">
                        <svg width="20px" height="20px" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
                        </svg>
                    </i>
                </div>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                  <span className="navbar-toggler-bar bar1 mt-2"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </span>
                </button>

                <div className="collapse navbar-collapse rounded" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto align-items-center navbar-list mb-2 mb-lg-0">




                        <li className="nav-item d-none d-lg-block me-3">
                            <NavLink to="/" onClick={handleHomeButton} className="nav-link" activeclassname="active">
                                {t ('home')}
                            </NavLink>
                        </li>
                        <li className="nav-item d-none d-lg-block me-3">
                            <NavLink to="/" className="nav-link" onClick={handleMotorcycleButton}
                                     activeclassname="active">
                                {t ('motorcycles')}
                            </NavLink>
                        </li>
                        <li className="nav-item d-none d-lg-block me-3">
                            <NavLink to="/" onClick={handleTruckButton} className="nav-link" activeclassname="active">
                                {t ('trucks')}
                            </NavLink>
                        </li>
                        <li className="nav-item d-none d-lg-block me-3">
                            <NavLink to="/coming-soon" className="nav-link" activeclassname="active">
                                {t ('boats')}
                            </NavLink>
                        </li>
                        <li className="nav-item d-none d-lg-block me-3">
                            <NavLink to="/coming-soon" className="nav-link" activeclassname="active">
                                {t ('aircrafts')}
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a href="#" className="search-toggle nav-link" id="flagDropdown"
                               data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={`../assets/images/flag/flag-${i18n.language}.png`} className="img-fluid"
                                     alt="user" style={{height: '30px', minWidth: '30px', width: '30px'}}/>
                                <span className="bg-primary"></span>
                            </a>
                            <div className="sub-drop dropdown-menu dropdown-menu-end p-0"
                                 aria-labelledby="dropdownMenuButton2">
                                <div className="card shadow-none m-0 border-0">
                                    <div className=" p-0 ">
                                        <ul className="list-group list-group-flush p-0">
                                            <li className="iq-sub-card list-group-item"
                                                onClick={(e) => handleLanguageChange ('en',e)}><a className="p-0" href="#"><img
                                                src="../assets/images/flag/flag-en.png" alt="img-flaf"
                                                className="img-fluid me-2"
                                                style={{height: '30px', minWidth: '30px', width: '30px'}}/>English</a>
                                            </li>
                                            <li className="iq-sub-card list-group-item"
                                                onClick={(e) => handleLanguageChange ('aze',e)}><a className="p-0"
                                                                                                href="#"><img
                                                src="../assets/images/flag/flag-aze.png" alt="img-flaf"
                                                className="img-fluid me-2" style={{
                                                height: '30px',
                                                minWidth: '30px',
                                                width: '30px'
                                            }}/>Azerbaijani</a></li>
                                            <li className="iq-sub-card list-group-item"
                                                onClick={(e) => handleLanguageChange ('ru',e)}><a className="p-0" href="#"><img
                                                src="../assets/images/flag/flag-ru.png" alt="img-flaf"
                                                className="img-fluid me-2"
                                                style={{height: '30px', minWidth: '30px', width: '30px'}}/>Russian</a>
                                            </li>
                                            <li className="iq-sub-card list-group-item"
                                                onClick={(e) => handleLanguageChange ('tr',e)}><a className="p-0" href="#"><img
                                                src="../assets/images/flag/flag-tr.png" alt="img-flaf"
                                                className="img-fluid me-2"
                                                style={{height: '30px', minWidth: '30px', width: '30px'}}/>Turkish</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item dropdown d-lg-none position-relative">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Menu
                            </a>
                            <ul className="dropdown-menu mx-auto" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="/">
                                        {t ('home')}
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">
                                        {t ('trucks')}
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">
                                        {t ('motorcycles')}
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/coming-soon">
                                        {t ('boats')}
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/coming-soon">
                                        {t ('aircrafts')}
                                    </a>
                                </li>
                            </ul>
                        </li>


                        {/*Messenger*/}

                        {/*<li className="nav-item dropdown">*/}
                        {/*    <a href="#" className="nav-link" id="mail-drop" data-bs-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">*/}
                        {/*        <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*            <path opacity="0.4" d="M22 15.94C22 18.73 19.76 20.99 16.97 21H16.96H7.05C4.27 21 2 18.75 2 15.96V15.95C2 15.95 2.006 11.524 2.014 9.298C2.015 8.88 2.495 8.646 2.822 8.906C5.198 10.791 9.447 14.228 9.5 14.273C10.21 14.842 11.11 15.163 12.03 15.163C12.95 15.163 13.85 14.842 14.56 14.262C14.613 14.227 18.767 10.893 21.179 8.977C21.507 8.716 21.989 8.95 21.99 9.367C22 11.576 22 15.94 22 15.94Z" fill="currentColor"></path>*/}
                        {/*            <path d="M21.4759 5.67351C20.6099 4.04151 18.9059 2.99951 17.0299 2.99951H7.04988C5.17388 2.99951 3.46988 4.04151 2.60388 5.67351C2.40988 6.03851 2.50188 6.49351 2.82488 6.75151L10.2499 12.6905C10.7699 13.1105 11.3999 13.3195 12.0299 13.3195C12.0339 13.3195 12.0369 13.3195 12.0399 13.3195C12.0429 13.3195 12.0469 13.3195 12.0499 13.3195C12.6799 13.3195 13.3099 13.1105 13.8299 12.6905L21.2549 6.75151C21.5779 6.49351 21.6699 6.03851 21.4759 5.67351Z" fill="currentColor"></path>*/}
                        {/*        </svg>*/}
                        {/*        <span className="bg-primary count-mail"></span>*/}
                        {/*    </a>*/}
                        {/*    <div className="sub-drop dropdown-menu dropdown-menu-end p-0" aria-labelledby="mail-drop">*/}
                        {/*        <div className="card shadow-none m-0">*/}
                        {/*            <div className="card-header d-flex justify-content-between bg-primary py-3">*/}
                        {/*                <div className="header-title">*/}
                        {/*                    <h5 className="mb-0 text-white">All Message</h5>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className="card-body p-0 ">*/}
                        {/*                <a href="#" className="iq-sub-card">*/}
                        {/*                    <div className="d-flex  align-items-center">*/}
                        {/*                        <div className="">*/}
                        {/*                            <img className="avatar-40 rounded-pill bg-soft-primary p-1" src="../assets/images/avatars/10.png" alt=""/>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="ms-3">*/}
                        {/*                            <h6 className="mb-0 ">Bni Emma Watson</h6>*/}
                        {/*                            <small className="float-start font-size-12">13 Jun</small>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </a>*/}
                        {/*                <a href="#" className="iq-sub-card">*/}
                        {/*                    <div className="d-flex align-items-center">*/}
                        {/*                        <div className="">*/}
                        {/*                            <img className="avatar-40 rounded-pill bg-soft-primary p-1" src="../assets/images/avatars/01.png" alt=""/>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="ms-3">*/}
                        {/*                            <h6 className="mb-0 ">Lorem Ipsum Watson</h6>*/}
                        {/*                            <small className="float-start font-size-12">20 Apr</small>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </a>*/}
                        {/*                <a href="#" className="iq-sub-card">*/}
                        {/*                    <div className="d-flex align-items-center">*/}
                        {/*                        <div className="">*/}
                        {/*                            <img className="avatar-40 rounded-pill bg-soft-primary p-1" src="../assets/images/avatars/09.png" alt=""/>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="ms-3">*/}
                        {/*                            <h6 className="mb-0 ">Why do we use it?</h6>*/}
                        {/*                            <small className="float-start font-size-12">30 Jun</small>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </a>*/}
                        {/*                <a href="#" className="iq-sub-card">*/}
                        {/*                    <div className="d-flex align-items-center">*/}
                        {/*                        <div className="">*/}
                        {/*                            <img className="avatar-40 rounded-pill bg-soft-primary p-1" src="../assets/images/avatars/08.png" alt=""/>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="ms-3">*/}
                        {/*                            <h6 className="mb-0 ">Variations Passages</h6>*/}
                        {/*                            <small className="float-start font-size-12">12 Sep</small>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </a>*/}
                        {/*                <a href="#" className="iq-sub-card">*/}
                        {/*                    <div className="d-flex align-items-center">*/}
                        {/*                        <div className="">*/}
                        {/*                            <img className="avatar-40 rounded-pill bg-soft-primary p-1" src="../assets/images/avatars/07.png" alt=""/>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="ms-3">*/}
                        {/*                            <h6 className="mb-0 ">Lorem Ipsum generators</h6>*/}
                        {/*                            <small className="float-start font-size-12">5 Dec</small>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </a>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</li>*/}


                        {isLoggedIn ?
                            (
                                <li className='nav-item'>
                                    <button onClick={handleAddVehicleButton}
                                            className='btn btn-plus btn-square d-flex justify-content-center align-items-center'
                                            style={{backgroundColor: '#f54114', color: '#ffffff', border: 'none'}}>
                                        {isMobile ? <i className="fas fa-plus"></i> : <><i
                                            className="fas fa-plus me-2"></i>{t('addVehicle')}</>}
                                    </button>
                                </li>
                            ) : null}


                        {isLoggedIn ?
                            (
                                <li className="nav-item dropdown ms-1">
                                    <a className="nav-link py-0 d-flex align-items-center" href="#" id="navbarDropdown"
                                       role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="../assets/images/icons/user.png" alt="User-Profile"
                                             className="img-fluid avatar avatar-50 avatar-rounded"/>
                                        <div className="caption ms-3 d-none d-md-block ">
                                            <h6 className="mb-0 caption-title">{user.firstName} {user.lastName}</h6>
                                            <p className="mb-0 caption-sub-title">{user.email}</p>
                                        </div>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/profile">{t("profile")}</a></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item" href='/' onClick={handleLogout}>{t("signout")}</a></li>
                                    </ul>
                                </li>
                            ) :
                            (
                                <li className='nav-item ms-2'>
                                    <button onClick={handleSignUpButton}
                                            className='btn btn-plus btn-square d-flex justify-content-center align-items-center'
                                            style={{backgroundColor: '#f54114', color: '#ffffff', border: 'none'}}>
                                        {isMobile ? <i className="fas fa-user"></i> : <><i
                                            className="fas fa-user me-2"></i>{t ('sign_up')}</>}
                                    </button>
                                </li>
                            )}


                    </ul>
                </div>

            </div>

        </nav>

    );
};

export default Header;
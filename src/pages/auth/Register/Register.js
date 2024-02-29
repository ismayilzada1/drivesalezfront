import React, { useState } from 'react';
import Logo from '../../../components/ui/Logo';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../Store/Auth/authActions';
import {useTranslation} from "react-i18next";
import './Register.css'
import {Helmet} from "react-helmet";
function Register() {

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);


    const navigate = useNavigate();

    const [termsChecked, setTermsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setTermsChecked(!termsChecked);
    };

    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Password: '',
        ConfirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSignUp = async () => {
        if (
            !formData.FirstName ||
            !formData.LastName ||
            !formData.Email ||
            !formData.PhoneNumber ||
            !formData.Password ||
            !formData.ConfirmPassword ||
            !termsChecked
        ) {
            return;
        }
        const requestBody = {
            firstName: formData.FirstName,
            lastName: formData.LastName,
            email: formData.Email,
            phoneNumbers: [{ id: 0, phoneNumber: formData.PhoneNumber }],
            password: formData.Password,
            confirmPassword: formData.ConfirmPassword,
        };

        try {
            const response = await dispatch(registerUser(requestBody));
            console.log (response);
            if(response){
                navigate('/auth/verifyEmail');
            }
        }
        catch (error) {
        }
    };


    const {t, i18n} = useTranslation ();

    const handleLanguageChange = async (lang,e) => {
        e.preventDefault();
        await i18n.changeLanguage (lang);
        localStorage.setItem('lng',lang);
    }

    return (
        <div className="wrapper">

            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="top-right-dropdown">
                <ul className="navbar-nav ms-auto align-items-center navbar-list mb-2 mb-lg-0">
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
                </ul>
            </div>
            <div className="main-auth-page">
                <Logo size="80px" />

                <div className="clip-board">
                    <div className="container">
                        <div className="row auth-details-card">
                            <div className="col-lg-12">
                                <div className="card iq-auth-card mb-0 row">
                                    <img
                                        src="../../assets/images/auth/01.webp"
                                        alt="background"
                                        className="img-fluid w-75 position-absolute"
                                        style={{ top: '8%' }}
                                    />
                                    <div className="card-body col-5 offset-7">
                                        <div className="auth-form">
                                            <h2 className="text-center mb-3">{t("nav.signUp")}</h2>
                                            <form>
                                                <p className="text-center"> {t("nav.createAccount")}</p>
                                                <div className="row text-start mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="input1"
                                                                placeholder={t("nav.firstName")}
                                                                value={formData.FirstName}
                                                                onChange={handleChange}
                                                                name="FirstName"
                                                            />
                                                            <label htmlFor="input1">{t("nav.firstName")}</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="input2"
                                                                placeholder={t("nav.lastName")}
                                                                value={formData.LastName}
                                                                onChange={handleChange}
                                                                name="LastName"
                                                            />
                                                            <label htmlFor="input2">{t("nav.lastName")}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row text-start mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="input3"
                                                                placeholder="Email"
                                                                value={formData.Email}
                                                                onChange={handleChange}
                                                                name="Email"
                                                            />
                                                            <label htmlFor="input3">Email</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="input4"
                                                                placeholder={t("nav.phoneNo")}
                                                                value={formData.PhoneNumber}
                                                                onChange={handleChange}
                                                                name="PhoneNumber"
                                                            />
                                                            <label htmlFor="input4">{t("nav.phoneNo")}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row text-start mb-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                id="input5"
                                                                placeholder={t("nav.password")}
                                                                value={formData.Password}
                                                                onChange={handleChange}
                                                                name="Password"
                                                            />
                                                            <label htmlFor="input5">{t("nav.password")}</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                id="input6"
                                                                placeholder={t("nav.confirmPassword")}
                                                                value={formData.ConfirmPassword}
                                                                onChange={handleChange}
                                                                name="ConfirmPassword"
                                                            />
                                                            <label htmlFor="input6">{t("nav.confirmPassword")}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-center mb-4">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="termsCondition"
                                                        checked={termsChecked}
                                                        onChange={handleCheckboxChange}
                                                    />
                                                    <label
                                                        className="ms-2 form-check-label"
                                                        htmlFor="termsCondition"
                                                    >
                                                        {t("nav.termsCondition")}
                                                    </label>
                                                </div>
                                                <div className="text-center">
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={handleSignUp}
                                                        disabled={loading || !termsChecked}
                                                    >
                                                        {loading ? t("nav.signingUp") : t("nav.signUp")}
                                                    </button>
                                                </div>

                                                {alert.show && (
                                                    <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-warning'} mt-3`} role="alert">
                                                        {alert.message}
                                                    </div>
                                                )}
                                            </form>
                                            <div className="new-account mt-3 text-center">
                                                <p className="mb-0">
                                                    {t("nav.alreadyHaveAccount")}{' '}
                                                    <a className="text-primary" href="/auth/Login">
                                                        {t("nav.signIn")}
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="responsive-card mb-4">
                <div className="card">
                    <div className="card-body">
                        <div className="auth-form">
                            <h2 className="text-center mb-3">{t('nav.signUp')}</h2>
                            <form className="ath-text-input">
                                <p className="text-center">{t("nav.createAccount")}</p>
                                <div className="row text-start mb-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="input1"
                                                value={formData.FirstName}
                                                onChange={handleChange}
                                                placeholder={t("nav.firstName")}
                                                name="FirstName"
                                            />
                                            <label htmlFor="input1">{t("nav.firstName")}</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="input2"
                                                value={formData.LastName}
                                                onChange={handleChange}
                                                placeholder={t("nav.lastName")}
                                                name="LastName"
                                            />
                                            <label htmlFor="input2">{t("nav.lastName")}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-start mb-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={formData.Email}
                                                onChange={handleChange}
                                                id="input3"
                                                placeholder="Email"
                                                name="Email"
                                            />
                                            <label htmlFor="input3">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="input4"
                                                value={formData.PhoneNumber}
                                                onChange={handleChange}
                                                placeholder={t("nav.phoneNo")}
                                                name="PhoneNumber"
                                            />
                                            <label htmlFor="input4">{t("nav.phoneNo")}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-start mb-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="input5"
                                                value={formData.Password}
                                                onChange={handleChange}
                                                placeholder={t("nav.password")}
                                                name="Password"
                                            />
                                            <label htmlFor="input5">{t("nav.password")}</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="input6"
                                                value={formData.ConfirmPassword}
                                                onChange={handleChange}
                                                placeholder={t("nav.confirmPassword")}
                                                name="ConfirmPassword"
                                            />
                                            <label htmlFor="input6">{t("nav.confirmPassword")}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="termsCondition"
                                        checked={termsChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label
                                        className="ms-2 form-check-label"
                                        htmlFor="termsCondition"
                                    >
                                        {t("nav.termsCondition")}
                                    </label>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleSignUp}
                                        disabled={loading}
                                    >
                                        {loading ? t("nav.signingUp") : t("nav.signUp")}
                                    </button>
                                </div>
                                <div className="text-center mt-3">
                                    <p>{t("nav.orSignInWith")}</p>
                                </div>
                                <div className="d-flex justify-content-center ">
                                    <ul className="list-group list-group-horizontal list-group-flush">
                                        <li className="list-group-item bg-transparent border-0">
                                            <a href="#">
                                                <img
                                                    src="../../assets/images/brands/15.png"
                                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                                    alt="img60"
                                                />
                                            </a>
                                        </li>
                                        <li className="list-group-item bg-transparent border-0">
                                            <a href="#">
                                                <img
                                                    src="../../assets/images/brands/08.png"
                                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                                    alt="gm"
                                                />
                                            </a>
                                        </li>
                                        <li className="list-group-item bg-transparent border-0">
                                            <a href="#">
                                                <img
                                                    src="../../assets/images/brands/10.png"
                                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                                    alt="im"
                                                />
                                            </a>
                                        </li>
                                        <li className="list-group-item bg-transparent border-0">
                                            <a href="#">
                                                <img
                                                    src="../../assets/images/brands/13.png"
                                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                                    alt="li"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                            <div className="new-account mt-3 text-center">
                                <p className="mb-0">
                                    {t("nav.alreadyHaveAccount")}{' '}
                                    <a className="text-primary" href="/auth/Login">
                                        {t("nav.signIn")}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

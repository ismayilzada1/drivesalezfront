import React from 'react';
import './AboutUs.css'
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";

const AboutUs = () => {

    const {t}=useTranslation();

    const handleEclipseClick = () => {
        window.open("https://eclipsedg.site/", "_blank");
    };

    return (
        <>

            <Helmet>
                <title>DriveSalez - About Us</title>
            </Helmet>

            <div className="py-5 team4">
                <div className="container text-center my-auto ">

                    <p onClick={handleEclipseClick} className={"AboutUsTitle"}>Eclipse DG</p>

                    <div className={"AboutUsEclipseImg"}>
                        <img onClick={handleEclipseClick} src="../assets/images/aboutUs/eclipse.png" alt="Eclipse"/>
                    </div>


                    {/*<div className="row justify-content-center mb-4">*/}
                    {/*    <div className="col-md-7 text-center">*/}
                    {/*        <h3 className="mb-3">{t("TeamSectionTitle")}</h3>*/}
                    {/*        <h6 className="subtitle">{t("TeamSectionSubtitle")}</h6>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="row d-flex justify-content-center align-items-center">*/}
                    {/*    <div className="col-lg-6 mt-4 mb-5">*/}
                    {/*        <div className="row align-items-center">*/}
                    {/*            <div className="col-md-12 d-flex align-items-center justify-content-center">*/}
                    {/*                <img src="../assets/images/aboutUs/team-member1.jpeg" alt="wrapkit" className=" team-image img-fluid rounded-circle" />*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-12 text-center">*/}
                    {/*                <div className="pt-2">*/}
                    {/*                    <h5 className="mt-4 font-weight-medium mb-0">Ismayilzada Mahammad</h5>*/}
                    {/*                    <h6 className="subtitle mb-3">{t("TeamMember1Role")}</h6>*/}
                    {/*                    <p>{t("TeamMember1Description")}</p>*/}
                    {/*                    <ul className="list-inline">*/}
                    {/*                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/ismayilzada-mahammad/" target={"_blank"} className="text-decoration-none d-block px-1"><i className="fab fa-linkedin"></i></a></li>*/}
                    {/*                        <li className="list-inline-item"><a href="https://www.instagram.com/ichbinmaqa" target={"_blank"} className="text-decoration-none d-block px-1"><i className="fab fa-instagram"></i></a></li>*/}
                    {/*                    </ul>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-lg-6 mt-4 mb-5">*/}
                    {/*        <div className="row align-items-center">*/}
                    {/*            <div className="col-md-12 d-flex align-items-center justify-content-center">*/}
                    {/*                <img src="../assets/images/aboutUs/team-member2.jpg" alt="wrapkit" className="team-image img-fluid rounded-circle" />*/}
                    {/*            </div>*/}
                    {/*            <div className="col-md-12 text-center">*/}
                    {/*                <div className="pt-2">*/}
                    {/*                    <h5 className="mt-4 font-weight-medium mb-0">Ahmad Ahmadzada</h5>*/}
                    {/*                    <h6 className="subtitle mb-3">{t("TeamMember2Role")}</h6>*/}
                    {/*                    <p>{t("TeamMember2Description")}</p>*/}
                    {/*                    <ul className="list-inline">*/}
                    {/*                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/ahmadzada-ahmad/" target={"_blank"} className="text-decoration-none d-block px-1"><i className="fab fa-linkedin"></i></a></li>*/}
                    {/*                        <li className="list-inline-item"><a href="https://www.instagram.com/a.ahmadoff" target={"_blank"} className="text-decoration-none d-block px-1"><i className="fab fa-instagram"></i></a></li>*/}
                    {/*                    </ul>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>


                <section className="py-3 ">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                <h2 className="mb-4 display-5 text-center">{t("thanksTo")}</h2>
                                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
                            </div>
                        </div>
                    </div>

                    <div className="container overflow-hidden">
                        <div className="row gy-4">


                            <div className="col-6 col-md-4 col-xl-3 text-center">
                                <a href="https://azure.com" target={"_blank"}>
                                    <div className="custom-partner-card text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img style={{ filter: 'grayscale(100%)' }} width="auto" height="65" src="../assets/images/aboutUs/azure-logo.png" alt="Azure Logo"/>
                                    </div>
                                </a>
                            </div>

                            <div className="col-6 col-md-4 col-xl-3 text-center">
                                <a href="https://itstep.org" target={"_blank"}>
                                    <div className="custom-partner-card text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img style={{ filter: 'grayscale(100%)' }} width="auto" height="65"  src="../assets/images/aboutUs/stepit-logo.png" alt="Step It Logo"/>
                                    </div>
                                </a>
                            </div>

                            <div className="col-6 col-md-4 col-xl-3 text-center">
                                <a href="https://cloud.google.com/vision" target={"_blank"}>
                                    <div className="custom-partner-card text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img style={{ filter: 'grayscale(100%)' }} width="auto" height="65"  src="../assets/images/aboutUs/google-vision-ai-logo.png" alt="Vision Ai Logo"/>
                                    </div>
                                </a>
                            </div>

                            <div className="col-6 col-md-4 col-xl-3 text-center">
                                <a href="https://avazdg.com" target={"_blank"}>
                                    <div className="custom-partner-card text-secondary bg-light px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img style={{ filter: 'grayscale(100%)' }} width="auto" height="65"  src="../assets/images/aboutUs/avazdg-logo.png" alt="Avaz DG Logo"/>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </section>
            </div>



        </>
    );
};

export default AboutUs;
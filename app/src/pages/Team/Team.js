import React from 'react';
import './Team.css'
import {useTranslation} from "react-i18next";

const Team = () => {

    const {t}=useTranslation();

    return (
        <>

            <div className="py-5 team4">
                <div className="container text-center my-auto">
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-7 text-center">
                            <h3 className="mb-3">{t("TeamSectionTitle")}</h3>
                            <h6 className="subtitle">{t("TeamSectionSubtitle")}</h6>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 mt-4 mb-5">
                            <div className="row align-items-center">
                                <div className="col-md-12 d-flex align-items-center justify-content-center">
                                    <img src="../assets/images/team/team-member1.jpeg" alt="wrapkit" className=" team-image img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="pt-2">
                                        <h5 className="mt-4 font-weight-medium mb-0">Ismayilzada Mahammad</h5>
                                        <h6 className="subtitle mb-3">{t("TeamMember1Role")}</h6>
                                        <p>{t("TeamMember1Description")}</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/ismayilzada-mahammad/" target={"_blank"} className="text-decoration-none d-block px-1"><i className="fab fa-linkedin"></i></a></li>
                                            <li className="list-inline-item"><a href="https://www.instagram.com/ichbinmaqa" target={"_blank"} className="text-decoration-none d-block px-1"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mb-5">
                            <div className="row align-items-center">
                                <div className="col-md-12 d-flex align-items-center justify-content-center">
                                    <img src="../assets/images/team/team-member2.jpg" alt="wrapkit" className="team-image img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="pt-2">
                                        <h5 className="mt-4 font-weight-medium mb-0">Ahmad Ahmadzada</h5>
                                        <h6 className="subtitle mb-3">{t("TeamMember2Role")}</h6>
                                        <p>{t("TeamMember2Description")}</p>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/ahmadzada-ahmad/" target={"_blank"} className="text-decoration-none d-block px-1"><i className="fab fa-linkedin"></i></a></li>
                                            <li className="list-inline-item"><a href="https://www.instagram.com/a.ahmadoff" target={"_blank"} className="text-decoration-none d-block px-1"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Team;
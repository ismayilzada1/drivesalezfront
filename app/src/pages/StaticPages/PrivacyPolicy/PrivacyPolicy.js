import React from "react";
import './PrivacyPolicy.css';
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";

const PrivacyPolicy = () => {

    const {t} = useTranslation ();

    return (
        <>

            <Helmet>
                <title>Privacy Policy</title>
            </Helmet>

            <div className="container-fluid content-inner mt-5 py-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">{t("privacyPolicy.title")}</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        {t("privacyPolicy.intro")}
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">{t("privacyPolicy.informationWeCollect")}</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        {t("privacyPolicy.informationWeCollectContent")}
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">{t("privacyPolicy.howWeUseYourInformation")}</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        {t("privacyPolicy.howWeUseYourInformationContent")}
                                    </p>
                                </div>
                            </div>



                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">{t("privacyPolicy.sharingYourInformation")}</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        {t("privacyPolicy.sharingYourInformationContent")}
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">
                                            {t("privacyPolicy.cookiesAndTechnologies")}
                                        </h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        {t("privacyPolicy.cookiesAndTechnologiesContent")}
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">{t("privacyPolicy.security")}</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        {t("privacyPolicy.securityContent")}
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">
                                            {t("privacyPolicy.changesToPrivacyPolicy")}
                                        </h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        {t("privacyPolicy.changesToPrivacyPolicyContent")}
                                    </p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">{t("privacyPolicy.contactUs")}</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        {t("privacyPolicy.contactUsContent")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;

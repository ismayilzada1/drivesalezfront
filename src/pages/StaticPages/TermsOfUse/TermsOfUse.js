import React from "react";
import './TermsOfUse.css'
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";

const TermsOfUse=()=>{

    const {t}=useTranslation();

    return (
        <>

            <Helmet>
                <title>Terms Of Use</title>
            </Helmet>

            <div className="conatiner-fluid content-inner mt-5 py-0">
                <div id="faqAccordion" className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="accordion custom-accordion" id="accordionExample">

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            {t('termsOfUse.acceptanceOfTerms')}
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {t('termsOfUse.acceptanceOfTermsContent')}
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            {t('termsOfUse.useOfTheWebsite')}
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className='list-group'>
                                                {t("termsOfUse.useOfTheWebsiteContent", { returnObjects: true }).map((item, index) => (
                                                    <li key={index} className='list-group-item'>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            {t('termsOfUse.vehicleListingsAndSales')}
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className='list-group'>
                                                {t("termsOfUse.vehicleListingsAndSalesContent", { returnObjects: true }).map((item, index) => (
                                                    <li key={index} className='list-group-item'>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            {t("termsOfUse.intellectualProperty")}
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className='list-group'>
                                                {t("termsOfUse.intellectualPropertyContent", { returnObjects: true }).map((item, index) => (
                                                    <li key={index} className='list-group-item'>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            {t("termsOfUse.userConduct")}
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className='list-group'>
                                                {t("termsOfUse.userConductContent", { returnObjects: true }).map((item, index) => (
                                                    <li key={index} className='list-group-item'>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            {t("termsOfUse.limitationOfLiability")}
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {t("termsOfUse.limitationOfLiabilityContent")}
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            {t("termsOfUse.termination")}
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {t("termsOfUse.terminationContent")}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TermsOfUse;
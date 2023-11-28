import React from "react";
import './TermsOfUse.css'

const TermsOfUse=()=>{
    return (
        <>
            <div className="conatiner-fluid content-inner mt-5 py-0">
                <div id="faqAccordion" className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="accordion custom-accordion" id="accordionExample">

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Acceptance of Terms
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. These terms may be updated from time to time without notice, and it is your responsibility to review them periodically.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Use of the Website
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className='list-group'>
                                                <li className='list-group-item'>You must be at least 18 years old to use this Website.</li>
                                                <li className='list-group-item'>You agree to provide accurate and up-to-date information when using the Website.</li>
                                                <li className='list-group-item'>ou are solely responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Vehicle Listings and Sales
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className='list-group'>
                                                <li className='list-group-item'>DriveSalezTM is not responsible for the accuracy of information provided by sellers on the Website.</li>
                                                <li className='list-group-item'>All sales and transactions conducted through the Website are solely between the buyer and the seller. DriveSalezTM is not a party to any such transactions and is not liable for any disputes arising from them.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Intellectual Property
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className='list-group'>
                                                <li className='list-group-item'>All content on the Website, including but not limited to text, graphics, logos, and images, is the property of DrizeSalezTM and is protected by intellectual property laws.</li>
                                                <li className='list-group-item'>You may not reproduce, distribute, or display any portion of the content without the express written consent of DrizeSalezTM.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            User Conduct
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className='list-group'>
                                                <li className='list-group-item'>You agree not to use the Website for any unlawful purpose or in violation of these Terms of Use.</li>
                                                <li className='list-group-item'>You may not engage in any conduct that could damage, disable, or overburden the Website.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            Limitation of Liability
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            DriveSalezTM is not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the Website.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            Termination
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            DriveSalezTM reserves the right to terminate or suspend your access to the Website without notice for any reason.
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
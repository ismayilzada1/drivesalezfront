import React from "react";
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <>
            <div className="container-fluid content-inner mt-5 py-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Card 1 */}
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">Privacy Policy</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        This Privacy Policy explains how [Your Company] collects,
                                        uses, and protects your personal information when you use our
                                        website. By using our website, you consent to the practices
                                        described in this policy.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">Information We Collect</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        We may collect various types of personal information, such
                                        as your name, contact information, payment details, and
                                        browsing behavior when you register on our site, submit
                                        forms, or engage in transactions. This information allows us
                                        to provide and improve our services, personalize your
                                        experience, and fulfill legal obligations.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">How We Use Your Information</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        We use the information we collect for various purposes,
                                        including facilitating transactions, providing customer
                                        support, personalizing your experience, and complying with
                                        legal obligations. Additionally, the data helps us analyze
                                        user preferences and improve the functionality and content
                                        of our website.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">Sharing Your Information</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        We may share your information with third parties for
                                        purposes such as service providers, legal compliance, and
                                        with your consent. These third parties are obligated to
                                        maintain the confidentiality and security of your
                                        information. We do not sell, rent, or trade your personal
                                        information to third parties for marketing purposes.
                                    </p>
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">
                                            Cookies and Similar Technologies
                                        </h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        We use cookies and similar technologies to enhance your
                                        experience. Cookies are small files stored on your device
                                        that help us analyze web traffic, customize content, and
                                        provide a personalized experience. You can manage your
                                        cookie preferences through your browser settings.
                                    </p>
                                </div>
                            </div>

                            {/* Card 6 */}
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">Security</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        We implement reasonable security measures to protect your
                                        information, but no method of transmission over the internet
                                        or electronic storage is entirely secure. We continuously
                                        update our security protocols to safeguard your data from
                                        unauthorized access, disclosure, alteration, and destruction.
                                    </p>
                                </div>
                            </div>

                            {/* Card 7 */}
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">
                                            Changes to this Privacy Policy
                                        </h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        We may update this Privacy Policy from time to time. The
                                        updated policy will be effective when posted on our
                                        website. We recommend checking this page periodically for
                                        any changes. Your continued use of the website after the
                                        changes are posted constitutes your acceptance of the
                                        revised policy.
                                    </p>
                                </div>
                            </div>

                            {/* Card 8 */}
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title custom-card-title">Contact Us</h4>
                                    </div>
                                </div>
                                <div className="card-body custom-card-body">
                                    <p>
                                        If you have any questions or concerns about this Privacy
                                        Policy, please contact us at [your contact email]. We value
                                        your privacy and will respond promptly to address any
                                        inquiries or requests related to your personal information.
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

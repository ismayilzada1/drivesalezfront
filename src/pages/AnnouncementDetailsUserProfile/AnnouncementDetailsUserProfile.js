import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import "./AnnouncementDetailsUserProfile.css";
import {Modal, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {
    DeleteAnnouncementAuthorize,
    MakeAnnouncementActiveAuthorize,
    MakeAnnouncementInactiveAuthorize,
    SetAnnouncementAuthorize
} from '../../Store/Announcement/AnnouncementActions'
import LoadingPage from "../../components/ui/LoadingPage";
import {useTranslation} from "react-i18next";

const AnnouncementDetailsUserProfile = () => {

    const {id} = useParams();

    const {announcement, loading, error} = useSelector((state) => state.announcement);
    const {t} = useTranslation();

    const {accessToken} = useSelector(state => state.auth);


    const dispatch = useDispatch();

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('tabs-1');

    const Images = announcement?.imageUrls?.map(image => image.url) || [];


    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);


    const navigate = useNavigate();

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


    const handleCloseModal = () => {
        console.log(options);
        setShowModal(false);
    };


    const handleThumbnailClick = (index) => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setSelectedImageIndex(index);
        }
    };

    const handlePrevButtonClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setSelectedImageIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length);
        }
    };

    const handleNextButtonClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setSelectedImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
        }
    };

    useEffect(() => {
        const transitionTimeout = setTimeout(() => {
            setIsTransitioning(false);
        }, 200);

        return () => clearTimeout(transitionTimeout);
    }, [isTransitioning]);

    useEffect(() => {
        const carousel = document.getElementById("carouselExampleCaptions");

        if (carousel) {
            const carouselItems = carousel.querySelectorAll(".carousel-item");

            carouselItems.forEach((item, index) => {
                if (index === selectedImageIndex) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        }
    }, [selectedImageIndex]);


    const renderIndicators = () => {
        return Images?.map((_, index) => (
            <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                onClick={() => handleThumbnailClick(index)}
                className={`carousel-indicator-button ${selectedImageIndex === index ? 'active' : ''}`}
            ></button>
        ));
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(SetAnnouncementAuthorize(id, accessToken));
            } catch (error) {
                console.error('Error fetching announcement:', error);
            }
        };

        fetchData();
    }, [dispatch, id]);

    if (loading || !announcement) {
        return <LoadingPage/>;
    }


    const {
        make,
        model,
        year,
        fuelType,
        isBrandNew,
        bodyType,
        color,
        horsePower,
        gearboxType,
        drivetrainType,
        conditions,
        marketVersion,
        ownerQuantity,
        seatCount,
        viewCount,
        vinCode,
        options,
        engineVolume,
        mileage,
        mileageType
    } = announcement;

    const {
        barter,
        onCredit,
        description,
        price,
        currency,
        announcementState,
        imageUrls,
        country,
        city,
        expirationDate,
        userId,
        userName,
        email,
        firstName,
        lastName,
        phoneNumbers
    } = announcement;

    function formatTimestamp(timestamp) {
        const dateObject = new Date(timestamp);
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const formattedDate = dateObject.toLocaleString('en-GB', options);
        return formattedDate;
    }


    const createLabelValue = (label, value) => (
        <div className="list-group-item d-flex align-items-center">
            <span className="label info-key mr-3">{t(label)}:</span>
            <span className="value">{value}</span>
        </div>
    );

    const makeAnnouncementInactive = async () => {
        if (id === null || id === undefined) {
            return null
        }

        try {

            const response = await dispatch(MakeAnnouncementInactiveAuthorize(id, accessToken));

            if (response.status === 200) {
                setAlertMessage("Announcement request sent succesfully !");
                setShowSuccessAlert(true);
                navigate('/profile');
            } else {
                setShowAlert(true);
                setAlertMessage('Something went wrong !');
            }
        } catch (error) {
            setShowAlert(true);
            setAlertMessage('Something went wrong !');
        }

    }

    const makeAnnouncementActive = async () => {
        if (id === null || id === undefined) {
            return null
        }
        try {
            const response = await dispatch(MakeAnnouncementActiveAuthorize(id, accessToken));

            if (response.status === 200) {
                setAlertMessage("Announcement request sent succesfully !");
                setShowSuccessAlert(true);
                navigate('/profile');
            } else {
                setShowAlert(true);
                setAlertMessage('Something went wrong !');
            }
        } catch (error) {
            setShowAlert(true);
            setAlertMessage('Something went wrong !');
        }

    }

    const deleteAnnouncement = async () => {
        if (id === null || id === undefined) {
            return null
        }
        try {
            const response = await dispatch(DeleteAnnouncementAuthorize(id, accessToken));

            if (response.status === 200) {
                setAlertMessage("Announcement request sent succesfully !");
                setShowSuccessAlert(true);
                navigate('/profile');
            } else {
                setShowAlert(true);
                setAlertMessage('Something went wrong !');
            }
        } catch (error) {
            setShowAlert(true);
            setAlertMessage('Something went wrong !');
        }

    }

    return (
        <>
            {loading ? (
                <LoadingPage/>
            ) : (
                <>

                    <section className="section mt-2 mb-2" id="trainers">
                        <div className="container">
                            <div id="carouselExampleCaptions" className="carousel slide">
                                <div className="carousel-indicators">
                                    {renderIndicators()}
                                </div>


                                <div className="carousel-inner">
                                    {Images?.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                        >

                                            <div className="image-container img-container">
                                                <div className="background-container"
                                                     style={{backgroundImage: `url(${image})`}}></div>
                                                <img
                                                    src={image}
                                                    className="d-block"
                                                    alt={`Slide ${index}`}
                                                    onClick={() => {
                                                        setShowModal(true);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        onClick={handlePrevButtonClick}>
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        onClick={handleNextButtonClick}>
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="d-flex flex-wrap flex-row justify-content-center align-items-center mt-3">
                                {Images?.map((image, index) => (
                                    <div className="d-flex flex-row justify-content-center align-items-center"
                                         key={index}>
                                        <div className="thumbnail-container">
                                            <img
                                                src={image}
                                                className="thumbnail-image"
                                                data-bs-target="#carouselExampleCaptions"

                                                onClick={() => handleThumbnailClick(index)}
                                                style={{
                                                    opacity: selectedImageIndex === index ? 1 : 0.7,
                                                }}
                                                alt={'vehicleImage'}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='d-flex flex-row justify-content-end align-items-center mt-3'>
                                {announcementState == "Active" && (
                                    <button className='btn btn-outline-danger'
                                            data-bs-toggle="modal"
                                            data-bs-target="#MakeInactiveModal">{t("makeInactive")}
                                    </button>
                                )}

                                {announcementState == "Inactive" && (
                                    <button className='btn btn-outline-success'
                                            data-bs-toggle="modal" data-bs-target="#MakeActiveModal">{t("makeActive")}
                                    </button>
                                )}

                                {announcementState == "Inactive" && (
                                    <button className='btn btn-outline-danger ms-2'
                                            data-bs-toggle="modal"
                                            data-bs-target="#DeleteAnnouncementModal">{t("delete")}
                                    </button>
                                )}

                            </div>

                            <div className="row mt-3" id="tabs">
                                <div className="col-lg-4">
                                    <ul>
                                        <li>
                                            <a href='#tabs-1' onClick={() => handleTabClick('tabs-1')}>
                                                <i className="fa fa-cog"></i> {t("vehicleSpecs")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#tabs-2' onClick={() => handleTabClick('tabs-2')}>
                                                <i className="fa fa-info-circle"></i> {t("vehicleDescription")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#tabs-3' onClick={() => handleTabClick('tabs-3')}>
                                                <i className="fa fa-plus-circle"></i> {t("vehicleExtras")}
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#tabs-4' onClick={() => handleTabClick('tabs-4')}>
                                                <i className="fa fa-phone"></i> {t("contactDetails")}
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="col-lg-8">
                                    <section className='tabs-content' style={{width: '100%'}}>
                                        <article id='tabs-1'
                                                 className={`fade-in-element ${activeTab === 'tabs-1' ? 'active-tab' : ''}`}>


                                            <h4>{t("vehicleSpecs")}</h4>

                                            <div className="row">

                                                <div className="col-6 col-sm-6">
                                                    <label>{t('mainLabelMake')}</label>
                                                    <p>{make?.makeName}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t('labelVehicleModel')}</label>
                                                    <p>{model?.modelName}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t('labelBodyType')}</label>
                                                    <p>{bodyType?.bodyType}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t("firstRegistration")}</label>
                                                    <p>{year?.year}</p>
                                                </div>


                                                <div className="col-6 col-sm-6">
                                                    <label>{t("mileage")}</label>
                                                    <p>{mileage} {mileageType}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t("fuelType")}</label>
                                                    <p>{fuelType?.fuelType}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t("engineVolume")}</label>
                                                    <p>{engineVolume} cc</p>
                                                </div>


                                                <div className="col-6 col-sm-6">
                                                    <label>{t("labelHorsePower")}</label>
                                                    <p>{horsePower}</p>
                                                </div>


                                                <div className="col-6 col-sm-6">
                                                    <label>{t("labelGearboxType")}</label>
                                                    <p>{gearboxType?.gearboxType}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t("seatCount")}</label>
                                                    <p>{seatCount}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t("labelMarketVersion")}</label>
                                                    <p>{marketVersion?.marketVersion}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t("labelWheelDrive")}</label>
                                                    <p>{drivetrainType?.drivetrainType}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t("ownerQuantity")}</label>
                                                    <p>{ownerQuantity}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t("brandNew")}</label>
                                                    <p>{isBrandNew ? t("Yes") : t("No")}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t("labelVehicleColor")}</label>
                                                    <p>{color?.color}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t("barter")}</label>
                                                    <p>{barter ? t("Yes") : t("No")}</p>
                                                </div>

                                                <div className="col-6 col-sm-6">
                                                    <label>{t("onCredit")}</label>
                                                    <p>{onCredit ? t("Yes") : t("No")}</p>
                                                </div>

                                                <div className="col-sm-12">
                                                    <label style={{fontSize: '1.4em'}}>{t("labelPrice")}</label>
                                                    <p className="main-price text-success font-weight-bold"
                                                       style={{fontSize: '2.2em'}}>
                                                        {price && `${price} ${currency?.currencyName}`}
                                                    </p>
                                                </div>

                                                <p>{t("announcementNumber")}: {id}</p>

                                                <div className="col-6 col-sm-6">
                                                    <p>{t("expirationDate")}: {formatTimestamp(expirationDate)}</p>
                                                </div>

                                                <div className="col-6 col-sm-6 d-flex align-items-center">
                                                    <p><i className="far fa-eye me-2"></i>
                                                        <span>{viewCount} {t("views")}</span>
                                                    </p>
                                                </div>


                                            </div>

                                        </article>
                                        <article id='tabs-2'
                                                 className={`fade-in-element ${activeTab === 'tabs-2' ? 'active-tab' : ''}`}>
                                            <h4>{t("vehicleDescription")}</h4>

                                            <div className='row'>
                                                <p className='col-sm-12' style={{
                                                    maxWidth: '800px',
                                                    margin: '0 auto',
                                                    maxHeight: '400px',
                                                    overflowY: 'auto'
                                                }}>
                                                    {description.split('\n').map((line, index) => (
                                                        <React.Fragment key={index}>
                                                            {line}
                                                            <br/>
                                                        </React.Fragment>
                                                    ))}
                                                </p>

                                                <p className='col-sm-12 font-weight-bold mt-3'
                                                   style={{fontSize: '1.2em'}}>
                                                    {t("vinCode")} :
                                                    <a
                                                        href={`https://www.google.com/search?q=${vinCode}&tbm=isch`}
                                                        target="_blank"
                                                        id={'vin-code'}
                                                        rel="noopener noreferrer"
                                                        className="font-weight-bold d-block d-sm-inline"
                                                        style={{fontSize: '1em', opacity: .7}}
                                                    >
                                                        {vinCode}
                                                    </a>
                                                </p>

                                            </div>
                                        </article>
                                        <article id='tabs-3'
                                                 className={`fade-in-element ${activeTab === 'tabs-3' ? 'active-tab' : ''}`}>
                                            <h4>{t("vehicleExtras")}</h4>

                                            <div className="row">
                                                {options?.map((option, index) => (
                                                    <div className="col-6 col-sm-6">
                                                        <p>{option.option}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {conditions && conditions.length > 0 && (
                                                <div>
                                                    <h4>{t("vehicleConditions")}</h4>
                                                    <div className="row">
                                                        {conditions.map((condition, index) => (
                                                            <div key={condition.id} className="col-sm-6">
                                                                <p className={'mb-1'}
                                                                   style={{fontWeight: "bold"}}>{condition.condition}</p>
                                                                <p>{condition.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}


                                        </article>
                                        <article id='tabs-4'
                                                 className={`fade-in-element ${activeTab === 'tabs-4' ? 'active-tab' : ''}`}>
                                            <h4>{t("contactDetails")}</h4>

                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label>{t("name")} {t("surname")}</label>

                                                    <p>{firstName} {lastName}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>{t("email")}</label>
                                                    <p><a href="#">{email}</a></p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>{t("mainLabelCountry")}</label>
                                                    <p>{country?.countryName}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>{t("labelCity")}</label>
                                                    <p>{city?.cityName}</p>
                                                </div>


                                                <div className="col-sm-6">
                                                    <label className="mb-2">{t("mobilePhones")}</label>
                                                    {phoneNumbers?.map((phone, index) => (
                                                        <p key={index} className="m-2">
                                                            {phone.phoneNumber}
                                                        </p>
                                                    ))}
                                                </div>

                                            </div>
                                        </article>

                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div className="modal fade" id="MakeInactiveModal" tabIndex="-1" role="dialog"
                         aria-labelledby="MakeInactiveModal" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{t("makeInactive")}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p className={'m-2'}>{description}</p>

                                    <ul className="list-group mt-3">
                                        {createLabelValue("mainLabelMake", make?.makeName)}
                                        {createLabelValue("labelVehicleModel", model?.modelName)}
                                        {createLabelValue("labelBodyType", bodyType?.bodyType)}
                                        {createLabelValue("fuelType", t(fuelType?.fuelType))}
                                        {createLabelValue("year", year?.year)}
                                        {createLabelValue("labelVehicleColor", color?.color)}
                                    </ul>
                                    <p className={'m-2'}>{id}</p>
                                    <h5 className='text-success text-lg-right mt-5'>{price} {currency?.currencyName}</h5>

                                </div>

                                <button type="button" data-bs-toggle="modal"
                                        data-bs-target="#MakeInactiveModal" onClick={makeAnnouncementInactive}
                                        disabled={loading}
                                        className="btn btn-danger m-3">{loading ? t('makeInactiveLoading') : t('makeInactive')}
                                </button>

                                {showAlert && (
                                    <div className="alert alert-warning mt-3" role="alert">
                                        {alertMessage}
                                    </div>
                                )}
                                {showSuccessAlert && (
                                    <div className="alert alert-success mt-3" role="alert">
                                        {alertMessage}
                                    </div>
                                )}


                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="MakeActiveModal" tabIndex="-1" role="dialog"
                         aria-labelledby="MakeActiveModal" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{t("makeActive")}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p className={'m-2'}>{description}</p>

                                    <ul className="list-group mt-3">
                                        {createLabelValue("mainLabelMake", make?.makeName)}
                                        {createLabelValue("labelVehicleModel", model?.modelName)}
                                        {createLabelValue("labelBodyType", bodyType?.bodyType)}
                                        {createLabelValue("fuelType", t(fuelType?.fuelType))}
                                        {createLabelValue("year", year?.year)}
                                        {createLabelValue("labelVehicleColor", color?.color)}
                                    </ul>
                                    <p className={'m-2'}>{id}</p>
                                    <h5 className='text-success text-lg-right mt-5'>{price} {currency?.currencyName}</h5>

                                </div>

                                <button type="button" data-bs-toggle="modal"
                                        data-bs-target="#MakeActiveModal" onClick={makeAnnouncementActive}
                                        disabled={loading}
                                        className="btn btn-success m-3">{loading ? t('makeActiveLoading') : t('makeActive')}
                                </button>

                                {showAlert && (
                                    <div className="alert alert-warning mt-3" role="alert">
                                        {alertMessage}
                                    </div>
                                )}
                                {showSuccessAlert && (
                                    <div className="alert alert-success mt-3" role="alert">
                                        {alertMessage}
                                    </div>
                                )}


                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="DeleteAnnouncementModal" tabIndex="-1" role="dialog"
                         aria-labelledby="DeleteAnnouncementModal" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{t("deleteAnnouncement")}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p className={'m-2'}>{description}</p>

                                    <ul className="list-group mt-3">
                                        {createLabelValue("mainLabelMake", make?.makeName)}
                                        {createLabelValue("labelVehicleModel", model?.modelName)}
                                        {createLabelValue("labelBodyType", bodyType?.bodyType)}
                                        {createLabelValue("fuelType", t(fuelType?.fuelType))}
                                        {createLabelValue("year", year?.year)}
                                        {createLabelValue("labelVehicleColor", color?.color)}
                                    </ul>
                                    <p className={'m-2'}>{id}</p>
                                    <h5 className='text-success text-lg-right mt-5'>{price} {currency?.currencyName}</h5>

                                </div>

                                <button type="button" data-bs-toggle="modal"
                                        data-bs-target="#DeleteAnnouncementModal" onClick={deleteAnnouncement}
                                        disabled={loading}
                                        className="btn btn-danger m-3">{loading ? t('deleteLoading') : t('delete')}
                                </button>

                                {showAlert && (
                                    <div className="alert alert-warning mt-3 m-4" role="alert">
                                        {alertMessage}
                                    </div>
                                )}
                                {showSuccessAlert && (
                                    <div className="alert alert-success mt-3 m-4" role="alert">
                                        {alertMessage}
                                    </div>
                                )}


                            </div>
                        </div>
                    </div>


                    <Modal
                        show={showModal}
                        onHide={handleCloseModal}
                        centered
                        className="fade"
                        backdrop="static"
                        dialogClassName="modal-dialog-fullscreen">

                        <Modal.Body className="modal-image-container modal-body-announcement-details">
                            <Button className="close-button" onClick={handleCloseModal}>
                                <span aria-hidden="true">&times;</span>
                            </Button>
                            <img
                                src={Images[selectedImageIndex]}
                                alt={`Slide ${selectedImageIndex}`}
                                className="modal-image"
                                onClick={(e) => e.stopPropagation()}
                            />
                            <div className="thumbnails-container">
                                {Images?.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index}`}
                                        className={`thumbnail-image ${selectedImageIndex === index ? 'active' : ''}`}
                                        onClick={() => handleThumbnailClick(index)}
                                    />
                                ))}
                            </div>
                        </Modal.Body>
                    </Modal>


                </>
            )}
        </>
    );
};


export default AnnouncementDetailsUserProfile;
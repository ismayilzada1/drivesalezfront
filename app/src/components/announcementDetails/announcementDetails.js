import React, {useEffect, useState} from "react";
import "./announcementDetails.css";
import Logo from "../logo";
import Service from "../../api-services/service";
import {useNavigate} from "react-router-dom";
import {Modal, Button} from 'react-bootstrap';

const AnnouncementDetails = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState (0);


    const [isTransitioning, setIsTransitioning] = useState (false);
    const [showModal, setShowModal] = useState (false);
    const [transitioningIndex, setTransitioningIndex] = useState(null);


    const Images = [
        "https://turbo.azstatic.com/uploads/full/2023%2F10%2F06%2F18%2F54%2F05%2Fe0be1ac6-f7cd-4bf9-b468-79be4acf24fe%2F91840_lTUu1XOmMr8IQaB8QCujWw.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F10%2F06%2F18%2F54%2F05%2Fc1c43a7e-d5d5-40ea-8684-6478cb7d39d7%2F91823_RMtAP2aDlUdrOxVQ0dYGyQ.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F10%2F06%2F18%2F54%2F05%2F44cbfdef-fb90-4a07-bd52-6de8d2b6431b%2F91786_hILCyQouLzxovy08HRnycQ.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F10%2F06%2F18%2F54%2F04%2Fb558be3c-e0b0-4cb0-a1ee-200bb75b6a2a%2F91789_lI-FeRlI44praK3eMI6wTg.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F10%2F06%2F18%2F54%2F04%2F20df1be0-9bb4-47ba-8a97-ac179eb79b13%2F91828_KE63xPmKUk1BmBNrcpSnNw.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F10%2F06%2F18%2F54%2F04%2F27c56896-8eb3-4cb0-adb2-7015673c94f2%2F91794_jMLApKap3ioem-LEJ-dZ_g.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F10%2F31%2F20%2F03%2F39%2F8c8587f2-0742-4f14-adee-a481fe2db829%2F3774_o78Zmkvl7822ayh97ZtIDQ.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F11%2F01%2F21%2F05%2F20%2Fc3354464-bd87-4953-90b5-347a377c0e98%2F41332__xMTZEezvB8Ul9ZgCtOfEg.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F11%2F03%2F13%2F16%2F41%2Fe58114c1-3f8c-4e73-bf4a-354d1e7f60bd%2F3617_8PGGUmuLvdj-q1cUBZX7Dw.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F11%2F07%2F23%2F05%2F04%2F02d18f00-93f8-4125-961e-fb87809b084a%2F3797_1vj8hYAueIGjPj_KxGr-Pg.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F10%2F23%2F19%2F34%2F49%2F056fae65-b1ec-48bc-b101-992cc029989d%2F3795_Ta4nP4i9kx3wB83dU3oHOw.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F10%2F23%2F22%2F39%2F12%2F42deea2b-4310-42b7-b3b8-5121058830f7%2F3661_Wd9rfxg2rlnxR76ysgY_9A.jpg",
        "https://turbo.azstatic.com/uploads/full/2023%2F09%2F28%2F01%2F07%2F06%2F9942c584-99d8-438e-a6ed-4bf44aea3b5d%2F91825_696pcr8dg1Su4YILfiRKPQ.jpg",
    ];


    const [activeTab, setActiveTab] = useState('tabs-1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


    const handleCloseModal = () => {
        setShowModal (false);
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
        const carouselItems = carousel.querySelectorAll(".carousel-item");

        carouselItems.forEach((item, index) => {
            if (index === selectedImageIndex) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }, [selectedImageIndex]);


    const renderIndicators = () => {
        return Images.map((_, index) => (
            <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                onClick={() => handleThumbnailClick(index)}
                className={`carousel-indicator-button ${selectedImageIndex === index ? 'active' : ''}`}
            ></button>
        ));
    };



    return (
        <>
            <section className="section mt-2" id="trainers">
                <div className="container">
                    <div id="carouselExampleCaptions" className="carousel slide" >
                        <div className="carousel-indicators">
                            {renderIndicators ()}
                        </div>



                        <div className="carousel-inner" >
                            {Images.map ((image, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                >

                                    <div className="image-container img-container">
                                        <div className="background-container"  style={{backgroundImage: `url(${image})`}}></div>
                                        <img
                                            src={image}
                                            className="d-block"
                                            alt={`Slide ${index}`}
                                            onClick={() => {
                                                setShowModal (true);
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
                        {Images.map ((image, index) => (
                            <div className="d-flex flex-row justify-content-center align-items-center" key={index}>
                                <div className="thumbnail-container">
                                    <img
                                        src={image}
                                        className="thumbnail-image"
                                        data-bs-target="#carouselExampleCaptions"

                                        onClick={() => handleThumbnailClick (index)}
                                        style={{
                                            opacity: selectedImageIndex === index ? 1 : 0.7,
                                        }}
                                        alt={'vehicleImage'}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row mt-3" id="tabs">
                        <div className="col-lg-4">
                            <ul>
                                <li>
                                    <a href='#tabs-1' onClick={() => handleTabClick('tabs-1')}>
                                        <i className="fa fa-cog"></i> Vehicle Specs
                                    </a>
                                </li>
                                <li>
                                    <a href='#tabs-2' onClick={() => handleTabClick('tabs-2')}>
                                        <i className="fa fa-info-circle"></i> Vehicle Description
                                    </a>
                                </li>
                                <li>
                                    <a href='#tabs-3' onClick={() => handleTabClick('tabs-3')}>
                                        <i className="fa fa-plus-circle"></i> Vehicle Extras
                                    </a>
                                </li>
                                <li>
                                    <a href='#tabs-4' onClick={() => handleTabClick('tabs-4')}>
                                        <i className="fa fa-phone"></i> Contact Details
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <section className='tabs-content' style={{ width: '100%' }}>
                                <article id='tabs-1' className={`fade-in-element ${activeTab === 'tabs-1' ? 'active-tab' : ''}`}>
                                                    <h4>Vehicle Specs</h4>

                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <label>Type</label>

                                                            <p>Used vehicle</p>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label>Make</label>

                                                            <p>Lorem ipsum dolor sit</p>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label> Model</label>

                                                            <p>Lorem ipsum dolor sit</p>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label>First registration</label>

                                                            <p>05/2010</p>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label>Mileage</label>

                                                            <p>5000 km</p>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label>Fuel</label>

                                                            <p>Diesel</p>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label>Engine size</label>

                                                            <p>1800 cc</p>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label>Power</label>

                                                            <p>85 hp</p>
                                                        </div>


                                                        <div className="col-sm-6">
                                                            <label>Gearbox</label>

                                                            <p>Manual</p>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label>Number of seats</label>

                                                            <p>4</p>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label>Doors</label>

                                                            <p>2/3</p>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label>Color</label>

                                                            <p>Black</p>
                                                        </div>
                                                    </div>
                                                </article>
                                <article id='tabs-2' className={`fade-in-element ${activeTab === 'tabs-2' ? 'active-tab' : ''}`}>
                                                    <h4>Vehicle Description</h4>

                                                    <p>- Colour coded bumpers <br/> - Tinted glass <br/> - Immobiliser <br/> - Central locking - remote <br/> - Passenger airbag <br/> - Electric windows <br/> - Rear head rests <br/> - Radio <br/> - CD player <br/> - Ideal first car <br/> - Warranty <br/> - High level brake light <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco                         laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat                     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </article>
                                <article id='tabs-3' className={`fade-in-element ${activeTab === 'tabs-3' ? 'active-tab' : ''}`} >
                                                    <h4>Vehicle Extras</h4>

                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <p>ABS</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p>Leather seats</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p>Power Assisted Steering</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p>Electric heated seats</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p>New HU and AU</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p>Xenon headlights</p>
                                                        </div>
                                                    </div>
                                </article>
                                <article id='tabs-4'  className={`fade-in-element ${activeTab === 'tabs-4' ? 'active-tab' : ''}`}>
                                                    <h4>Contact Details</h4>

                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            <label>Name Surname</label>

                                                            <p>John Smith</p>
                                                        </div>

                                                        <div className="col-sm-8">
                                                            <label>Email</label>
                                                            <p><a href="#">john@carsales.com</a></p>
                                                        </div>

                                                        <div className="col-sm-8">
                                                            <label className="mb-2">Mobile phones</label>
                                                            <p className='m-2'>050 456 12 52</p>
                                                            <p className='m-2'>050 456 12 52</p>
                                                            <p className='m-2'>050 456 12 52</p>
                                                            <p className='m-2'>050 456 12 52</p>
                                                        </div>


                                                    </div>
                                                </article>

                            </section>
                        </div>
                    </div>
                </div>
            </section>



            <Modal show={showModal} onHide={handleCloseModal} centered className="fade" backdrop="true">
                <Modal.Body className="modal-image-container">
                    <img
                        src={Images[selectedImageIndex]}
                        alt={`Slide ${selectedImageIndex}`}
                        className="modal-image"
                        onClick={(e) => e.stopPropagation()}
                    />
                </Modal.Body>
            </Modal>

        </>
    );
}

export default AnnouncementDetails;
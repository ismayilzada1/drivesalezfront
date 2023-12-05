import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./announcementDetails.css";
import Logo from "../../components/ui/logo";
import {useNavigate} from "react-router-dom";
import {Modal, Button} from 'react-bootstrap';
import announcementService from "../../api-services/AnnouncementService"

const AnnouncementDetails = () => {

    const { id } = useParams();

    const AnnouncementService=new announcementService();

    const [announcement, setAnnouncement] = useState('');

    const [selectedImageIndex, setSelectedImageIndex] = useState (0);


    const [isTransitioning, setIsTransitioning] = useState (false);
    const [showModal, setShowModal] = useState (false);



    const Images = announcement.imageUrls?.map(image => image.url) || [];

    const [activeTab, setActiveTab] = useState('tabs-1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


    const handleCloseModal = () => {
        console.log(announcement);
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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AnnouncementService.GetAnnouncementByID(id);
                const data = await response.json();
                setAnnouncement(data);
            } catch (error) {
                console.error('Error fetching announcement:', error);
            }
        };

        fetchData();

        console.log(id);
    }, [id]);



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
                                                            <label>Body Type</label>

                                                            {/*<p>{announcement.vehicle.vehicleDetails.bodyType.bodyType}</p>*/}
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



            <Modal
                show={showModal}
                onHide={handleCloseModal}
                centered
                className="fade"
                backdrop="static"
                dialogClassName="modal-dialog-fullscreen">

                <Modal.Body className="modal-image-container">
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
                        {Images.map((image, index) => (
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
    );
}

export default AnnouncementDetails;
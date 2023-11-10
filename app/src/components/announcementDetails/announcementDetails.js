import React, {useEffect, useState} from "react";
import "./announcementDetails.css";
import Logo from "../logo";
import Service from "../../api-services/service";
import {useNavigate} from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';


const AnnouncementDetails = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showModal, setShowModal] = useState(false);

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

    const handleThumbnailClick = (index) => {
        if (!isTransitioning) {
            setSelectedImageIndex(index);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handlePrevButtonClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setSelectedImageIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : Images.length - 1));
            // Add a timeout to re-enable the buttons after the carousel transition is done (adjust the timeout based on your transition duration)
            setTimeout(() => {
                setIsTransitioning(false);
            }, 600); // Adjust the timeout value based on your transition duration (600ms in this example)
        }
    };

    const handleNextButtonClick = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setSelectedImageIndex((prevIndex) => (prevIndex + 1 < Images.length ? prevIndex + 1 : 0));
            // Add a timeout to re-enable the buttons after the carousel transition is done (adjust the timeout based on your transition duration)
            setTimeout(() => {
                setIsTransitioning(false);
            }, 600); // Adjust the timeout value based on your transition duration (600ms in this example)
        }
    };

    const renderIndicators = () => {
        return Images.map((_, index) => (
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                aria-label={`Slide ${index + 1}`}
                onClick={() => handleThumbnailClick(index)}
                className={`carousel-indicator-button ${selectedImageIndex === index ? 'active' : ''}`}
            ></button>
        ));
    };




    return(
        <>


            <div className="services mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    {renderIndicators()}
                                </div>

                                <div className="carousel-inner">
                                    {Images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                        >
                                            <div className="image-container img-container">
                                                <img
                                                    src={image}
                                                    className="d-block w-100"
                                                    alt={`Slide ${index}`}
                                                    onClick={()=>{setShowModal(true);}}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>



                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={handlePrevButtonClick}>
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={handleNextButtonClick}>
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>





                            <div className="main-thumbnail-container mt-3">
                                {Images.map((image, index) => (
                                    <div className="col-md-2 mb-1" key={index}>
                                        <div className="thumbnail-container">
                                            <img
                                                src={image}
                                                className="thumbnail-image"
                                                data-bs-target="#carouselExampleCaptions"
                                                data-bs-slide-to={index}
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


                        </div>


                        <div className="col-md-5">
                            <form action="#" method="post" className="border p-3 rounded">
                                <h2 className="mb-3">Vehicle Details</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Make</span>
                                        <strong>BMW</strong>
                                    </li>

                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Model</span>
                                        <strong>M50</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>First registration</span>
                                        <strong>05/2022</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Mileage</span>
                                        <strong>0 km</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Fuel</span>
                                        <strong>Gasoline</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Engine size</span>
                                        <strong>3000 cc</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Power</span>
                                        <strong>485 hp</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Gearbox</span>
                                        <strong>Manual</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Number of seats</span>
                                        <strong>4</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Doors</span>
                                        <strong>4</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Color</span>
                                        <strong>Black</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Body Type</span>
                                        <strong>Coupe</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Wheel Drive</span>
                                        <strong>Full</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Owner Quantity</span>
                                        <strong>0</strong>
                                    </li>
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Market Version</span>
                                        <strong>Europe</strong>
                                    </li>
                                </ul>
                            </form>

                            <div className="border p-3 rounded mt-2">
                                <h2 className="mb-3 d-flex align-items-center justify-content-between">
                                    Owner Details
                                </h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Name</span>
                                        <strong>Ahmad</strong>
                                    </li>

                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Surname</span>
                                        <strong>Ahmadzada</strong>
                                    </li>

                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Country</span>
                                        <strong>Azerbaijan</strong>
                                    </li>


                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>City</span>
                                        <strong>Baku</strong>
                                    </li>

                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>Phone number</span>
                                        <strong className='text-danger'>+994 (55) 555 55 55</strong>
                                    </li>

                                    <li className="list-group-item vehicle-details-li d-flex justify-content-between">
                                        <span>E-mail</span>
                                        <strong className='text-danger'>indian@gmail.com</strong>
                                    </li>

                                </ul>
                            </div>
                        </div>



                    </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="tabs-content">
                                    <h4>Vehicle Description</h4>
                                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, alias animi, asperiores consequatur corporis deserunt doloribus facere, ipsam quidem recusandae reiciendis rem tenetur ullam. Libero maxime neque recusandae rerum veniam?</span><span>Amet at beatae, corporis dolorum eveniet in ipsa officiis quisquam soluta velit? Accusamus id, molestiae odit recusandae veniam voluptatum. Aperiam error eum nisi repellat reprehenderit tempora ullam vero voluptate voluptatibus?</span><span>Aperiam culpa dignissimos impedit laborum nobis quam rerum saepe sunt tempore vitae. Dolore excepturi iure quae quisquam quod saepe similique. Aliquam, et excepturi impedit minus non quaerat quas quo similique.</span><span>Aperiam blanditiis consectetur dignissimos dolore dolorum eius, ex fugiat inventore, iusto, nisi quam quasi? Hic, nostrum sit! Ab aperiam earum fugiat natus officia omnis quaerat quo! Adipisci dolores obcaecati voluptatum!</span><span>Deleniti dicta ea facilis fugit nihil, perferendis repudiandae sed! Asperiores culpa cupiditate est id itaque natus necessitatibus officiis perferendis quisquam, repellendus tempore temporibus tenetur, vel. Doloremque id quo vero voluptatum.</span></p>
                                    <br/>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="tabs-content">
                                    <h4>Vehicle Extras</h4>

                                    <p>- ABS <br/>-Leather seats <br/>-Power Assisted Steering <br/>-Electric heated seats <br/>-New HU and AU <br/>-Xenon headlights</p>
                                </div>

                            </div>
                        </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body className="modal-image-container">
                    <img
                        src={Images[selectedImageIndex]}
                        alt={`Slide ${selectedImageIndex}`}
                        className="modal-image"
                    />
                </Modal.Body>
            </Modal>


        </>
    );
}

export  default AnnouncementDetails;
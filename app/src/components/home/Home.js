import React, { useState } from 'react';
import Logo from '../logo';
import './Home.css';
import AnnouncementCard from "../announcementCard";
import { Form, Row, Col, Button,Collapse } from 'react-bootstrap';

const Home = () => {
    const carData = [
        {
            title: 'Mercedes S230',
            imageUrl: 'https://www.auctomobile.com/data/media/foto/large/0-mercedes-230-33-.jpg',
            fuelType: '2.3 L',
            year: '1965 il',
            mileage: '48,000',
            price: '124,999',
            location: 'New York, NY'
        },
        {
            title: 'BMW 3 Series',
            imageUrl: 'https://media.ed.edmunds-media.com/bmw/3-series/2023/oem/2023_bmw_3-series_sedan_330i-xdrive_fq_oem_1_1280.jpg',
            fuelType: '2.0 L',
            year: '2019',
            mileage: '30,000',
            price: '34,999',
            location: 'Los Angeles, CA'
        },
        {
            title: 'Ford Mustang',
            imageUrl: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/08/1200/675/shel1.jpg?ve=1&tl=1',
            fuelType: '5.0 L',
            year: '2020',
            mileage: '15,000',
            price: '45,999',
            location: 'Chicago, IL'
        },
        {
            title: 'Toyota Camry',
            imageUrl: 'https://www.cnet.com/a/img/resize/b20f44ea8e1bb71b95f822f9f3e40294cbdce311/hub/2021/08/20/709f33d7-b139-45ad-899f-2c4cfd7216e9/2021-toyota-camry-trd-1.jpg?auto=webp&width=1200',
            fuelType: '2.5 L',
            year: '2018',
            mileage: '40,000',
            price: '21,999',
            location: 'Houston, TX'
        },
        {
            title: 'Honda Civic',
            imageUrl: 'https://www.log.com.tr/wp-content/uploads/2021/09/2021-honda-civic-sedan-660x371.jpeg',
            fuelType: '1.8 L',
            year: '2021',
            mileage: '10,000',
            price: '19,999',
            location: 'Miami, FL'
        },
        {
            title: 'Audi A6',
            imageUrl: 'https://media.ed.edmunds-media.com/audi/a6/2022/oem/2022_audi_a6_sedan_prestige_fq_oem_1_1600.jpg',
            fuelType: '3.0 L',
            year: '2022',
            mileage: '5,000',
            price: '55,999',
            location: 'San Francisco, CA'
        },
        {
            title: 'Nissan Altima',
            imageUrl: 'https://www.motortrend.com/uploads/sites/5/2016/10/2017-Nissan-Altima-SV-front-three-quarter-04-1-e1477076896141.jpg',
            fuelType: '2.5 L',
            year: '2017',
            mileage: '25,000',
            price: '17,999',
            location: 'Seattle, WA'
        },
        {
            title: 'Tesla Model S',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2021-tesla-model-s-plaid-107-1638811396.jpg?crop=0.739xw:0.555xh;0.0929xw,0.286xh&resize=1200:*',
            fuelType: 'Electric',
            year: '2021',
            mileage: '8,000',
            price: '74,999',
            location: 'Palo Alto, CA'
        },
        {
            title: 'Chevrolet Silverado',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2019-chevrolet-silverado-1500-2p7t-104-1550848514.jpg',
            fuelType: '6.2 L',
            year: '2019',
            mileage: '20,000',
            price: '39,999',
            location: 'Dallas, TX'
        },
        {
            title: 'Volkswagen Golf',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2021-volkswagen-golf-104-1575554252.jpg?crop=0.697xw:0.568xh;0.103xw,0.330xh&resize=1200:*',
            fuelType: '1.4 L',
            year: '2020',
            mileage: '12,000',
            price: '23,999',
            location: 'Denver, CO'
        }
    ];

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    // Function to clear the form
    const clearForm = () => {
        // Add logic to clear form fields (reset the state, if controlled components)
    };

    // Function to perform search
    const search = () => {
        // Add logic to handle search based on form values
    };

    return (
        <div className="wrapper">
            <section className="featured-places mb-5">
                <Row className="container">
                    <Form onSubmit={search}>
                        <Row>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formUsedNew">
                                    <Form.Label>Used/New:</Form.Label>
                                    <Form.Control as="select">
                                        <option value="">All</option>
                                        <option value="new">New vehicle</option>
                                        <option value="used">Used vehicle</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formVehicleType">
                                    <Form.Label>Vehicle Type:</Form.Label>
                                    <Form.Control as="select">
                                        <option value="">-- All --</option>
                                        {/* Add vehicle type options */}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formMake">
                                    <Form.Label>Make:</Form.Label>
                                    <Form.Control as="select">
                                        <option value="">-- All --</option>
                                        {/* Add make options */}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formModel">
                                    <Form.Label>Model:</Form.Label>
                                    <Form.Control as="select">
                                        <option value="">-- All --</option>
                                        {/* Add model options */}
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formPrice">
                                    <Form.Label>Price:</Form.Label>
                                    <Form.Control as="select">
                                        <option value="">-- All --</option>
                                        {/* Add price options */}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formMileage">
                                    <Form.Label>Mileage:</Form.Label>
                                    <Form.Control as="select">
                                        <option value="">-- All --</option>
                                        {/* Add mileage options */}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formEngineSize">
                                    <Form.Label>Engine size:</Form.Label>
                                    <Form.Control as="select">
                                        <option value="">-- All --</option>
                                        {/* Add engine size options */}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formPower">
                                    <Form.Label>Power:</Form.Label>
                                    <Form.Control as="select">
                                        <option value="">-- All --</option>
                                        {/* Add power options */}
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                            <Collapse in={showDetails}>
                                <Row>
                                    <Col lg={3} md={4} sm={6} xs={12}>
                                        <Form.Group controlId="formDoors">
                                            <Form.Label>Doors:</Form.Label>
                                            <Form.Control as="select">
                                                <option value="">-- All --</option>
                                                {/* Add doors options */}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={3} md={4} sm={6} xs={12}>
                                        <Form.Group controlId="formSeats">
                                            <Form.Label>Number of seats:</Form.Label>
                                            <Form.Control as="select">
                                                <option value="">-- All --</option>
                                                {/* Add seats options */}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Collapse>
                        </Row>

                        <div className="d-flex justify-content-end mt-3">
                            <Button  className="btn round-btn text-white me-2" onClick={clearForm}>
                                <i className="fas fa-broom"></i>
                            </Button>
                            <Button variant="primary" className="me-2" onClick={toggleDetails}>
                                {showDetails ? 'Less Filters ↑' : 'More Filters ↓'}
                            </Button>
                            <Button type="submit" variant="dark" className="border-2">
                                Search Vehicles
                            </Button>
                        </div>
                    </Form>
                </Row>
            </section>





            <div className="bd-example">
                <div className="d-flex flex-row flex-wrap justify-content-between">
                    {carData.map((car, index) => (
                        <div className="col mb-2 ms-2 me-2" >
                        <AnnouncementCard key={index} {...car} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bd-example d-flex justify-content-center">
                <nav aria-label="Standard pagination example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item"><a className="page-link" href="#">6</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Home;

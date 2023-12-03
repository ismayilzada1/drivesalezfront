import React, { useState,useEffect} from 'react';
import './Home.css';
import AnnouncementCard from "../../components/ui/announcementCard";
import {  Row } from 'react-bootstrap';
import LoadingPage from "../../components/ui/LoadingPage";
import HomeFilter from "../../components/ui/HomeFilter";
import { useDispatch,useSelector } from 'react-redux';
import { GetAnnouncements } from '../../Store/Announcement/AnnouncementActions';

const Home = () => {

    const dispatch = useDispatch();
    const { announcements, loading, error } = useSelector((state) => state.announcement);

    const [isLoading, setIsLoading] = useState(false);

    const carData = [
        {
            title: 'Mercedes S230',
            imageUrl: 'https://www.auctomobile.com/data/media/foto/large/0-mercedes-230-33-.jpg',
            fuelType: 'Diesel',
            EngineVolume:'3.2L',
            year: '1965 il',
            mileage: '48,000',
            price: '124,999',
            location: 'New York, NY'
        },
        {
            title: 'BMW 3 Series',
            imageUrl: 'https://media.ed.edmunds-media.com/bmw/3-series/2023/oem/2023_bmw_3-series_sedan_330i-xdrive_fq_oem_1_1280.jpg',
            fuelType: 'Diesel',
            EngineVolume:'3.6L',
            year: '2019',
            mileage: '30,000',
            price: '34,999',
            location: 'Los Angeles, CA'
        },
        {
            title: 'Ford Mustang',
            imageUrl: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/08/1200/675/shel1.jpg?ve=1&tl=1',
            fuelType: 'Diesel',
            EngineVolume:'7.2L',
            year: '2020',
            mileage: '15,000',
            price: '45,999',
            location: 'Chicago, IL'
        },
        {
            title: 'Toyota Camry',
            imageUrl: 'https://www.cnet.com/a/img/resize/b20f44ea8e1bb71b95f822f9f3e40294cbdce311/hub/2021/08/20/709f33d7-b139-45ad-899f-2c4cfd7216e9/2021-toyota-camry-trd-1.jpg?auto=webp&width=1200',
            fuelType: 'Diesel',
            EngineVolume:'0.0L',
            year: '2018',
            mileage: '40,000',
            price: '21,999',
            location: 'Houston, TX'
        },
        {
            title: 'Honda Civic',
            imageUrl: 'https://www.log.com.tr/wp-content/uploads/2021/09/2021-honda-civic-sedan-660x371.jpeg',
            fuelType: 'Gasoline',
            EngineVolume:'5.4L',
            year: '2021',
            mileage: '10,000',
            price: '19,999',
            location: 'Miami, FL'
        },
        {
            title: 'Audi A6',
            imageUrl: 'https://media.ed.edmunds-media.com/audi/a6/2022/oem/2022_audi_a6_sedan_prestige_fq_oem_1_1600.jpg',
            fuelType: 'Diesel',
            EngineVolume:'2.0L',
            year: '2022',
            mileage: '5,000',
            price: '55,999',
            location: 'San Francisco, CA'
        },
        {
            title: 'Nissan Altima',
            imageUrl: 'https://www.motortrend.com/uploads/sites/5/2016/10/2017-Nissan-Altima-SV-front-three-quarter-04-1-e1477076896141.jpg',
            fuelType: 'Diesel',
            EngineVolume:'4.8L',
            year: '2017',
            mileage: '25,000',
            price: '17,999',
            location: 'Seattle, WA'
        },
        {
            title: 'Tesla Model S',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2021-tesla-model-s-plaid-107-1638811396.jpg?crop=0.739xw:0.555xh;0.0929xw,0.286xh&resize=1200:*',
            fuelType: 'Gasoline',
            EngineVolume:'3.8L',
            year: '2021',
            mileage: '8,000',
            price: '74,999',
            location: 'Palo Alto, CA'
        },
        {
            title: 'Chevrolet Silverado',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2019-chevrolet-silverado-1500-2p7t-104-1550848514.jpg',
            fuelType: 'Diesel',
            EngineVolume:'2.8L',
            year: '2019',
            mileage: '20,000',
            price: '39,999',
            location: 'Dallas, TX'
        },
        {
            title: 'Volkswagen Golf',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2021-volkswagen-golf-104-1575554252.jpg?crop=0.697xw:0.568xh;0.103xw,0.330xh&resize=1200:*',
            fuelType: 'Gasoline',
            EngineVolume:'1.8L',
            year: '2020',
            mileage: '12,000',
            price: '23,999',
            location: 'Denver, CO'
        }
    ];

    useEffect(() => {
        dispatch(GetAnnouncements());
    }, [dispatch]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    return (

        <Row className="wrapper">

            {isLoading ? (
                <LoadingPage />
            ) : (
                <>

            <HomeFilter/>


            <div className="bd-example">
                <div className="d-flex flex-row flex-wrap justify-content-between">
                    {announcements.map((car, index) => (
                        <div className="col mb-2 ms-2 me-2" >
                        <AnnouncementCard key={index} {...car}  />
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

                </>

                )}
        </Row>
    );
};

export default Home;

import React, {useEffect, useState} from 'react';
import Logo from '../logo';
import './Home.css';
import AnnouncementCard from "../announcementCard";
import { Form, Row, Col, Button,Collapse,Dropdown } from 'react-bootstrap';
import ColorDropdownSelect from '../ColorDropDownSelect'
import useDropdownWithCheckboxes from "../../hooks/useDropdownWithCheckboxes";
import DropDownSelectWithCheckboxes from "../DropDownSelectWithCheckboxes";
import DropDownSelect from "../DropDownSelect";
import commonDataService from '../../api-services/CommonDataService'
import LoadingPage from "../LoadingPage";
import HomeFilter from "../HomeFilter";




const Home = () => {


    // const CommonDataService= new commonDataService();
    //
    // const [carBrands, setCarBrands] = useState([]);
    // const [carModels, setCarModels] = useState([]);
    // const [carBodyTypes, setCarBodyTypes] = useState([]);
    // const [carFuelTypes, setCarFuelTypes] = useState([]);
    // const [carDriveTrainTypes, setCarDriveTrainTypes] = useState([]);
    // const [carGearboxTypes, setCarGearboxTypes] = useState([]);
    // const [carColors, setCarColors] = useState([]);
    // const [carMarketVersions, setCarMarketVersions] = useState([]);
    // const [carOptions, setCarOptions] = useState([]);
    // const [carConditions, setCarConditions] = useState([]);
    // const [ManufactureYears, setManufactureYears] = useState([]);
    //
    //
    // const [Countries, setCountries] = useState([]);
    // const [Cities, setCities] = useState([]);
    //
    //
    // const [selectedBrand, setSelectedBrand] = useState('');
    // const [selectedCountry, setSelectedCountry] = useState('');
    // const [selectedUsedNew, setSelectedUsedNew] = useState('');
    // const [selectedMinYear, setSelectedMinYear] = useState('');
    // const [selectedMaxYear, setSelectedMaxYear] = useState('');
    //
    //
    const [isLoading, setIsLoading] = useState(false);
    //
    // useEffect(() => {
    //     setIsLoading(true);
    //
    //     Promise.all([
    //         CommonDataService.getAllCarModels(),
    //         CommonDataService.getAllCarColors(),
    //         CommonDataService.getAllCarFuelTypes(),
    //         CommonDataService.getAllCarBodyTypes(),
    //         CommonDataService.getAllCarDriveTrainTypes(),
    //         CommonDataService.getAllCarGearboxTypes(),
    //         CommonDataService.getAllCarMarketVersions(),
    //         CommonDataService.getAllCarOptions(),
    //         CommonDataService.getAllCarConditions(),
    //         CommonDataService.getAllCarMakes(),
    //         CommonDataService.getAllManufactureYears(),
    //         CommonDataService.getAllCountries(),
    //         CommonDataService.getAllCities(),
    //     ])
    //         .then(([
    //                    carModelsData,
    //                    carColorsData,
    //                    carFuelTypesData,
    //                    carBodyTypesData,
    //                    carDriveTrainTypesData,
    //                    carGearboxTypesData,
    //                    carMarketVersionsData,
    //                    carOptionsData,
    //                    carConditionsData,
    //                    carBrandsData,
    //                    manufactureYearsData,
    //                    countriesData,
    //                    citiesData,
    //                ]) => {
    //             setCarModels(carModelsData);
    //             setCarColors(carColorsData);
    //             setCarFuelTypes(carFuelTypesData);
    //             setCarBodyTypes(carBodyTypesData);
    //             setCarDriveTrainTypes(carDriveTrainTypesData);
    //             setCarGearboxTypes(carGearboxTypesData);
    //             setCarMarketVersions(carMarketVersionsData);
    //             setCarOptions(carOptionsData);
    //             setCarConditions(carConditionsData);
    //             setCarBrands(carBrandsData);
    //             setManufactureYears(manufactureYearsData);
    //             setCountries(countriesData);
    //             setCities(citiesData);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         })
    //         .finally(() => {
    //             if (carModels.length === 0) {
    //                 console.warn('No car models data received.');
    //                 setIsLoading(false);
    //             }
    //             else{
    //                 setIsLoading(false);
    //             }
    //         });
    //
    // }, []);
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
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
    //
    //
    // const [showDetails, setShowDetails] = useState(false);
    // const toggleDetails = () => setShowDetails(!showDetails);
    //
    //
    // const [isBarterFilter, setIsBarterFilter] = useState(false);
    // const handleIsBarterFilterToggle = () => setIsBarterFilter(!isBarterFilter);
    //
    //
    //
    // const [isOnCreditFilter, setIsOnCreditFilter] = useState(false);
    // const handleIsOnCreditFilterToggle = () => setIsOnCreditFilter(!isOnCreditFilter);
    //
    //
    //
    //
    //
    // const {
    //     selectedValues: selectedValuesBodyTypes,
    //     showDropdown: showDropdownBodyTypes,
    //     handleCheckboxChange: handleCheckboxChangeBodyTypes,
    //     toggleDropdown: toggleDropdownBodyTypes } = useDropdownWithCheckboxes('1');
    //
    // const {
    //     selectedValues:selectedValuesColors,
    //     showDropdown:showDropdownColors,
    //     handleCheckboxChange:handleCheckboxChangeColors,
    //     toggleDropdown:toggleDropdownColors } = useDropdownWithCheckboxes('2');
    //
    //
    //
    // const {
    //     selectedValues: selectedValuesDriveTrainType,
    //     showDropdown: showDropdownDriveTrainType,
    //     handleCheckboxChange: handleCheckboxChangeDriveTrainType,
    //     toggleDropdown: toggleDropdownDriveTrainType
    // } = useDropdownWithCheckboxes('3');
    //
    //
    // const {
    //     selectedValues: selectedValuesModels,
    //     showDropdown: showDropdownModels,
    //     handleCheckboxChange: handleCheckboxChangeModels,
    //     toggleDropdown: toggleDropdownModels
    // } = useDropdownWithCheckboxes('4');
    //
    // const {
    //     selectedValues: selectedValuesGearboxTypes,
    //     showDropdown: showDropdownGearboxTypes,
    //     handleCheckboxChange: handleCheckboxChangeGearboxTypes,
    //     toggleDropdown: toggleDropdownGearboxTypes
    // } = useDropdownWithCheckboxes('5');
    //
    //
    // const {
    //     selectedValues: selectedValuesCities,
    //     showDropdown: showDropdownCities,
    //     handleCheckboxChange: handleCheckboxChangeCities,
    //     toggleDropdown: toggleDropdownCities
    // } = useDropdownWithCheckboxes('6');
    //
    // const {
    //     selectedValues: selectedValuesFuelTypes,
    //     showDropdown: showDropdownFuelTypes,
    //     handleCheckboxChange: handleCheckboxChangeFuelTypes,
    //     toggleDropdown: toggleDropdownFuelTypes
    // } = useDropdownWithCheckboxes('7');
    //
    // const {
    //     selectedValues: selectedValuesSeatCount,
    //     showDropdown: showDropdownSeatCount,
    //     handleCheckboxChange: handleCheckboxChangeSeatCount,
    //     toggleDropdown: toggleDropdownSeatCount
    // } = useDropdownWithCheckboxes('8');
    //
    //
    // const {
    //     selectedValues: selectedValuesMarketVersion,
    //     showDropdown: showDropdownMarketVersion,
    //     handleCheckboxChange: handleCheckboxChangeMarketVersion,
    //     toggleDropdown: toggleDropdownMarketVersion
    // } = useDropdownWithCheckboxes('9');
    //
    // const {
    //     selectedValues: selectedValuesOwnerQuantity,
    //     showDropdown: showDropdownOwnerQuantity,
    //     handleCheckboxChange: handleCheckboxChangeOwnerQuantity,
    //     toggleDropdown: toggleDropdownOwnerQuantity
    // } = useDropdownWithCheckboxes('10');
    //
    //
    //
    // useEffect(() => {
    //     selectedValuesModels.length=0;
    // }, [selectedBrand]);
    //
    // useEffect(() => {
    //     selectedValuesCities.length=0;
    // }, [selectedCountry]);
    //
    //
    //
    //
    //
    // const optionsUsedNew = [
    //     { id: 1, name: 'All' },
    //     { id: 2, name: 'Used' },
    //     { id: 3, name: 'New' },
    //
    // ];
    //
    //
    // const optionsOwnerQuantity = [
    //     { id: 1, name: '1' },
    //     { id: 2, name: '2' },
    //     { id: 3, name: '3' },
    //     { id: 4, name: '4 or more' },
    // ];
    //
    // const optionsSeatCount = [
    //     { id: 1, name: '1' },
    //     { id: 2, name: '2' },
    //     { id: 3, name: '3' },
    //     { id: 4, name: '4' },
    //     { id: 5, name: '5' },
    //     { id: 6, name: '6' },
    //     { id: 7, name: '7' },
    //     { id: 8, name: '8+' },
    // ];
    //
    //
    //
    // const filteredCities = Cities.filter((city) => {
    //     return city.country.countryName === selectedCountry;
    // });
    //
    //
    //
    // const filteredVehicleModels = carModels.filter((model) => {
    //     return  model.make.makeName === selectedBrand;
    // });
    //
    //
    // const clearForm = () => {
    //     console.log(carOptions);
    //     setSelectedBrand('');
    //     setSelectedCountry('');
    //     setSelectedMaxYear('');
    //     setSelectedMinYear('');
    //     setSelectedUsedNew('');
    //
    //     selectedValuesBodyTypes.length=0;
    //     selectedValuesMarketVersion.length=0;
    //     selectedValuesDriveTrainType.length=0;
    //     selectedValuesColors.length=0;
    //     selectedValuesFuelTypes.length=0;
    //     selectedValuesModels.length=0;
    //     selectedValuesCities.length=0;
    //     selectedValuesOwnerQuantity.length=0;
    //     selectedValuesSeatCount.length=0;
    //     selectedValuesGearboxTypes.length=0;
    //
    //
    //
    //     setShowDetails(false);
    // };
    //
    //
    // const search = (e) => {
    //     e.preventDefault();
    //     const data={
    //         selectedBrand,
    //         selectedValuesModels,
    //         selectedValuesColors
    //     }
    //     console.log(data);
    // };
    //
    // const handleBrandChange = (event, selectedValue) => setSelectedBrand(selectedValue);
    // const handleUsedNewChange = (event, selectedValue) => setSelectedUsedNew(selectedValue);
    // const handleCountryChange = (event, selectedValue) => setSelectedCountry(selectedValue);
    // const handleMinYearChange = (event, selectedValue) => setSelectedMinYear(selectedValue);
    // const handleMaxYearChange = (event, selectedValue) => setSelectedMaxYear(selectedValue);
    //
    //
    // const CustomDropdown = ({ options, onChange, value, mainLabel, dataProperty, id }) => (
    //     <Form.Group controlId={`form${id}`}>
    //         <Form.Label>{mainLabel}</Form.Label>
    //         <div className="dropdown">
    //             <button
    //                 className="btn btn-secondary btn-md dropdown-toggle custom-dropdown"
    //                 type="button"
    //                 id={`dropdownMenuButton${id}`}
    //                 data-bs-toggle="dropdown"
    //                 aria-expanded="false"
    //             >
    //                 {value && value.name ? value.name : `Choose ${mainLabel}`}
    //             </button>
    //             <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton${id}`}>
    //                 {options.map((option, index) => (
    //                     <li key={index}>
    //                         <a
    //                             className="dropdown-item"
    //                             href="#"
    //                             onClick={(event) => onChange(event, { id: option.id, name: option[dataProperty] })}
    //                         >
    //                             {option[dataProperty]}
    //                         </a>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     </Form.Group>
    // );
    //
    //
    //
    //
    //


    return (

        <Row className="wrapper">

            {isLoading && <LoadingPage />}

            {/*<section className="featured-places mb-2">*/}
            {/*    <Row className="container">*/}
            {/*        <Form onSubmit={search}>*/}
            {/*            <Row>*/}

            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <CustomDropdown*/}
            {/*                        mainLabel="Make"*/}
            {/*                        dataProperty="makeName"*/}
            {/*                        id="makeId"*/}
            {/*                        options={carBrands}*/}
            {/*                        onChange={handleBrandChange}*/}
            {/*                        value={selectedBrand}*/}
            {/*                    />*/}
            {/*                </Col>*/}

            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <Form.Group controlId="formModel">*/}
            {/*                        <Form.Label>Vehicle Model:</Form.Label>*/}
            {/*                        <DropDownSelectWithCheckboxes*/}
            {/*                            options={filteredVehicleModels}*/}
            {/*                            selectedValues={selectedValuesModels}*/}
            {/*                            toggleDropdown={toggleDropdownModels}*/}
            {/*                            handleCheckboxChange={handleCheckboxChangeModels}*/}
            {/*                            showDropdown={showDropdownModels}*/}
            {/*                            valueName={'modelName'}*/}
            {/*                        />*/}
            {/*                    </Form.Group>*/}
            {/*                </Col>*/}

            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <Form.Group controlId="formGearboxType">*/}
            {/*                        <Form.Label>Gearbox Type: </Form.Label>*/}
            {/*                        <DropDownSelectWithCheckboxes*/}
            {/*                            options={carGearboxTypes}*/}
            {/*                            selectedValues={selectedValuesGearboxTypes}*/}
            {/*                            toggleDropdown={toggleDropdownGearboxTypes}*/}
            {/*                            handleCheckboxChange={handleCheckboxChangeGearboxTypes}*/}
            {/*                            showDropdown={showDropdownGearboxTypes}*/}
            {/*                            valueName={'gearboxType'}*/}
            {/*                        />*/}
            {/*                    </Form.Group>*/}
            {/*                </Col>*/}



            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <Form.Group controlId="formBodyType">*/}
            {/*                        <Form.Label>Vehicle Body Type: </Form.Label>*/}
            {/*                        <DropDownSelectWithCheckboxes*/}
            {/*                            options={carBodyTypes}*/}
            {/*                            selectedValues={selectedValuesBodyTypes}*/}
            {/*                            toggleDropdown={toggleDropdownBodyTypes}*/}
            {/*                            handleCheckboxChange={handleCheckboxChangeBodyTypes}*/}
            {/*                            showDropdown={showDropdownBodyTypes}*/}
            {/*                            valueName={'bodyType'}*/}
            {/*                        />*/}
            {/*                    </Form.Group>*/}
            {/*                </Col>*/}



            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <CustomDropdown*/}
            {/*                        mainLabel="Used/New: "*/}
            {/*                        dataProperty="name"*/}
            {/*                        id="usedNewId"*/}
            {/*                        options={optionsUsedNew}*/}
            {/*                        onChange={handleUsedNewChange}*/}
            {/*                        value={selectedUsedNew}*/}
            {/*                    />*/}
            {/*                </Col>*/}


            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <Form.Group controlId="formBodyType">*/}
            {/*                        <Form.Label>Gearbox Type: </Form.Label>*/}
            {/*                        <DropDownSelectWithCheckboxes*/}
            {/*                            options={carFuelTypes}*/}
            {/*                            selectedValues={selectedValuesFuelTypes}*/}
            {/*                            toggleDropdown={toggleDropdownFuelTypes}*/}
            {/*                            handleCheckboxChange={handleCheckboxChangeFuelTypes}*/}
            {/*                            showDropdown={showDropdownFuelTypes}*/}
            {/*                            valueName={'fuelType'}*/}
            {/*                        />*/}
            {/*                    </Form.Group>*/}
            {/*                </Col>*/}

            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <Form.Group controlId="formPrice">*/}
            {/*                        <Form.Label>Price:</Form.Label>*/}
            {/*                        <div className="input-group input-group-rounded">*/}
            {/*                            <input type="number" className="form-control " placeholder="Min" min='0' aria-label="Minimum Price" />*/}
            {/*                            <input type="number" className="form-control " placeholder="Max" min='0' aria-label="Maximum Price" />*/}
            {/*                            <Form.Control as="select" className='form-control short-input'>*/}
            {/*                                <option>AZN</option>*/}
            {/*                                <option>USD</option>*/}
            {/*                                <option>EUR</option>*/}
            {/*                            </Form.Control>*/}
            {/*                        </div>*/}
            {/*                    </Form.Group>*/}
            {/*                </Col>*/}

            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <Form.Group controlId="formMileage">*/}
            {/*                        <Form.Label>Mileage:</Form.Label>*/}
            {/*                        <div className="input-group input-group-rounded">*/}
            {/*                            <input type="number" className="form-control " placeholder="Min" min='0' aria-label="Minimum Mileage" />*/}
            {/*                            <input type="number" className="form-control " placeholder="Max" min='0' aria-label="Maximum Mileage" />*/}
            {/*                            <Form.Control as="select" className='form-control short-input'>*/}
            {/*                                <option>KM</option>*/}
            {/*                                <option>MI</option>*/}
            {/*                            </Form.Control>*/}
            {/*                        </div>*/}
            {/*                    </Form.Group>*/}
            {/*                </Col>*/}







            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <Form.Group controlId="formSeats">*/}
            {/*                        <Form.Label>Vehicle Color: </Form.Label>*/}
            {/*                        <DropDownSelectWithCheckboxes*/}
            {/*                            options={carColors}*/}
            {/*                            selectedValues={selectedValuesColors}*/}
            {/*                            toggleDropdown={toggleDropdownColors}*/}
            {/*                            handleCheckboxChange={handleCheckboxChangeColors}*/}
            {/*                            showDropdown={showDropdownColors}*/}
            {/*                            valueName={'color'}*/}
            {/*                        />*/}
            {/*                    </Form.Group>*/}
            {/*                </Col>*/}


            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <CustomDropdown*/}
            {/*                        mainLabel="Min Year: "*/}
            {/*                        dataProperty="year"*/}
            {/*                        id="manufactureYearId"*/}
            {/*                        options={ManufactureYears}*/}
            {/*                        onChange={handleMinYearChange}*/}
            {/*                        value={selectedMinYear}*/}
            {/*                    />*/}
            {/*                </Col>*/}

            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <CustomDropdown*/}
            {/*                        mainLabel="Max Year: "*/}
            {/*                        dataProperty="year"*/}
            {/*                        id="manufactureYearId"*/}
            {/*                        options={ManufactureYears}*/}
            {/*                        onChange={handleMaxYearChange}*/}
            {/*                        value={selectedMaxYear}*/}
            {/*                    />*/}
            {/*                </Col>*/}




            {/*                <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                    <Form.Group controlId="formBodyType">*/}
            {/*                        <Form.Label>Market Version:</Form.Label>*/}
            {/*                        <DropDownSelectWithCheckboxes*/}
            {/*                            options={carMarketVersions}*/}
            {/*                            selectedValues={selectedValuesMarketVersion}*/}
            {/*                            toggleDropdown={toggleDropdownMarketVersion}*/}
            {/*                            handleCheckboxChange={handleCheckboxChangeMarketVersion}*/}
            {/*                            showDropdown={showDropdownMarketVersion}*/}
            {/*                            valueName={'marketVersion'}*/}
            {/*                        />*/}
            {/*                    </Form.Group>*/}
            {/*                </Col>*/}




            {/*                <Collapse in={showDetails} className='mt-2 pe-0'>*/}
            {/*                    <Row>*/}

            {/*                        <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                            <Form.Group controlId="formOwnerQuantity">*/}
            {/*                                <Form.Label>Owner Quantity: </Form.Label>*/}
            {/*                                <DropDownSelectWithCheckboxes*/}
            {/*                                    options={optionsOwnerQuantity}*/}
            {/*                                    selectedValues={selectedValuesOwnerQuantity}*/}
            {/*                                    toggleDropdown={toggleDropdownOwnerQuantity}*/}
            {/*                                    handleCheckboxChange={handleCheckboxChangeOwnerQuantity}*/}
            {/*                                    showDropdown={showDropdownOwnerQuantity}*/}
            {/*                                    valueName={'name'}*/}
            {/*                                />*/}
            {/*                            </Form.Group>*/}
            {/*                        </Col>*/}

            {/*                        <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                            <Form.Group controlId="formWheelDrive">*/}
            {/*                                <Form.Label>Wheel Drive:</Form.Label>*/}
            {/*                                <DropDownSelectWithCheckboxes*/}
            {/*                                    options={carDriveTrainTypes}*/}
            {/*                                    selectedValues={selectedValuesDriveTrainType}*/}
            {/*                                    toggleDropdown={toggleDropdownDriveTrainType}*/}
            {/*                                    handleCheckboxChange={handleCheckboxChangeDriveTrainType}*/}
            {/*                                    showDropdown={showDropdownDriveTrainType}*/}
            {/*                                    valueName="drivetrainType"*/}
            {/*                                />*/}
            {/*                            </Form.Group>*/}
            {/*                        </Col>*/}


            {/*                        <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                            <CustomDropdown*/}
            {/*                                mainLabel="Country: "*/}
            {/*                                dataProperty="countryName"*/}
            {/*                                id="countryId"*/}
            {/*                                options={Countries}*/}
            {/*                                onChange={handleCountryChange}*/}
            {/*                                value={selectedCountry}*/}
            {/*                            />*/}
            {/*                        </Col>*/}

            {/*                        <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                            <Form.Group controlId="formCity">*/}
            {/*                                <Form.Label>City: </Form.Label>*/}
            {/*                                <DropDownSelectWithCheckboxes*/}
            {/*                                    options={filteredCities}*/}
            {/*                                    selectedValues={selectedValuesCities}*/}
            {/*                                    toggleDropdown={toggleDropdownCities}*/}
            {/*                                    handleCheckboxChange={handleCheckboxChangeCities}*/}
            {/*                                    showDropdown={showDropdownCities}*/}
            {/*                                    valueName={'cityName'}*/}
            {/*                                />*/}
            {/*                            </Form.Group>*/}
            {/*                        </Col>*/}

            {/*                        <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                            <Form.Group controlId="formSeatCount">*/}
            {/*                                <Form.Label>Seat Count:</Form.Label>*/}
            {/*                                <DropDownSelectWithCheckboxes*/}
            {/*                                    options={optionsSeatCount}*/}
            {/*                                    selectedValues={selectedValuesSeatCount}*/}
            {/*                                    toggleDropdown={toggleDropdownSeatCount}*/}
            {/*                                    handleCheckboxChange={handleCheckboxChangeSeatCount}*/}
            {/*                                    showDropdown={showDropdownSeatCount}*/}
            {/*                                    valueName="name"*/}
            {/*                                />*/}
            {/*                            </Form.Group>*/}
            {/*                        </Col>*/}




            {/*                        <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                            <Form.Group controlId="formPrice">*/}
            {/*                                <Form.Label>Horse Power:</Form.Label>*/}
            {/*                                <div className="input-group input-group-rounded">*/}
            {/*                                    <input type="number" className="form-control " placeholder="Min" min='0' aria-label="Minimum" />*/}
            {/*                                    <input type="number" className="form-control " placeholder="Max" min='0' aria-label="Maximum" />*/}
            {/*                                </div>*/}
            {/*                            </Form.Group>*/}
            {/*                        </Col>*/}


            {/*                        <Col lg={3} md={4} sm={6} xs={12}>*/}
            {/*                            <Form.Group controlId="formEngineVolume">*/}
            {/*                                <Form.Label>Engine Volume:</Form.Label>*/}
            {/*                                <div className="input-group input-group-rounded">*/}
            {/*                                    <input type="number" className="form-control " placeholder="Min" min='0' aria-label="Minimum" />*/}
            {/*                                    <input type="number" className="form-control " placeholder="Max" min='0' aria-label="Maximum" />*/}
            {/*                                </div>*/}
            {/*                            </Form.Group>*/}
            {/*                        </Col>*/}


            {/*                        <Col lg={3} md={4} sm={6} xs={12} className='d-flex justify-content-around flex-row align-items-center p-0 mt-3'>*/}
            {/*                            <Button*/}
            {/*                                className='border-0 pe-4 ps-4 mt-auto '*/}
            {/*                                style={{*/}
            {/*                                    backgroundColor: isBarterFilter ? 'rgb(255, 85, 10)' : 'rgb(200, 200, 200)',*/}
            {/*                                    color: isBarterFilter ? 'white' : 'black',*/}
            {/*                                }}*/}
            {/*                                onClick={handleIsBarterFilterToggle}*/}
            {/*                            >*/}
            {/*                                Barter*/}
            {/*                            </Button>*/}

            {/*                            <Button*/}
            {/*                                className='border-0 ms-2 pe-4 ps-4 mt-auto'*/}
            {/*                                style={{*/}
            {/*                                    backgroundColor: isOnCreditFilter ? 'rgb(255, 85, 10)' : 'rgb(200, 200, 200)',*/}
            {/*                                    color: isOnCreditFilter ? 'white' : 'black',*/}
            {/*                                }}*/}
            {/*                                onClick={handleIsOnCreditFilterToggle}*/}
            {/*                            >*/}
            {/*                                OnCredit*/}
            {/*                            </Button>*/}
            {/*                        </Col>*/}


            {/*                    </Row>*/}




            {/*                </Collapse>*/}
            {/*            </Row>*/}

            {/*            <hr/>*/}

            {/*            <Row>*/}
            {/*                {carOptions.map((option, index) => (*/}
            {/*                    <Col lg={2} md={2} sm={3} xs={6} className='d-flex justify-content-start flex-row align-items-center p-0 mt-3' key={index}>*/}
            {/*                        <Button*/}
            {/*                            className='border-0 pe-4 ps-4 mt-auto me-2'*/}
            {/*                            style={{*/}
            {/*                                backgroundColor: isBarterFilter ? 'rgb(255, 85, 10)' : 'rgb(200, 200, 200)',*/}
            {/*                                color: isBarterFilter ? 'white' : 'black',*/}
            {/*                            }}*/}
            {/*                            onClick={handleIsBarterFilterToggle}*/}
            {/*                        >*/}
            {/*                            {option.option}*/}
            {/*                        </Button>*/}
            {/*                    </Col>*/}
            {/*                ))}*/}

            {/*            </Row>*/}

            {/*            <div className=" filter-search-buttons d-flex justify-content-end mt-3">*/}
            {/*                <Button  className="btn round-btn text-white me-2" onClick={clearForm}>*/}
            {/*                    <i className="fas fa-broom"></i>*/}
            {/*                </Button>*/}
            {/*                <Button variant="primary" className="me-2" onClick={toggleDetails}>*/}
            {/*                    {showDetails ? 'Less Filters ↑' : 'More Filters ↓'}*/}
            {/*                </Button>*/}
            {/*                <Button type="submit" variant="dark" className="border-2">*/}
            {/*                    Search Vehicles*/}
            {/*                </Button>*/}
            {/*            </div>*/}
            {/*        </Form>*/}
            {/*    </Row>*/}
            {/*</section>*/}

            <HomeFilter/>





            <div className="bd-example">
                <div className="d-flex flex-row flex-wrap justify-content-between">
                    {carData.map((car, index) => (
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
        </Row>
    );
};

export default Home;

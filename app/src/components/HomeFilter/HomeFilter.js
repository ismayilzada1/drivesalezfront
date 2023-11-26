import React, { useState, useEffect } from 'react';
import './HomeFilter.css';
import {Button, Col, Collapse, Form, Row} from "react-bootstrap";
import DropDownSelectWithCheckboxes from "../DropDownSelectWithCheckboxes";
import useDropdownWithCheckboxes from "../../hooks/useDropdownWithCheckboxes";
import commonDataService from "../../api-services/CommonDataService";
import {useSelector} from "react-redux";


const HomeFilter = () => {

    const {  user } = useSelector((state) => state.auth);

    const CommonDataService= new commonDataService();

    const [carBrands, setCarBrands] = useState([]);
    const [carModels, setCarModels] = useState([]);
    const [carBodyTypes, setCarBodyTypes] = useState([]);
    const [carFuelTypes, setCarFuelTypes] = useState([]);
    const [carDriveTrainTypes, setCarDriveTrainTypes] = useState([]);
    const [carGearboxTypes, setCarGearboxTypes] = useState([]);
    const [carColors, setCarColors] = useState([]);
    const [carMarketVersions, setCarMarketVersions] = useState([]);
    const [carOptions, setCarOptions] = useState([]);
    const [carConditions, setCarConditions] = useState([]);
    const [ManufactureYears, setManufactureYears] = useState([]);


    const [Countries, setCountries] = useState([]);
    const [Cities, setCities] = useState([]);


    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedUsedNew, setSelectedUsedNew] = useState('');
    const [selectedMinYear, setSelectedMinYear] = useState('');
    const [selectedMaxYear, setSelectedMaxYear] = useState('');


    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        Promise.all([
            CommonDataService.getAllCarModels(),
            CommonDataService.getAllCarColors(),
            CommonDataService.getAllCarFuelTypes(),
            CommonDataService.getAllCarBodyTypes(),
            CommonDataService.getAllCarDriveTrainTypes(),
            CommonDataService.getAllCarGearboxTypes(),
            CommonDataService.getAllCarMarketVersions(),
            CommonDataService.getAllCarOptions(),
            CommonDataService.getAllCarConditions(),
            CommonDataService.getAllCarMakes(),
            CommonDataService.getAllManufactureYears(),
            CommonDataService.getAllCountries(),
            CommonDataService.getAllCities(),
        ])
            .then(([
                       carModelsData,
                       carColorsData,
                       carFuelTypesData,
                       carBodyTypesData,
                       carDriveTrainTypesData,
                       carGearboxTypesData,
                       carMarketVersionsData,
                       carOptionsData,
                       carConditionsData,
                       carBrandsData,
                       manufactureYearsData,
                       countriesData,
                       citiesData,
                   ]) => {
                setCarModels(carModelsData);
                setCarColors(carColorsData);
                setCarFuelTypes(carFuelTypesData);
                setCarBodyTypes(carBodyTypesData);
                setCarDriveTrainTypes(carDriveTrainTypesData);
                setCarGearboxTypes(carGearboxTypesData);
                setCarMarketVersions(carMarketVersionsData);
                setCarOptions(carOptionsData);
                setCarConditions(carConditionsData);
                setCarBrands(carBrandsData);
                setManufactureYears(manufactureYearsData);
                setCountries(countriesData);
                setCities(citiesData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
            .finally(() => {
                if (carModels.length === 0) {
                    console.warn('No car models data received.');
                    setIsLoading(false);
                }
                else{
                    setIsLoading(false);
                }
            });

    }, []);






    const [showDetails, setShowDetails] = useState(false);
    const toggleDetails = () => setShowDetails(!showDetails);


    const [isBarterFilter, setIsBarterFilter] = useState(false);
    const handleIsBarterFilterToggle = () => setIsBarterFilter(!isBarterFilter);



    const [isOnCreditFilter, setIsOnCreditFilter] = useState(false);
    const handleIsOnCreditFilterToggle = () => setIsOnCreditFilter(!isOnCreditFilter);





    const {
        selectedValues: selectedValuesBodyTypes,
        showDropdown: showDropdownBodyTypes,
        handleCheckboxChange: handleCheckboxChangeBodyTypes,
        toggleDropdown: toggleDropdownBodyTypes } = useDropdownWithCheckboxes('1');

    const {
        selectedValues:selectedValuesColors,
        showDropdown:showDropdownColors,
        handleCheckboxChange:handleCheckboxChangeColors,
        toggleDropdown:toggleDropdownColors } = useDropdownWithCheckboxes('2');



    const {
        selectedValues: selectedValuesDriveTrainType,
        showDropdown: showDropdownDriveTrainType,
        handleCheckboxChange: handleCheckboxChangeDriveTrainType,
        toggleDropdown: toggleDropdownDriveTrainType
    } = useDropdownWithCheckboxes('3');


    const {
        selectedValues: selectedValuesModels,
        showDropdown: showDropdownModels,
        handleCheckboxChange: handleCheckboxChangeModels,
        toggleDropdown: toggleDropdownModels
    } = useDropdownWithCheckboxes('4');

    const {
        selectedValues: selectedValuesGearboxTypes,
        showDropdown: showDropdownGearboxTypes,
        handleCheckboxChange: handleCheckboxChangeGearboxTypes,
        toggleDropdown: toggleDropdownGearboxTypes
    } = useDropdownWithCheckboxes('5');


    const {
        selectedValues: selectedValuesCities,
        showDropdown: showDropdownCities,
        handleCheckboxChange: handleCheckboxChangeCities,
        toggleDropdown: toggleDropdownCities
    } = useDropdownWithCheckboxes('6');

    const {
        selectedValues: selectedValuesFuelTypes,
        showDropdown: showDropdownFuelTypes,
        handleCheckboxChange: handleCheckboxChangeFuelTypes,
        toggleDropdown: toggleDropdownFuelTypes
    } = useDropdownWithCheckboxes('7');

    const {
        selectedValues: selectedValuesSeatCount,
        showDropdown: showDropdownSeatCount,
        handleCheckboxChange: handleCheckboxChangeSeatCount,
        toggleDropdown: toggleDropdownSeatCount
    } = useDropdownWithCheckboxes('8');


    const {
        selectedValues: selectedValuesMarketVersion,
        showDropdown: showDropdownMarketVersion,
        handleCheckboxChange: handleCheckboxChangeMarketVersion,
        toggleDropdown: toggleDropdownMarketVersion
    } = useDropdownWithCheckboxes('9');

    const {
        selectedValues: selectedValuesOwnerQuantity,
        showDropdown: showDropdownOwnerQuantity,
        handleCheckboxChange: handleCheckboxChangeOwnerQuantity,
        toggleDropdown: toggleDropdownOwnerQuantity
    } = useDropdownWithCheckboxes('10');



    useEffect(() => {
        selectedValuesModels.length=0;
    }, [selectedBrand]);

    useEffect(() => {
        selectedValuesCities.length=0;
    }, [selectedCountry]);





    const optionsUsedNew = [
        { id: 1, name: 'All' },
        { id: 2, name: 'Used' },
        { id: 3, name: 'New' },

    ];


    const optionsOwnerQuantity = [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4 or more' },
    ];

    const optionsSeatCount = [
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
        { id: 5, name: '5' },
        { id: 6, name: '6' },
        { id: 7, name: '7' },
        { id: 8, name: '8+' },
    ];



    const filteredCities = Cities.filter((city) => {
        return city.country.countryName === selectedCountry;
    });



    const filteredVehicleModels = carModels.filter((model) => {
        return  model.make.makeName === selectedBrand;
    });


    const clearForm = () => {
        console.log(user);
        console.log(carOptions);
        setSelectedBrand('');
        setSelectedCountry('');
        setSelectedMaxYear('');
        setSelectedMinYear('');
        setSelectedUsedNew('');

        selectedValuesBodyTypes.length=0;
        selectedValuesMarketVersion.length=0;
        selectedValuesDriveTrainType.length=0;
        selectedValuesColors.length=0;
        selectedValuesFuelTypes.length=0;
        selectedValuesModels.length=0;
        selectedValuesCities.length=0;
        selectedValuesOwnerQuantity.length=0;
        selectedValuesSeatCount.length=0;
        selectedValuesGearboxTypes.length=0;



        setShowDetails(false);
    };


    const search = (e) => {
        e.preventDefault();
        const data={
            selectedBrand,
            selectedValuesModels,
            selectedValuesColors
        }
        console.log(data);
    };

    const handleBrandChange = (event, selectedValue) => setSelectedBrand(selectedValue);
    const handleUsedNewChange = (event, selectedValue) => setSelectedUsedNew(selectedValue);
    const handleCountryChange = (event, selectedValue) => setSelectedCountry(selectedValue);
    const handleMinYearChange = (event, selectedValue) => setSelectedMinYear(selectedValue);
    const handleMaxYearChange = (event, selectedValue) => setSelectedMaxYear(selectedValue);


    const CustomDropdown = ({ options, onChange, value, mainLabel, dataProperty, id }) => (
        <Form.Group controlId={`form${id}`}>
            <Form.Label>{mainLabel}</Form.Label>
            <div className="dropdown">
                <button
                    className="btn btn-secondary btn-md dropdown-toggle custom-dropdown"
                    type="button"
                    id={`dropdownMenuButton${id}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {value && value.name ? value.name : `Choose ${mainLabel}`}
                </button>
                <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton${id}`}>
                    {options.map((option, index) => (
                        <li key={index}>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={(event) => onChange(event, { id: option.id, name: option[dataProperty] })}
                            >
                                {option[dataProperty]}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Form.Group>
    );

    return (

        <>
            <section className="featured-places mb-2">
                <Row className="container">
                    <Form onSubmit={search}>
                        <Row>

                            <Col lg={3} md={4} sm={6} xs={12}>
                                <CustomDropdown
                                    mainLabel="Make"
                                    dataProperty="makeName"
                                    id="makeId"
                                    options={carBrands}
                                    onChange={handleBrandChange}
                                    value={selectedBrand}
                                />
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formModel">
                                    <Form.Label>Vehicle Model:</Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={filteredVehicleModels}
                                        selectedValues={selectedValuesModels}
                                        toggleDropdown={toggleDropdownModels}
                                        handleCheckboxChange={handleCheckboxChangeModels}
                                        showDropdown={showDropdownModels}
                                        valueName={'modelName'}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formGearboxType">
                                    <Form.Label>Gearbox Type: </Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={carGearboxTypes}
                                        selectedValues={selectedValuesGearboxTypes}
                                        toggleDropdown={toggleDropdownGearboxTypes}
                                        handleCheckboxChange={handleCheckboxChangeGearboxTypes}
                                        showDropdown={showDropdownGearboxTypes}
                                        valueName={'gearboxType'}
                                    />
                                </Form.Group>
                            </Col>



                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formBodyType">
                                    <Form.Label>Vehicle Body Type: </Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={carBodyTypes}
                                        selectedValues={selectedValuesBodyTypes}
                                        toggleDropdown={toggleDropdownBodyTypes}
                                        handleCheckboxChange={handleCheckboxChangeBodyTypes}
                                        showDropdown={showDropdownBodyTypes}
                                        valueName={'bodyType'}
                                    />
                                </Form.Group>
                            </Col>



                            <Col lg={3} md={4} sm={6} xs={12}>
                                <CustomDropdown
                                    mainLabel="Used/New: "
                                    dataProperty="name"
                                    id="usedNewId"
                                    options={optionsUsedNew}
                                    onChange={handleUsedNewChange}
                                    value={selectedUsedNew}
                                />
                            </Col>


                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formBodyType">
                                    <Form.Label>Gearbox Type: </Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={carFuelTypes}
                                        selectedValues={selectedValuesFuelTypes}
                                        toggleDropdown={toggleDropdownFuelTypes}
                                        handleCheckboxChange={handleCheckboxChangeFuelTypes}
                                        showDropdown={showDropdownFuelTypes}
                                        valueName={'fuelType'}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formPrice">
                                    <Form.Label>Price:</Form.Label>
                                    <div className="input-group input-group-rounded">
                                        <input type="number" className="form-control " placeholder="Min" min='0' aria-label="Minimum Price" />
                                        <input type="number" className="form-control " placeholder="Max" min='0' aria-label="Maximum Price" />
                                        <Form.Control as="select" className='form-control short-input'>
                                            <option>AZN</option>
                                            <option>USD</option>
                                            <option>EUR</option>
                                        </Form.Control>
                                    </div>
                                </Form.Group>
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formMileage">
                                    <Form.Label>Mileage:</Form.Label>
                                    <div className="input-group input-group-rounded">
                                        <input type="number" className="form-control " placeholder="Min" min='0' aria-label="Minimum Mileage" />
                                        <input type="number" className="form-control " placeholder="Max" min='0' aria-label="Maximum Mileage" />
                                        <Form.Control as="select" className='form-control short-input'>
                                            <option>KM</option>
                                            <option>MI</option>
                                        </Form.Control>
                                    </div>
                                </Form.Group>
                            </Col>







                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formSeats">
                                    <Form.Label>Vehicle Color: </Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={carColors}
                                        selectedValues={selectedValuesColors}
                                        toggleDropdown={toggleDropdownColors}
                                        handleCheckboxChange={handleCheckboxChangeColors}
                                        showDropdown={showDropdownColors}
                                        valueName={'color'}
                                    />
                                </Form.Group>
                            </Col>


                            <Col lg={3} md={4} sm={6} xs={12}>
                                <CustomDropdown
                                    mainLabel="Min Year: "
                                    dataProperty="year"
                                    id="manufactureYearId"
                                    options={ManufactureYears}
                                    onChange={handleMinYearChange}
                                    value={selectedMinYear}
                                />
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={12}>
                                <CustomDropdown
                                    mainLabel="Max Year: "
                                    dataProperty="year"
                                    id="manufactureYearId"
                                    options={ManufactureYears}
                                    onChange={handleMaxYearChange}
                                    value={selectedMaxYear}
                                />
                            </Col>




                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formBodyType">
                                    <Form.Label>Market Version:</Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={carMarketVersions}
                                        selectedValues={selectedValuesMarketVersion}
                                        toggleDropdown={toggleDropdownMarketVersion}
                                        handleCheckboxChange={handleCheckboxChangeMarketVersion}
                                        showDropdown={showDropdownMarketVersion}
                                        valueName={'marketVersion'}
                                    />
                                </Form.Group>
                            </Col>




                            <Collapse in={showDetails} className='mt-2 pe-0'>
                                <Row>

                                    <Col lg={3} md={4} sm={6} xs={12}>
                                        <Form.Group controlId="formOwnerQuantity">
                                            <Form.Label>Owner Quantity: </Form.Label>
                                            <DropDownSelectWithCheckboxes
                                                options={optionsOwnerQuantity}
                                                selectedValues={selectedValuesOwnerQuantity}
                                                toggleDropdown={toggleDropdownOwnerQuantity}
                                                handleCheckboxChange={handleCheckboxChangeOwnerQuantity}
                                                showDropdown={showDropdownOwnerQuantity}
                                                valueName={'name'}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col lg={3} md={4} sm={6} xs={12}>
                                        <Form.Group controlId="formWheelDrive">
                                            <Form.Label>Wheel Drive:</Form.Label>
                                            <DropDownSelectWithCheckboxes
                                                options={carDriveTrainTypes}
                                                selectedValues={selectedValuesDriveTrainType}
                                                toggleDropdown={toggleDropdownDriveTrainType}
                                                handleCheckboxChange={handleCheckboxChangeDriveTrainType}
                                                showDropdown={showDropdownDriveTrainType}
                                                valueName="drivetrainType"
                                            />
                                        </Form.Group>
                                    </Col>


                                    <Col lg={3} md={4} sm={6} xs={12}>
                                        <CustomDropdown
                                            mainLabel="Country: "
                                            dataProperty="countryName"
                                            id="countryId"
                                            options={Countries}
                                            onChange={handleCountryChange}
                                            value={selectedCountry}
                                        />
                                    </Col>

                                    <Col lg={3} md={4} sm={6} xs={12}>
                                        <Form.Group controlId="formCity">
                                            <Form.Label>City: </Form.Label>
                                            <DropDownSelectWithCheckboxes
                                                options={filteredCities}
                                                selectedValues={selectedValuesCities}
                                                toggleDropdown={toggleDropdownCities}
                                                handleCheckboxChange={handleCheckboxChangeCities}
                                                showDropdown={showDropdownCities}
                                                valueName={'cityName'}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col lg={3} md={4} sm={6} xs={12}>
                                        <Form.Group controlId="formSeatCount">
                                            <Form.Label>Seat Count:</Form.Label>
                                            <DropDownSelectWithCheckboxes
                                                options={optionsSeatCount}
                                                selectedValues={selectedValuesSeatCount}
                                                toggleDropdown={toggleDropdownSeatCount}
                                                handleCheckboxChange={handleCheckboxChangeSeatCount}
                                                showDropdown={showDropdownSeatCount}
                                                valueName="name"
                                            />
                                        </Form.Group>
                                    </Col>




                                    <Col lg={3} md={4} sm={6} xs={12}>
                                        <Form.Group controlId="formPrice">
                                            <Form.Label>Horse Power:</Form.Label>
                                            <div className="input-group input-group-rounded">
                                                <input type="number" className="form-control " placeholder="Min" min='0' aria-label="Minimum" />
                                                <input type="number" className="form-control " placeholder="Max" min='0' aria-label="Maximum" />
                                            </div>
                                        </Form.Group>
                                    </Col>


                                    <Col lg={3} md={4} sm={6} xs={12}>
                                        <Form.Group controlId="formEngineVolume">
                                            <Form.Label>Engine Volume:</Form.Label>
                                            <div className="input-group input-group-rounded">
                                                <input type="number" className="form-control " placeholder="Min" min='0' aria-label="Minimum" />
                                                <input type="number" className="form-control " placeholder="Max" min='0' aria-label="Maximum" />
                                            </div>
                                        </Form.Group>
                                    </Col>


                                    <Col lg={3} md={4} sm={6} xs={12} className='d-flex justify-content-around flex-row align-items-center p-0 mt-3'>
                                        <Button
                                            className='border-0 pe-4 ps-4 mt-auto '
                                            style={{
                                                backgroundColor: isBarterFilter ? 'rgb(255, 85, 10)' : 'rgb(200, 200, 200)',
                                                color: isBarterFilter ? 'white' : 'black',
                                            }}
                                            onClick={handleIsBarterFilterToggle}
                                        >
                                            Barter
                                        </Button>

                                        <Button
                                            className='border-0 ms-2 pe-4 ps-4 mt-auto'
                                            style={{
                                                backgroundColor: isOnCreditFilter ? 'rgb(255, 85, 10)' : 'rgb(200, 200, 200)',
                                                color: isOnCreditFilter ? 'white' : 'black',
                                            }}
                                            onClick={handleIsOnCreditFilterToggle}
                                        >
                                            OnCredit
                                        </Button>
                                    </Col>


                                </Row>




                            </Collapse>
                        </Row>



                        <div className=" filter-search-buttons d-flex justify-content-end mt-3">
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
        </>

    );
};

export default HomeFilter;
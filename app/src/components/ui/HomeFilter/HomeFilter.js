import React, { useState, useEffect } from 'react';
import './HomeFilter.css';
import {Button, Col, Collapse, Form, Row} from "react-bootstrap";
import DropDownSelectWithCheckboxes from "../../form/DropDownSelectWithCheckboxes";
import useDropdownWithCheckboxes from "../../../hooks/useDropdownWithCheckboxes";
import commonDataService from "../../../api-services/CommonDataService";
import {useDispatch, useSelector} from "react-redux";
import {forEach} from "react-bootstrap/ElementChildren";
import {GetAllFilterAnnouncements, SendAnnouncement} from "../../../Store/Announcement/AnnouncementActions";
import {useTranslation} from "react-i18next";

const HomeFilter = () => {

    const{t}=useTranslation();

    const {  user } = useSelector((state) => state.auth);
    const { announcements, loading, error } = useSelector((state) => state.announcement);

    const dispatch = useDispatch();

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

    const [selectedMinPrice,setSelectedMinPrice]=useState('');
    const [selectedMaxPrice,setSelectedMaxPrice]=useState('');
    const [selectedMinMileage,setSelectedMinMileage]=useState('');
    const [selectedMaxMileage,setSelectedMaxMileage]=useState('');
    const [selectedCurrency,setSelectedCurrency]=useState(1);
    const [selectedDistanceUnit,setSelectedDistanceUnit]=useState(1);
    const [selectedMinHorsePower,setSelectedMinHorsePower]=useState('');
    const [selectedMaxHorsePower,setSelectedMaxHorsePower]=useState('');
    const [selectedMinEngineVolume,setSelectedMinEngineVolume]=useState('');
    const [selectedMaxEngineVolume,setSelectedMaxEngineVolume]=useState('');


    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (dropdownId) => {
        setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
    };

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

    // const {
    //     selectedValues: selectedValuesSeatCount,
    //     showDropdown: showDropdownSeatCount,
    //     handleCheckboxChange: handleCheckboxChangeSeatCount,
    //     toggleDropdown: toggleDropdownSeatCount
    // } = useDropdownWithCheckboxes('8');


    const {
        selectedValues: selectedValuesMarketVersion,
        showDropdown: showDropdownMarketVersion,
        handleCheckboxChange: handleCheckboxChangeMarketVersion,
        toggleDropdown: toggleDropdownMarketVersion
    } = useDropdownWithCheckboxes('9');

    // const {
    //     selectedValues: selectedValuesOwnerQuantity,
    //     showDropdown: showDropdownOwnerQuantity,
    //     handleCheckboxChange: handleCheckboxChangeOwnerQuantity,
    //     toggleDropdown: toggleDropdownOwnerQuantity
    // } = useDropdownWithCheckboxes('10');



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




    // const optionsOwnerQuantity = [
    //     { id: 1, name: '1' },
    //     { id: 2, name: '2' },
    //     { id: 3, name: '3' },
    //     { id: 4, name: '4 or more' },
    // ];

    const optionsCurrency = [
        { id: 1, name: 'AZN' },
        { id: 2, name: 'USD' },
        { id: 3, name: 'EUR' },
    ];

    const optionsDistanceUnit = [
        { id: 1, name: 'KM' },
        { id: 2, name: 'MI' },
    ];


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



    const filteredCities = Cities.filter((city) => {
        return city.country.id === selectedCountry.id;
    });



    const filteredVehicleModels = carModels.filter((model) => {
        return  model.make.id === selectedBrand.id;
    });


    const clearForm = () => {
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
        // selectedValuesOwnerQuantity.length=0;
        // selectedValuesSeatCount.length=0;
        selectedValuesGearboxTypes.length=0;

        setShowDetails(false);
    };

    const buildApiUrl = (data) => {
        const queryParams = Object.entries(data)
            .map(([key, value]) => {
                if(value===''){return null;}

                if (Array.isArray(value)) {
                    return value.map(item => `${key}=${item}`).join('&');
                } else if (typeof value === 'object') {
                    return `${key}=${value.id}`;
                } else {
                    return `${key}=${value}`;
                }
            })
            .filter(Boolean)
            .join('&');
        return queryParams;
    };


    const handleMinPriceChange = (e) => {
        setSelectedMinPrice(e.target.value);
    };

    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
    };

    const handleDistanceUnit = (e) => {
        setSelectedDistanceUnit(e.target.value);
    };


    const handleMaxPriceChange = (e) => {
        setSelectedMaxPrice(e.target.value);
    };

    const handleMinMileage = (e) => {
        setSelectedMinMileage(e.target.value);
    };

    const handleMaxMileage = (e) => {
        setSelectedMaxMileage(e.target.value);
    };


    const handleMinHorsePower = (e) => {
        setSelectedMinHorsePower(e.target.value);
    };

    const handleMaxHorsePower = (e) => {
        setSelectedMaxHorsePower(e.target.value);
    };


    const handleMinEngineVolume = (e) => {
        setSelectedMinEngineVolume(e.target.value);
    };

    const handleMaxEngineVolume = (e) => {
        setSelectedMaxEngineVolume(e.target.value);
    };


    const search = async (e) => {
        e.preventDefault();

        try {
            const apiUrl = buildApiUrl({
                MakeId:selectedBrand,
                ModelsIds:selectedValuesModels,
                GearboxTypesIds:selectedValuesGearboxTypes,
                BodyTypesIds:selectedValuesBodyTypes,
                FuelTypesIds:selectedValuesFuelTypes,
                ColorsIds:selectedValuesColors,
                FromYearId:selectedMinYear,
                ToYearId:selectedMaxYear,
                MarketVersionsIds:selectedValuesMarketVersion,
                DriveTrainTypesIds:selectedValuesDriveTrainType,
                CountryId:selectedCountry,
                CitiesIds:selectedValuesCities,
                FromPrice:selectedMinPrice,
                ToPrice:selectedMaxPrice,
                FromMileage:selectedMinMileage,
                ToMileage:selectedMaxMileage,
                CurrencyId:selectedCurrency,
                MileageType:selectedDistanceUnit,
                FromHorsePower:selectedMinHorsePower,
                ToHorsePower:selectedMaxHorsePower,
                FromEngineVolume:selectedMinEngineVolume,
                ToEngineVolume:selectedMaxEngineVolume,
            });

            console.log (apiUrl);

            try {
                const response= await dispatch(GetAllFilterAnnouncements(apiUrl));
                console.log (response);

            } catch (error) {
                console.log (error);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    const handleBrandChange = (event, selectedValue) => setSelectedBrand(selectedValue);
    const handleUsedNewChange = (event, selectedValue) => {
        setSelectedUsedNew(selectedValue)
    };
    const handleCountryChange = (event, selectedValue) => {
        setSelectedCountry(selectedValue);

    }

    const handleMinYearChange = (event, selectedValue) => {
        setSelectedMinYear(selectedValue);

    }

    const handleMaxYearChange = (event, selectedValue) => {
        setSelectedMaxYear(selectedValue);

    }


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
    //                 {value && value.name ? value.name : `${t('choose')} ${mainLabel}`}
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


    //version for closing all other dropdowns when one opens
    const CustomDropdown = ({ options, onChange, value, mainLabel, dataProperty, id, isOpen, onToggle }) => (
        <Form.Group controlId={`form${id}`}>
            <Form.Label>{mainLabel}</Form.Label>
            <div className="dropdown">
                <button
                    className="btn btn-secondary btn-md dropdown-toggle custom-dropdown"
                    type="button"
                    id={`dropdownMenuButton${id}`}
                    data-bs-toggle="dropdown"
                    aria-expanded={isOpen}
                    onClick={onToggle}
                >
                    {value && value.name ? value.name : `${t('choose')} ${mainLabel}`}
                </button>
                <ul className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby={`dropdownMenuButton${id}`}>
                    {options.map((option, index) => (
                        <li key={index}>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={(event) => {
                                    onChange(event, { id: option.id, name: option[dataProperty] });
                                    onToggle();
                                }}
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
                        <Row id={'home-filter'}>
                            <Col lg={3}  md={4} sm={6} xs={6}>
                                <CustomDropdown
                                    mainLabel={t('mainLabelMake')}
                                    dataProperty="makeName"
                                    id="makeId"
                                    options={carBrands}
                                    onChange={handleBrandChange}
                                    value={selectedBrand}
                                    isOpen={openDropdown === 'makes'}
                                    onToggle={() => handleDropdownToggle('makes')}
                                />
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={6}>
                                <Form.Group controlId="formModel">
                                    <Form.Label>{t('labelVehicleModel')}</Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={filteredVehicleModels}
                                        selectedValues={selectedValuesModels}
                                        toggleDropdown={toggleDropdownModels}
                                        handleCheckboxChange={handleCheckboxChangeModels}
                                        showDropdown={showDropdownModels}
                                        valueName={'modelName'}
                                        isOpen={openDropdown === 'models'}
                                        onToggle={() => handleDropdownToggle('models')}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={6}>
                                <Form.Group controlId="formGearboxType">
                                    <Form.Label>{t('labelGearboxType')}</Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={carGearboxTypes}
                                        selectedValues={selectedValuesGearboxTypes}
                                        toggleDropdown={toggleDropdownGearboxTypes}
                                        handleCheckboxChange={handleCheckboxChangeGearboxTypes}
                                        showDropdown={showDropdownGearboxTypes}
                                        valueName={'gearboxType'}
                                        isOpen={openDropdown === 'gearboxTypes'}
                                        onToggle={() => handleDropdownToggle('gearboxTypes')}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={6}>
                                <Form.Group controlId="formBodyType">
                                    <Form.Label>{t('labelBodyType')}</Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={carBodyTypes}
                                        selectedValues={selectedValuesBodyTypes}
                                        toggleDropdown={toggleDropdownBodyTypes}
                                        handleCheckboxChange={handleCheckboxChangeBodyTypes}
                                        showDropdown={showDropdownBodyTypes}
                                        valueName={'bodyType'}
                                        isOpen={openDropdown === 'bodyTypes'}
                                        onToggle={() => handleDropdownToggle('bodyTypes')}
                                    />
                                </Form.Group>
                            </Col>



                            <Col lg={3} md={4} sm={6} xs={6}>
                                <CustomDropdown
                                    mainLabel={t('mainLabelUsedNew')}
                                    dataProperty="name"
                                    id="usedNewId"
                                    options={optionsUsedNew}
                                    onChange={handleUsedNewChange}
                                    value={selectedUsedNew}
                                    isOpen={openDropdown === 'usedNews'}
                                    onToggle={() => handleDropdownToggle('usedNews')}
                                />
                            </Col>


                            <Col lg={3} md={4} sm={6} xs={6}>
                                <Form.Group controlId="formBodyType">
                                    <Form.Label>{t('labelFuelType')}</Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={carFuelTypes}
                                        selectedValues={selectedValuesFuelTypes}
                                        toggleDropdown={toggleDropdownFuelTypes}
                                        handleCheckboxChange={handleCheckboxChangeFuelTypes}
                                        showDropdown={showDropdownFuelTypes}
                                        valueName={'fuelType'}
                                        isOpen={openDropdown === 'fuelTypes'}
                                        onToggle={() => handleDropdownToggle('fuelTypes')}
                                    />
                                </Form.Group>
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formPrice">
                                    <Form.Label>{t('labelPrice')}</Form.Label>
                                    <div className="input-group input-group-rounded">
                                        <input type="number" value={selectedMinPrice} onChange={handleMinPriceChange} className="form-control triple-input" placeholder="Min" min='0' aria-label="Minimum Price" />
                                        <input type="number"  value={selectedMaxPrice} onChange={handleMaxPriceChange} className="form-control triple-input" placeholder="Max" min='0' aria-label="Maximum Price" />
                                        <Form.Control as="select" value={selectedCurrency} onChange={handleCurrencyChange} className='form-control short-input triple-input'>
                                            {optionsCurrency.map((currency) => (
                                                <option key={currency.id} value={currency.id}>
                                                    {currency.name}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </div>
                                </Form.Group>
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Form.Group controlId="formMileage">
                                    <Form.Label>{t('labelMileage')}</Form.Label>
                                    <div className="input-group input-group-rounded">
                                        <input type="number" value={selectedMinMileage} onChange={handleMinMileage} className="form-control triple-input" placeholder="Min" min='0' aria-label="Minimum Mileage" />
                                        <input type="number" value={selectedMaxMileage} onChange={handleMaxMileage} className="form-control triple-input" placeholder="Max" min='0' aria-label="Maximum Mileage" />
                                        <Form.Control as="select" value={selectedDistanceUnit} onChange={handleDistanceUnit} className='form-control short-input triple-input'>
                                            {optionsDistanceUnit.map((distanceUnit) => (
                                                <option key={distanceUnit.id} value={distanceUnit.id}>
                                                    {distanceUnit.name}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </div>
                                </Form.Group>
                            </Col>







                            <Col lg={3} md={4} sm={6} xs={6}>
                                <Form.Group controlId="formSeats">
                                    <Form.Label>{t('labelVehicleColor')}</Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={carColors}
                                        selectedValues={selectedValuesColors}
                                        toggleDropdown={toggleDropdownColors}
                                        handleCheckboxChange={handleCheckboxChangeColors}
                                        showDropdown={showDropdownColors}
                                        valueName={'color'}
                                        isOpen={openDropdown === 'colors'}
                                        onToggle={() => handleDropdownToggle('colors')}

                                    />
                                </Form.Group>
                            </Col>


                            <Col lg={3} md={4} sm={6} xs={6}>
                                <CustomDropdown
                                    mainLabel={t('mainLabelMinYear')}
                                    dataProperty="year"
                                    id="manufactureYearId"
                                    options={ManufactureYears}
                                    onChange={handleMinYearChange}
                                    value={selectedMinYear}
                                    isOpen={openDropdown === 'minYear'}
                                    onToggle={() => handleDropdownToggle('minYear')}
                                />
                            </Col>

                            <Col lg={3} md={4} sm={6} xs={6}>
                                <CustomDropdown
                                    mainLabel={t('mainLabelMaxYear')}
                                    dataProperty="year"
                                    id="manufactureYearId"
                                    options={ManufactureYears}
                                    onChange={handleMaxYearChange}
                                    value={selectedMaxYear}
                                    isOpen={openDropdown === 'maxYear'}
                                    onToggle={() => handleDropdownToggle('maxYear')}
                                />
                            </Col>




                            <Col lg={3} md={4} sm={6} xs={6}>
                                <Form.Group controlId="formBodyType">
                                    <Form.Label>{t('labelMarketVersion')}</Form.Label>
                                    <DropDownSelectWithCheckboxes
                                        options={carMarketVersions}
                                        selectedValues={selectedValuesMarketVersion}
                                        toggleDropdown={toggleDropdownMarketVersion}
                                        handleCheckboxChange={handleCheckboxChangeMarketVersion}
                                        showDropdown={showDropdownMarketVersion}
                                        valueName={'marketVersion'}
                                        isOpen={openDropdown === 'marketVersions'}
                                        onToggle={() => handleDropdownToggle('marketVersions')}
                                    />
                                </Form.Group>
                            </Col>




                            <Collapse in={showDetails} className='mt-2 pe-0'>
                                <Row>

                                    {/*<Col lg={3} md={4} sm={6} xs={12}>*/}
                                    {/*    <Form.Group controlId="formOwnerQuantity">*/}
                                    {/*        <Form.Label>Owner Quantity: </Form.Label>*/}
                                    {/*        <DropDownSelectWithCheckboxes*/}
                                    {/*            options={optionsOwnerQuantity}*/}
                                    {/*            selectedValues={selectedValuesOwnerQuantity}*/}
                                    {/*            toggleDropdown={toggleDropdownOwnerQuantity}*/}
                                    {/*            handleCheckboxChange={handleCheckboxChangeOwnerQuantity}*/}
                                    {/*            showDropdown={showDropdownOwnerQuantity}*/}
                                    {/*            valueName={'name'}*/}
                                    {/*        />*/}
                                    {/*    </Form.Group>*/}
                                    {/*</Col>*/}

                                    <Col lg={3} md={4} sm={6} xs={6}>
                                        <Form.Group controlId="formWheelDrive">
                                            <Form.Label>{t('labelWheelDrive')}</Form.Label>
                                            <DropDownSelectWithCheckboxes
                                                options={carDriveTrainTypes}
                                                selectedValues={selectedValuesDriveTrainType}
                                                toggleDropdown={toggleDropdownDriveTrainType}
                                                handleCheckboxChange={handleCheckboxChangeDriveTrainType}
                                                showDropdown={showDropdownDriveTrainType}
                                                valueName="drivetrainType"
                                                isOpen={openDropdown === 'driveTrainTypes'}
                                                onToggle={() => handleDropdownToggle('driveTrainTypes')}

                                            />
                                        </Form.Group>
                                    </Col>


                                    <Col lg={3} md={4} sm={6} xs={6}>
                                        <CustomDropdown
                                            mainLabel={t('mainLabelCountry')}
                                            dataProperty="countryName"
                                            id="countryId"
                                            options={Countries}
                                            onChange={handleCountryChange}
                                            value={selectedCountry}
                                            isOpen={openDropdown === 'countries'}
                                            onToggle={() => handleDropdownToggle('countries')}
                                        />
                                    </Col>

                                    <Col lg={3} md={4} sm={6}  xs={6}>
                                        <Form.Group controlId="formCity">
                                            <Form.Label>{t('labelCity')}</Form.Label>
                                            <DropDownSelectWithCheckboxes
                                                options={filteredCities}
                                                selectedValues={selectedValuesCities}
                                                toggleDropdown={toggleDropdownCities}
                                                handleCheckboxChange={handleCheckboxChangeCities}
                                                showDropdown={showDropdownCities}
                                                valueName={'cityName'}
                                                isOpen={openDropdown === 'cityNames'}
                                                onToggle={() => handleDropdownToggle('cityNames')}
                                            />
                                        </Form.Group>
                                    </Col>

                                    {/*<Col lg={3} md={4} sm={6} xs={12}>*/}
                                    {/*    <Form.Group controlId="formSeatCount">*/}
                                    {/*        <Form.Label>Seat Count:</Form.Label>*/}
                                    {/*        <DropDownSelectWithCheckboxes*/}
                                    {/*            options={optionsSeatCount}*/}
                                    {/*            selectedValues={selectedValuesSeatCount}*/}
                                    {/*            toggleDropdown={toggleDropdownSeatCount}*/}
                                    {/*            handleCheckboxChange={handleCheckboxChangeSeatCount}*/}
                                    {/*            showDropdown={showDropdownSeatCount}*/}
                                    {/*            valueName="name"*/}
                                    {/*        />*/}
                                    {/*    </Form.Group>*/}
                                    {/*</Col>*/}




                                    <Col lg={3} md={4} sm={6} xs={12}>
                                        <Form.Group controlId="formPrice">
                                            <Form.Label>{t('labelHorsePower')}</Form.Label>
                                            <div className="input-group input-group-rounded">
                                                <input type="number"  value={selectedMinHorsePower} onChange={handleMinHorsePower} className="form-control triple-input" placeholder="Min" min='0' aria-label="Minimum" />
                                                <input type="number"  value={selectedMaxHorsePower} onChange={handleMaxHorsePower} className="form-control triple-input" placeholder="Max" min='0' aria-label="Maximum" />
                                            </div>
                                        </Form.Group>
                                    </Col>


                                    <Col lg={3} md={4} sm={6} xs={12}>
                                        <Form.Group controlId="formEngineVolume">
                                            <Form.Label>{t('labelEngineVolume')}</Form.Label>
                                            <div className="input-group input-group-rounded">
                                                <input type="number"   value={selectedMinEngineVolume} onChange={handleMinEngineVolume} className="form-control triple-input" placeholder="Min" min='0' aria-label="Minimum" />
                                                <input type="number" value={selectedMaxEngineVolume} onChange={handleMaxEngineVolume} className="form-control triple-input" placeholder="Max" min='0' aria-label="Maximum" />
                                            </div>
                                        </Form.Group>
                                    </Col>


                                    <Col lg={3} md={4} sm={6} xs={12} className='filter-toggle-buttons d-flex justify-content-around flex-row align-items-center p-0 mt-3'>
                                        <Button
                                            className='border-0 pe-4 ps-4 mt-auto '
                                            style={{
                                                backgroundColor: isBarterFilter ? 'rgb(255, 85, 10)' : 'rgb(200, 200, 200)',
                                                color: isBarterFilter ? 'white' : 'black',
                                            }}
                                            onClick={handleIsBarterFilterToggle}
                                        >
                                            {t('labelBarter')}
                                        </Button>

                                        <Button
                                            className='border-0 ms-2 pe-4 ps-4 mt-auto'
                                            style={{
                                                backgroundColor: isOnCreditFilter ? 'rgb(255, 85, 10)' : 'rgb(200, 200, 200)',
                                                color: isOnCreditFilter ? 'white' : 'black',
                                            }}
                                            onClick={handleIsOnCreditFilterToggle}
                                        >
                                            {t('labelOnCredit')}
                                        </Button>
                                    </Col>


                                </Row>




                            </Collapse>
                        </Row>



                        <div className=" filter-search-buttons d-flex justify-content-end mt-3">
                            <Button  className="btn round-btn text-white me-2" onClick={clearForm}>
                                <i className="fas fa-broom"></i>
                            </Button>
                            {/*<Button variant="primary" className="me-2" onClick={toggleDetails}>*/}
                            {/*    {showDetails ? 'Less Filters ↑' : 'More Filters ↓'}*/}
                            {/*</Button>*/}

                            <Button variant="primary" className="me-2 p-2" onClick={toggleDetails}>
                                    {showDetails ?
                                        <svg width="32" className={"icon-filter-search-btn"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M2 12C2 6.485 6.486 2 12 2C17.514 2 22 6.485 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12Z" fill="currentColor"></path>
                                            <path d="M7.77942 13.4425C7.77942 13.2515 7.85242 13.0595 7.99842 12.9135L11.4684 9.42652C11.6094 9.28552 11.8004 9.20652 12.0004 9.20652C12.1994 9.20652 12.3904 9.28552 12.5314 9.42652L16.0034 12.9135C16.2954 13.2065 16.2954 13.6805 16.0014 13.9735C15.7074 14.2655 15.2324 14.2645 14.9404 13.9715L12.0004 11.0185L9.06042 13.9715C8.76842 14.2645 8.29442 14.2655 8.00042 13.9735C7.85242 13.8275 7.77942 13.6345 7.77942 13.4425Z" fill="currentColor"></path>
                                        </svg>
                                        :
                                        <svg width="32" className={"icon-filter-search-btn"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M22 12C22 17.515 17.514 22 12 22C6.486 22 2 17.515 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12Z" fill="currentColor"></path>
                                            <path d="M16.2211 10.5575C16.2211 10.7485 16.1481 10.9405 16.0021 11.0865L12.5321 14.5735C12.3911 14.7145 12.2001 14.7935 12.0001 14.7935C11.8011 14.7935 11.6101 14.7145 11.4691 14.5735L7.99707 11.0865C7.70507 10.7935 7.70507 10.3195 7.99907 10.0265C8.29307 9.73448 8.76807 9.73548 9.06007 10.0285L12.0001 12.9815L14.9401 10.0285C15.2321 9.73548 15.7061 9.73448 16.0001 10.0265C16.1481 10.1725 16.2211 10.3655 16.2211 10.5575Z" fill="currentColor"></path>
                                        </svg>
                                    }
                            </Button>

                            <Button variant='primary' type="submit"  className="border-2">
                                {t('search')}
                                <svg className='ms-2 icon-filter-search-btn' style={{color:'whitesmoke'}} width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="10.5992" cy="10.6532" rx="8.59922" ry="8.65324" fill="currentColor"></ellipse>
                                    <path opacity="0.4" d="M20.6745 21.9553C20.3405 21.9445 20.0228 21.807 19.7853 21.5705L17.7488 19.1902C17.3122 18.7909 17.2765 18.1123 17.6688 17.6689C17.8524 17.4831 18.102 17.3787 18.3624 17.3787C18.6228 17.3787 18.8725 17.4831 19.0561 17.6689L21.6172 19.7181C21.9861 20.0957 22.0999 20.6563 21.9078 21.1492C21.7157 21.6422 21.2535 21.9754 20.7279 22L20.6745 21.9553Z" fill="currentColor"></path>
                                </svg>
                            </Button>
                        </div>
                    </Form>
                </Row>
            </section>
        </>

    );
};

export default HomeFilter;
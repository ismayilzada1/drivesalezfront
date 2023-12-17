import React, {useEffect, useState} from 'react';
import Logo from '../../components/ui/logo';
import './NewAnnouncement.css'
import commonDataService from "../../api-services/CommonDataService";
import LoadingPage from "../../components/ui/LoadingPage";
import {useDispatch, useSelector} from "react-redux";
import {SendAnnouncement} from '../../Store/Announcement/AnnouncementActions'
import { Form } from 'react-bootstrap';

const NewAnnouncement=()=> {
    const CommonDataService= new commonDataService();


    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();


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
    const [images, setImages] = useState([]);


    const [Countries, setCountries] = useState([]);
    const [Cities, setCities] = useState([]);


    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const [formData, setFormData] = useState({
        model: '',
        bodyType: '',
        fuelType: '',
        driveTrainType:'',
        gearboxType:'',
        color:'',
        marketVersion:'',
        options:[],
        conditions:[],
        manufactureYear:'',
        city:'',
        mileage:'',
        distanceUnit:'',
        ownerQuantity:'',
        engineVolume:'',
        horsePower:'',
        seatCount:'',
        vinCode:'',
        price:'',
        priceCurrency:'',
        credit:false,
        barter:false,
        brandNew:false,
        description:'',
        IsPremium:false,
    });

    const isFormValid = () => {
        return (
            formData.model !== '' &&
            formData.bodyType !== '' &&
            formData.fuelType !== '' &&
            formData.driveTrainType !== '' &&
            formData.gearboxType !== '' &&
            formData.color !== '' &&
            formData.marketVersion !== '' &&
            formData.manufactureYear !== '' &&
            formData.city !== '' &&
            formData.mileage !== '' &&
            formData.distanceUnit !== '' &&
            formData.ownerQuantity !== '' &&
            formData.engineVolume !== '' &&
            formData.horsePower !== '' &&
            formData.seatCount !== '' &&
            formData.vinCode !== '' &&
            formData.price !== '' &&
            formData.priceCurrency !== '' &&
            formData.description !== ''
        );
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRadioChange = (event) => {
        setFormData({
            ...formData,
            IsPremium: event.target.value === 'premium',
        });
    };



    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);

        if (images.length + files.length > 22) {
            return;
        }

        const imageObjects = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));

        setImages((prevImages) => [...prevImages, ...imageObjects]);

    };

    const handleDeleteImage = (e,index) => {
        e.preventDefault();
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    const handleSelectChange = (event, field) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const carModelsData = await CommonDataService.getAllCarModels();
                setCarModels(carModelsData);

                const carColorsData = await CommonDataService.getAllCarColors();
                setCarColors(carColorsData);

                const carFuelTypesData = await CommonDataService.getAllCarFuelTypes();
                setCarFuelTypes(carFuelTypesData);

                const carBodyTypesData = await CommonDataService.getAllCarBodyTypes();
                setCarBodyTypes(carBodyTypesData);

                const carDriveTrainTypesData = await CommonDataService.getAllCarDriveTrainTypes();
                setCarDriveTrainTypes(carDriveTrainTypesData);

                const carGearboxTypesData = await CommonDataService.getAllCarGearboxTypes();
                setCarGearboxTypes(carGearboxTypesData);

                const carMarketVersionsData = await CommonDataService.getAllCarMarketVersions();
                setCarMarketVersions(carMarketVersionsData);

                const carOptionsData = await CommonDataService.getAllCarOptions();
                setCarOptions(carOptionsData);

                const carConditionsData = await CommonDataService.getAllCarConditions();
                setCarConditions(carConditionsData);

                const carBrandsData = await CommonDataService.getAllCarMakes();
                setCarBrands(carBrandsData);

                const manufactureYearsData = await CommonDataService.getAllManufactureYears();
                setManufactureYears(manufactureYearsData);

                const countriesData = await CommonDataService.getAllCountries();
                setCountries(countriesData);

                const citiesData = await CommonDataService.getAllCities();
                setCities(citiesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);

                if (carModels.length === 0) {
                    console.warn('No car models data received.');
                }
            }
        };

        fetchData();
    }, []);



    const handleBrandChange = (event) => setSelectedBrand(event.target.value);


    const handleCountryChange = (event) => setSelectedCountry(event.target.value);


    const filteredCities = Cities.filter( (city) => city.country.id == selectedCountry );


    const filteredVehicleModels = carModels.filter( (model) => model.make.id == selectedBrand );


    const convertImageToBase64 = async (image) => {
        const response = await fetch(image.url);
        const blob = await response.blob();
        const base64data = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
        return base64data;
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        setIsLoading(true);

        if (!isFormValid()) {
            setShowAlert(true);
            setAlertMessage('Please fill out all required fields.');
            return;
        }

        const imagesBase64 = await Promise.all(images.map(convertImageToBase64));


        const data = {
            "yearId": parseInt(formData.manufactureYear, 10),
            "makeId": parseInt(selectedBrand,10),
            "modelId": parseInt(formData.model,10),
            "fuelTypeId": parseInt(formData.fuelType,10),
            "gearboxId": parseInt(formData.gearboxType,10),
            "drivetrainTypeId": parseInt(formData.driveTrainType,10),
            "bodyTypeId": parseInt(formData.bodyType,10),
            "conditionsIds": formData.conditions,
            "optionsIds": formData.options,
            "colorId": parseInt(formData.color,10),
            "marketVersionId": parseInt(formData.marketVersion,10),
            "horsePower": parseInt(formData.horsePower, 10),
            "isBrandNew": formData.brandNew,
            "ownerQuantity": parseInt(formData.ownerQuantity, 10),
            "seatCount": parseInt(formData.seatCount, 10),
            "vinCode": formData.vinCode,
            "mileage": parseInt(formData.mileage, 10),
            "mileageType": parseInt(formData.distanceUnit,10),
            "engineVolume": parseInt(formData.engineVolume, 10),
            "imageData": imagesBase64,
            "countryId": parseInt(selectedCountry,10),
            "cityId": parseInt(formData.city,10),
            "barter": formData.barter,
            "onCredit": formData.credit,
            "description": formData.description,
            "price": parseInt(formData.price, 10),
            "currencyId": parseInt(formData.priceCurrency,10),
            "isPremium": formData.IsPremium,
        };

        try {

            const response= await dispatch(SendAnnouncement(data,user.token));

            if (response.status === 200) {
                setAlertMessage("Announcement request sent succesfully !");
                setShowSuccessAlert(true);
            } else {
                setShowAlert(true);
                setAlertMessage('Something went wrong !');
            }
        } catch (error) {
            console.log(error);
            setShowAlert(true);
            setAlertMessage('Something went wrong !');
        }

        setIsLoading(false);
    };


    const CustomDropdown = ({ options, OnChange, value, mainLabel, dataProperty, id }) => (
        <div className="form-group col-md-6">
            <label className="form-label" htmlFor={id}>
                {mainLabel}:
            </label>
            <select onChange={OnChange} className="form-control" id={id} value={value}>
                <option disabled value="" defaultValue={value === ""}>
                    Select {mainLabel}
                </option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option[dataProperty]}
                    </option>
                ))}
            </select>
        </div>
    );



    return(

        <div className="card">
            {isLoading ? (
                <LoadingPage />
            ) : (
                <>
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">Vehicle Information</h4>
                </div>
            </div>
            <div className="card-body">
                <div className="new-user-info">
                    <form>
                        <div className="row">

                            <CustomDropdown
                                mainLabel="Make"
                                dataProperty="makeName"
                                id="makeId"
                                options={carBrands}
                                OnChange={handleBrandChange}
                                value={selectedBrand}
                            />


                            <CustomDropdown
                                mainLabel="Model"
                                dataProperty="modelName"
                                id="modelId"
                                options={filteredVehicleModels}
                                OnChange={(e) => handleSelectChange(e, 'model')}
                                value={formData.model}
                            />

                            <CustomDropdown
                                mainLabel="Body Type"
                                dataProperty="bodyType"
                                id="bodyTypeId"
                                options={carBodyTypes}
                                OnChange={(e) => handleSelectChange(e, 'bodyType')}
                                value={formData.bodyType}
                            />

                            <CustomDropdown
                                mainLabel="Fuel Type"
                                dataProperty="fuelType"
                                id="fuelTypeId"
                                options={carFuelTypes}
                                OnChange={(e) => handleSelectChange(e, 'fuelType')}
                                value={formData.fuelType}
                            />

                            <CustomDropdown
                                mainLabel="Drive Train Type"
                                dataProperty="drivetrainType"
                                id="drivetrainTypeId"
                                options={carDriveTrainTypes}
                                OnChange={(e) => handleSelectChange(e, 'driveTrainType')}
                                value={formData.driveTrainType}
                            />


                            <CustomDropdown
                                mainLabel="Gearbox Type"
                                dataProperty="gearboxType"
                                id="gearboxTypeId"
                                options={carGearboxTypes}
                                OnChange={(e) => handleSelectChange(e, 'gearboxType')}
                                value={formData.gearboxType}
                            />


                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="mobno">Mileage</label>
                                <div className="input-group">
                                    <input onChange={handleInputChange} type="number" className="form-control rounded me-2" min="0" id="mileage" name="mileage" />
                                    <div className="input-group-append d-flex align-items-center">
                                        <div className="form-check form-check-inline">
                                            <input onChange={(e) => handleSelectChange(e, 'distanceUnit')} checked={formData.distanceUnit == '1'} type="radio" className="form-check-input"  id="radio_KM" name="distanceUnit" value={1} />
                                            <label className="form-check-label" htmlFor="radio_KM">KM</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input onChange={(e) => handleSelectChange(e, 'distanceUnit')} checked={formData.distanceUnit == '2'} type="radio" className="form-check-input" id="radio_MI" name="distanceUnit" value={2} />
                                            <label className="form-check-label" htmlFor="radio_MI">MI</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CustomDropdown
                                mainLabel="Year"
                                dataProperty="year"
                                id="manufactureYearId"
                                options={ManufactureYears}
                                OnChange={(e) => handleSelectChange(e, 'manufactureYear')}
                                value={formData.manufactureYear}
                            />
                            <CustomDropdown
                                mainLabel="Color"
                                dataProperty="color"
                                id="colorId"
                                options={carColors}
                                OnChange={(e) => handleSelectChange(e, 'color')}
                                value={formData.color}
                            />
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="pno">Owner Quantity:</label>
                                <input onChange={handleInputChange} type="number" name="ownerQuantity" className="form-control rounded" min="0"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="pno">Engine Volume:</label>
                                <input onChange={handleInputChange} name="engineVolume" type="number" className="form-control rounded" min="0"/>
                            </div>
                            <CustomDropdown
                                mainLabel="Market Version"
                                dataProperty="marketVersion"
                                id="marketVersionId"
                                options={carMarketVersions}
                                OnChange={(e) => handleSelectChange(e, 'marketVersion')}
                                value={formData.marketVersion}
                            />
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="pno">Horse Power:</label>
                                <input onChange={handleInputChange} name="horsePower" type="number" className="form-control rounded" min="0"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="pno">Seat Count:</label>
                                <input onChange={handleInputChange} name="seatCount" type="number" className="form-control rounded" min="0"/>
                            </div>


                            <div className="form-group col-md-12">
                                <label className="form-label" htmlFor="pno">VIN Code:</label>
                                <input onChange={handleInputChange} name="vinCode" type="text" className="form-control rounded" />
                            </div>

                            <div className="form-group col-md-12">
                                <label className="form-label" htmlFor="photos">Upload Images:</label>
                                <div className="input-group">
                                    {images.map((image, index) => (
                                        <div key={index} className="image-preview me-3 ms-3 mb-2 mt-2">
                                            <div className="image-container d-flex justify-content-center align-items-center">
                                                <img
                                                    src={image.url}
                                                    alt={`Uploaded Image ${index + 1}`}
                                                    className="uploaded-image"
                                                    style={{ maxWidth: '250px', maxHeight: '250px' }}
                                                />
                                                <button className="delete-button" onClick={(e) => handleDeleteImage(e, index)}>
                                                    &times;
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <label className="input-group-text image-upload-label me-3 ms-3 mb-2 mt-2">
                                        <div className="image-upload-box">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                style={{ display: 'none' }}
                                                onChange={handleImageUpload}
                                            />
                                            <span className="plus-sign">+</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="form-group col-md-12">
                                <label className="form-label" htmlFor="pno">Options:</label>
                                <div className="row">
                                    {
                                        carOptions.map((option) => (
                                            <div className="col-md-3">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" value={option.id} id={option.id} onChange={(e) => {
                                                        const selectedOptions = [...formData.options];
                                                        if (e.target.checked) {
                                                            selectedOptions.push(option.id);
                                                        } else {
                                                            const index = selectedOptions.indexOf(option.id);
                                                            if (index !== -1) {
                                                                selectedOptions.splice(index, 1);
                                                            }
                                                        }
                                                        setFormData({
                                                            ...formData,
                                                            options: selectedOptions,
                                                        });
                                                    }}/>

                                                    <label className="form-check-label" htmlFor="barter_checkbox1">{option.option}</label>
                                                </div>
                                            </div>
                                            ))
                                    }

                                </div>
                            </div>

                            <div className="form-group col-md-12">
                                <label className="form-label" htmlFor="pno">Conditions:</label>
                                <div className="row">
                                    {
                                        carConditions.map((condition) => (
                                            <div className="col-md-4">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" value={condition.id} id={condition.id} onChange={(e) => {
                                                        const selectedConditions = [...formData.conditions];
                                                        if (e.target.checked) {
                                                            selectedConditions.push(condition.id);
                                                        } else {
                                                            const index = selectedConditions.indexOf(condition.id);
                                                            if (index !== -1) {
                                                                selectedConditions.splice(index, 1);
                                                            }
                                                        }
                                                        setFormData({
                                                            ...formData,
                                                            conditions: selectedConditions,
                                                        });
                                                    }}/>
                                                    <label className="form-check-label" htmlFor="barter_checkbox1">{condition.name}</label>
                                                </div>
                                                <label className="form-check-label" htmlFor="barter_checkbox1">{condition.description}</label>
                                            </div>
                                        ))

                                    }

                                </div>
                            </div>

                        </div>

                        <hr/>
                            <h5 className="mb-3">Announcement Information</h5>
                            <div className="row">

                                <CustomDropdown
                                    mainLabel="Country"
                                    dataProperty="countryName"
                                    id="countryNameId"
                                    options={Countries}
                                    OnChange={handleCountryChange}
                                    value={selectedCountry}
                                />

                                <CustomDropdown
                                    mainLabel="City"
                                    dataProperty="cityName"
                                    id="cityNameId"
                                    options={filteredCities}
                                    OnChange={(e) => handleSelectChange(e, 'city')}
                                    value={formData.city}
                                />

                                <div className="form-group col-md-4">
                                    <label className="form-label pe-2" htmlFor="credit_checkbox">Credit: </label>
                                    <input onChange={(e) => handleSelectChange(e, 'credit')} name="credit" type="checkbox" className="form-check-input" id="credit_checkbox"/>
                                </div>

                                <div className="form-group col-md-4">
                                    <label className="form-label pe-2" htmlFor="brandNew_checkbox">Brand New: </label>
                                    <input onChange={(e) => handleSelectChange(e, 'brandNew')} name="brandNew" type="checkbox" className="form-check-input" id="brandNew_checkbox"/>
                                </div>

                                <div className="form-group col-md-4">
                                    <label className="form-label pe-2" htmlFor="barter_checkbox">Barter:</label>
                                    <input onChange={(e) => handleSelectChange(e, 'barter')} name="barter" type="checkbox" className="form-check-input" id="barter_checkbox"/>
                                </div>


                                <div className="form-group col-md-12">
                                    <label className="form-label" htmlFor="mobno">Price</label>
                                    <div className="input-group">
                                        <input onChange={handleInputChange} name="price" type="number" className="form-control rounded me-2" min="0" id="price"  />
                                        <div className="input-group-append d-flex align-items-center">
                                            <div className="form-check form-check-inline">
                                                <input onChange={(e) => handleSelectChange(e, 'priceCurrency')} checked={formData.priceCurrency == '1'}  type="radio" className="form-check-input"  id="radio_AZN" name="priceCurrency" value="1" />
                                                <label className="form-check-label" htmlFor="radio_AZN">AZN</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input onChange={(e) => handleSelectChange(e, 'priceCurrency')} checked={formData.priceCurrency == '2'}  type="radio" className="form-check-input"  id="radio_USD" name="priceCurrency" value="2" />
                                                <label className="form-check-label" htmlFor="radio_USD">USD</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input onChange={(e) => handleSelectChange(e, 'priceCurrency')} checked={formData.priceCurrency == '3'} type="radio" className="form-check-input" id="radio_EUR" name="priceCurrency" value="3" />
                                                <label className="form-check-label" htmlFor="radio_EUR">EUR</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group col-md-12">
                                    <label className="form-label" htmlFor="pno">Description:</label>
                                    <textarea onChange={handleInputChange} name="description" className="form-control rounded"></textarea>
                                </div>


                                <div className="form-group col-md-12">
                                    <div className='d-flex flex-column justify-content-center'>
                                        <label className="form-label" htmlFor="pno">Premium Announcement Credit: {}</label>
                                        <label className="form-label" htmlFor="pno">Regular Announcement Credit: {}</label>
                                    </div>
                                </div>

                                <div className='form-group col-md-12'>
                                    <Form.Group className='d-flex flex-row  align-items-center' controlId="premiumRadio">
                                        <Form.Check
                                            type="radio"
                                            label="Regular"
                                            name="IsPremium"
                                            value="regular"
                                            className='me-2'
                                            checked={!formData.IsPremium}
                                            onChange={handleRadioChange}/>

                                        <Form.Check
                                            type="radio"
                                            label="Premium"
                                            name="IsPremium"
                                            value="premium"
                                            checked={formData.IsPremium}
                                            onChange={handleRadioChange}/>
                                    </Form.Group>
                                </div>


                            </div>

                            <button type="submit" onClick={handleSubmit}  className="btn btn-primary" disabled={isLoading}>{isLoading ? 'Creating Announcement...' : 'Create Announcement'}</button>

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
                    </form>
                </div>

            </div>
                </>
            )}
        </div>

    );

}

export default NewAnnouncement;
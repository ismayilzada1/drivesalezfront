import React, {useEffect, useState} from 'react';
import Logo from '../logo';
import './NewAnnouncement.css'
import Service from "../../api-services/service";
const NewAnnouncement=()=>
{

    const MyService= new Service();

    const [carBrands, setCarBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');

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
    const [selectedCountry, setSelectedCountry] = useState('');
    const [Cities, setCities] = useState([]);

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
        distanceUnit:'KM',
        ownerQuantity:'',
        engineVolume:'',
        horsePower:'',
        seatCount:'',
        vinCode:'',
        price:'',
        priceCurrency:'1',
        credit:false,
        barter:false,
        brandNew:false,
        description:'',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSelectChange = (event, field) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    useEffect(() => {

        MyService.getAllCarModels()
            .then((data) => setCarModels(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllCarColors()
            .then((data) => setCarColors(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllCarFuelTypes()
            .then((data) => setCarFuelTypes(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllCarBodyTypes()
            .then((data) => setCarBodyTypes(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllCarDriveTrainTypes()
            .then((data) => setCarDriveTrainTypes(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllCarGearboxTypes()
            .then((data) => setCarGearboxTypes(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllCarMarketVersions()
            .then((data) => setCarMarketVersions(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllCarOptions()
            .then((data) => setCarOptions(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllCarConditions()
            .then((data) => setCarConditions(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllCarMakes()
            .then((data) => setCarBrands(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllManufactureYears()
            .then((data) => setManufactureYears(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllCountries()
            .then((data) => setCountries(data))
            .catch((error) => console.error('Error fetching car makes:', error));

        MyService.getAllCities()
            .then((data) => setCities(data))
            .catch((error) => console.error('Error fetching car makes:', error));

    }, []);


    useEffect(() => {
        console.log(selectedBrand);
        console.log(formData)
    }, [formData]);

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
        console.log(selectedCountry);
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const filteredCities = Cities.filter(
        (city) => city.country.id == selectedCountry
    );


    const filteredModels = carModels.filter(
        (model) => model.make.id == selectedBrand
    );


    const handleSubmit = async(e) => {
        e.preventDefault();

        console.log(formData);
        setIsLoading(true);


        const data = {
            "yearId": parseInt(formData.manufactureYear, 10),
            "makeID": parseInt(selectedBrand,10),
            "modelID": parseInt(formData.model,10),
            "fuelTypeID": parseInt(formData.fuelType,10),
            "gearboxID": parseInt(formData.gearboxType,10),
            "driveTrainTypeID": parseInt(formData.driveTrainType,10),
            "bodyTypeID": parseInt(formData.bodyType,10),
            "conditionsIDs": formData.conditions,
            "optionsIDs": formData.options,
            "colorID": parseInt(formData.color,10),
            "marketVersionID": parseInt(formData.marketVersion,10),
            "horsePower": parseInt(formData.horsePower, 10),
            "isBrandNew": formData.brandNew,
            "ownerQuantity": parseInt(formData.ownerQuantity, 10),
            "seatCount": parseInt(formData.seatCount, 10),
            "vinCode": formData.vinCode,
            "mileAge": parseInt(formData.mileage, 10),
            "mileageType": parseInt(formData.distanceUnit,10),
            "engineVolume": parseInt(formData.engineVolume, 10),
            "imageUrls": [
                {
                    "id": 0,
                    "url": "string"
                }
            ],
            "countryId": parseInt(selectedCountry,10),
            "cityId": parseInt(formData.city,10),
            "applicationUserID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "barter": formData.barter,
            "onCredit": formData.credit,
            "description": formData.description,
            "price": parseInt(formData.price, 10),
            "currency": parseInt(formData.priceCurrency,10)
        };


        try {
            const response= await MyService.SendNewAnnounement(data);


            if (response.status === 200) {
                setShowSuccessAlert(true);
            } else {
                setShowAlert(true);
                setAlertMessage('Something went wrong !');
            }
        } catch (error) {
            setShowAlert(true);
            setAlertMessage('Something went wrong !');
        }

        setIsLoading(false);
    };


    return(
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">Vehicle Information</h4>
                </div>
            </div>
            <div className="card-body">
                <div className="new-user-info">
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="fname">Make: </label>
                                <select  onChange={handleBrandChange}  className="form-control" id="fname">
                                    <option disabled selected >Select Vehicle Make</option>
                                    {carBrands.map((brand) => (
                                        <option key={brand.id} value={brand.id}>
                                            {brand.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="lname">Model: </label>
                                <select onChange={(e) => handleSelectChange(e, 'model')}  className="form-control" id="lname">
                                    <option disabled selected>Select Vehicle Model</option>
                                    {filteredModels.map((model) => (
                                        <option key={model.id} value={model.id}>
                                            {model.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="add1">Body Type: </label>
                                <select onChange={(e) => handleSelectChange(e, 'bodyType')}  className="form-control" id="add1">
                                    <option disabled selected>Select Vehicle Body Type</option>
                                    {carBodyTypes.map((bodyType) => (
                                        <option key={bodyType.id} value={bodyType.id}>
                                            {bodyType.name}
                                        </option>
                                    ))}

                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="add2">Fuel Type:</label>
                                <select onChange={(e) => handleSelectChange(e, 'fuelType')} className="form-control" id="add2">
                                    <option disabled selected>Select Vehicle Fuel Type</option>
                                    {carFuelTypes.map((ft) => (
                                        <option key={ft.id} value={ft.id}>
                                            {ft.fuelType}
                                        </option>
                                    ))}

                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="cname">Drive Train Type:</label>
                                <select onChange={(e) => handleSelectChange(e, 'driveTrainType')} className="form-control" id="cname">
                                    <option disabled selected>Select Drive Train Type</option>
                                    {carDriveTrainTypes.map((driveTrainType) => (
                                        <option key={driveTrainType.id} value={driveTrainType.id}>
                                            {driveTrainType.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="cname">Gearbox Type:</label>
                                <select onChange={(e) => handleSelectChange(e, 'gearboxType')} className="form-control" id="cname">
                                    <option disabled selected>Select Gearbox Type</option>
                                    {carGearboxTypes.map((gearboxType) => (
                                        <option key={gearboxType.id} value={gearboxType.id}>
                                            {gearboxType.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

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


                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="year">Year:</label>
                                <select onChange={(e) => handleSelectChange(e, 'manufactureYear')} className="form-control" id="year">
                                    <option disabled selected>Select Vehicle Year</option>
                                    {ManufactureYears.map((year) => (
                                        <option key={year.id} value={year.id}>
                                            {year.year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="pno">Color:</label>
                                <select onChange={(e) => handleSelectChange(e, 'color')} className="form-control" id="pno">
                                    <option disabled selected>Select Vehicle Color</option>
                                    {carColors.map((color) => (
                                        <option key={color.id} value={color.id}>
                                            {color.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="pno">Owner Quantity:</label>
                                <input onChange={handleInputChange} type="number" name="ownerQuantity" className="form-control rounded" min="0"/>
                            </div>

                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="pno">Engine Volume:</label>
                                <input onChange={handleInputChange} name="engineVolume" type="number" className="form-control rounded" min="0"/>
                            </div>



                            <div className="form-group col-md-6">
                                <label className="form-label" htmlFor="pno">Market Version:</label>
                                <select onChange={(e) => handleSelectChange(e, 'marketVersion')} className="form-control" id="pno">
                                    <option disabled selected>Select Vehicle Market Version</option>
                                    {carMarketVersions.map((marketVersion) => (
                                        <option key={marketVersion.id} value={marketVersion.id}>
                                            {marketVersion.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

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
                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="pno">Country:</label>
                                    <select onChange={handleCountryChange} className="form-control" id="pno">
                                        <option disabled selected>Select Country</option>
                                        {Countries.map((country) => (
                                            <option key={country.id} value={country.id}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label className="form-label" htmlFor="pno">City:</label>
                                    <select onChange={(e) => handleSelectChange(e, 'city')} className="form-control" id="pno">
                                        <option disabled selected>Select City</option>
                                        {filteredCities.map((city) => (
                                            <option key={city.id} value={city.id}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

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
                            </div>

                            <button type="submit" onClick={handleSubmit}  className="btn btn-primary" disabled={isLoading}>{isLoading ? 'Signing In...' : 'Sign In'}</button>

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
        </div>
    );

}

export default NewAnnouncement;
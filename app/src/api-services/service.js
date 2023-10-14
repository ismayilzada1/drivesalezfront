export default class Service {
    _base_url = 'https://localhost:7261/api';

    async getResource(url) {
        const result =
            await fetch(`${this._base_url}${url}`)
        if (!result.ok) {
            throw new Error(`Error: Status code ${result.status}`)
        }
        return await result.json()
    }

    getAllCarMakes = async()=>{
        return  await this.getResource(`/Details/get-all-makes`);
    }

    getAllCarModels = async()=>{
        return  await this.getResource(`/Details/get-all-models`);
    }

    getAllCarColors = async()=>{
        return await this.getResource(`/Details/get-all-colors`);
    }

    getAllCarBodyTypes = async()=>{
        return  await this.getResource(`/Details/get-all-body-types`);
    }

    getAllCarFuelTypes = async()=>{
        return  await this.getResource(`/Details/get-all-fuel-types`);
    }

    getAllCarDriveTrainTypes = async()=>{
        return  await this.getResource(`/Details/get-all-drivetrain-types`);
    }

    getAllCarGearboxTypes = async()=>{
        return  await this.getResource(`/Details/get-all-gearbox-types`);
    }

    getAllCarMarketVersions = async()=>{
        return  await this.getResource(`/Details/get-all-market-versions`);
    }

    getAllCarOptions = async()=>{
        return await this.getResource(`/Details/get-all-options`);
    }

    getAllCarConditions = async()=>{
        return  await this.getResource(`/Details/get-all-conditions`);
    }

    getAllManufactureYears = async()=>{
        return  await this.getResource(`/Details/get-all-years`);
    }

    getAllCountries = async()=>{
        return  await this.getResource(`/Details/get-all-countries`);
    }

    getAllCities = async()=>{
        return  await this.getResource(`/Details/get-all-cities`);
    }

    SendNewAnnounement=(formData)=>{
        console.log(formData);
    }





}
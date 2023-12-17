export default class CommonDataService {
    // _base_url = 'https://drivesalez.azurewebsites.net/api';
    _base_url = 'https://localhost:7261/api';

    async getResource(url) {
        try {
            const result = await fetch(`${this._base_url}${url}`);
            if (!result.ok) {
                throw new Error(`Error: Status code ${result.status}`);
            }
            return await result.json();
        } catch (error) {
            console.error('Error in getResource:', error);
            throw error;
        }
    }

    async getAllCarMakes() {
        return await this.getResource(`/Details/get-all-makes`);
    }

    async getAllCarModels() {
        return this.getResource(`/Details/get-all-models`);
    }

    async getAllCarColors() {
        return await this.getResource(`/Details/get-all-colors`);
    }

    async getAllCarBodyTypes() {
        return await this.getResource(`/Details/get-all-body-types`);
    }

    async getAllCarFuelTypes() {
        return await this.getResource(`/Details/get-all-fuel-types`);
    }

    async getAllCarDriveTrainTypes() {
        return await this.getResource(`/Details/get-all-drivetrain-types`);
    }

    async getAllCarGearboxTypes() {
        return await this.getResource(`/Details/get-all-gearbox-types`);
    }

    async getAllCarMarketVersions() {
        return await this.getResource(`/Details/get-all-market-versions`);
    }

    async getAllCarOptions() {
        return await this.getResource(`/Details/get-all-options`);
    }

    async getAllCarConditions() {
        return await this.getResource(`/Details/get-all-conditions`);
    }

    async getAllManufactureYears() {
        return await this.getResource(`/Details/get-all-manufacture-years`);
    }

    async getAllCountries() {
        return await this.getResource(`/Details/get-all-countries`);
    }

    async getAllCities() {
        return await this.getResource(`/Details/get-all-cities`);
    }
    async getAllSubscriptions() {
        return await this.getResource(`/Details/get-all-subscriptions`);
    }


}

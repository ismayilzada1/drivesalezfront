import { json } from "react-router-dom";

export default class Service {
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
        return await this.getResource(`/Details/get-all-models`);
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
        return await this.getResource(`/Details/get-all-years`);
    }

    async getAllCountries() {
        return await this.getResource(`/Details/get-all-countries`);
    }

    async getAllCities() {
        return await this.getResource(`/Details/get-all-cities`);
    }

    async SendNewAnnounement(data) {
        try {
            const response = await fetch('https://localhost:7261/api/Announcement/create-announcement', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    async Login(requestBody) {
        try {
            const response = await fetch('https://localhost:7261/api/Account/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (response.status === 200) {
                const responseData = await response.json();
                localStorage.setItem("accessToken",responseData.token);
            } else {
                const errorData = await response.json();
            }
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async  Register(requestBody) {
        try {
            const response = await fetch('https://localhost:7261/api/Account/Register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async  VerifyOTP(requestBody) {
        try {
            const response = await fetch('https://localhost:7261/api/Otp/verify-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async SendOTP(email){
        try {
            const response = await fetch('https://localhost:7261/api/Otp/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(email),
            });

            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

}

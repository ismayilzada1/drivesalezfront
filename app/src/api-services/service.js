import {json} from "react-router-dom";

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

    SendNewAnnounement=(data)=>{

        console.log(JSON.stringify(data));

        fetch('https://localhost:7261/api/Announcement/create-announcement', {
            method: 'POST', // Use 'POST' method to send data to the server
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(data), // Convert the JSON object to a string
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the response as JSON
            })
            .then(data => {
                // Handle the response data here
                console.log(data);
            })
            .catch(error => {
                // Handle any errors that occurred during the fetch
                console.error('Fetch error:', error);
            });

    }

    Login=(requestBody)=>{

        fetch('https://localhost:7261/api/Account/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.json());
                    console.log("Login successful !");
                } else {
                    // Registration failed, handle error here
                    console.error('Login failed');
                    console.log(response.error[0]);
                }
            })
            .catch((error) => {
                // Handle network errors or other issues here
                console.error('Error:', error);
            });
    }





}
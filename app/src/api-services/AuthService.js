import {useSelector} from "react-redux";

export default class AuthService {
    constructor() {
        this.baseUrl = 'https://localhost:7261/api';
    }


    async getResource(url) {
        try {
            const result = await fetch(`${this.baseUrl}${url}`);
            if (!result.ok) {
                throw new Error(`Error: Status code ${result.status}`);
            }
            return await result.json();
        } catch (error) {
            console.error('Error in getResource:', error);
            throw error;
        }
    }


    async Login(requestBody) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                const responseData = await response.json();

                return {
                    status: response.status,
                    data: responseData,
                };
            }

            return response;
        } catch (error) {
            console.error('Error in Login:', error);
            throw error;
        }
    }

    async Register(requestBody) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/register-default-account`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            return response;
        } catch (error) {
            console.error('Error in Register:', error);
            throw error;
        }
    }

    async ResetPassword(requestBody) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            return response;
        } catch (error) {
            console.error('Error in ResetPassword:', error);
            throw error;
        }
    }

    async Logout(token) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/logout`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
            });

            return response;
        } catch (error) {
            console.error('Error in Logout:', error);
            throw error;
        }
    }

}

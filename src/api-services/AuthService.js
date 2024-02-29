import {useSelector} from "react-redux";

export default class AuthService {
    constructor() {
        // this.baseUrl = 'https://drivesalez.azurewebsites.net/api';
        // this.baseUrl = 'https://localhost:7261/api';
        // this.baseUrl = 'http://drivesalez.site:5073/api';
        this.baseUrl='https://217.64.21.237:7261/api'

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

            console.log ("LOGIN");
            console.log (response);
            // if (response.ok) {
            //     const responseData = await response.json();
            //
            //     console.log (responseData);
            //     return {
            //         status: response.status,
            //         data: responseData,
            //     };
            // }

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

    async ChangePassword(requestBody){
        try {
            const response = await fetch(`${this.baseUrl}/Account/change-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            return response;
        } catch (error) {
            console.error('Error in Change Password:', error);
            throw error;
        }
    }

    async RefreshToken(credentials) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/refresh`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            return response;
        } catch (error) {
            console.error('Error in refresh:', error);
            throw error;
        }
    }




    async DeleteAccount(requestBody,token) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/delete-user`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(requestBody),
            });
            return response;
        } catch (error) {
            console.error('Error in Delete Account:', error);
            throw error;
        }
    }

    async ChangeEmail(requestBody,token) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/change-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(requestBody),
            });
            return response;
        } catch (error) {
            console.error('Error in Delete Account:', error);
            throw error;
        }
    }


}

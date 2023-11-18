export default class OtpService {
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

    async postRequest(endpoint, requestBody) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            return response;
        } catch (error) {
            console.error(`Error in ${endpoint}:`, error);
            throw error;
        }
    }

    async VerifyOTP(requestBody) {
        return await this.postRequest('Otp/verify-email', requestBody);
    }

    async SendOTP(email) {
        return await this.postRequest('Otp/send', { email });
    }
}

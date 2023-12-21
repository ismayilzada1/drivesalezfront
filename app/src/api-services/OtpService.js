export default class OtpService {
    // _base_url = 'https://drivesalez.azurewebsites.net/api';
    _base_url = 'https://localhost:7261/api';

    async  VerifyOTP(requestBody) {
        try {
            const response = await fetch(`${this._base_url}/Otp/verify-email`, {
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
            const response = await fetch(`${this._base_url}/Otp/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(email),
            });
            console.log (response);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
export default class OtpService {
    _base_url = 'https://localhost:7261/api';


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
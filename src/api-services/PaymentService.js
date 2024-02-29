export default class PaymentService {
    // _base_url = 'https://drivesalez.azurewebsites.net/api';
    // _base_url = 'https://localhost:7261/api';
    _base_url='https://217.64.21.237:7261/api'

    async TopUpBalance(data,token){
        try {
            const response = await fetch(`${this._base_url}/Payment/top-up-balance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });
            console.log ("elvin");
            console.log (response);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async AddAnnouncementLimit(subId,count,token){
        try {
            const response = await fetch(`${this._base_url}/Payment/add-announcement-limit?subscriptionId=${subId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(count),
            });
            console.log (response);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
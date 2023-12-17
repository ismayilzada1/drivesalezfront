export default class PaymentService {
    // _base_url = 'https://drivesalez.azurewebsites.net/api';
    _base_url = 'https://localhost:7261/api';


    async TopUpBalance(data,token){
        try {
            const response = await fetch(`https://localhost:7261/top-up-balance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });
            console.log ("ah")
            console.log (response);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async AddAnnouncementLimit(subId,count,token){
        try {
            const response = await fetch(`https://localhost:7261/add-premium-announcement-limit?subscriptionId=${subId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(count),
            });
            console.log ("ah")
            console.log (response);
            return response;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}
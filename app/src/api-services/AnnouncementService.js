export default class AnnouncementService {
    _baseUrl = 'https://localhost:7261/api';

    async getResource(url) {
        try {
            const result = await fetch(`${this._baseUrl}${url}`);
            if (!result.ok) {
                throw new Error(`Error fetching ${url}: Status code ${result.status}`);
            }
            return await result.json();
        } catch (error) {
            console.error(`Error in getResource for ${url}:`, error.message);
            throw error;
        }
    }

    async SendNewAnnouncement(data,token) {
        try {
            const response = await fetch(`${this._baseUrl}/Announcement/create-announcement`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log(response);


            return response;
        } catch (error) {
            console.error('Error in SendNewAnnouncement:', error.message);
            throw error;
        }
    }

    async GetAnnouncements(pageNumber = 1, pageSize = 10){
        try {


            const response = await fetch(`${this._baseUrl}/Announcement/get-announcements?PageNumber=${pageNumber}&PageSize=${pageSize}&announcementState=2`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response;
        } catch (error) {
            console.error('Error in SendNewAnnouncement:', error.message);
            throw error;
        }
    }


    async GetAnnouncementByID(id){
        try {


            const response = await fetch(`${this._baseUrl}/Announcement/get-announcement-by-id/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response;
        } catch (error) {
            console.error('Error in SendNewAnnouncement:', error.message);
            throw error;
        }
    }
}

export default class AnnouncementService {
    // _baseUrl = 'https://drivesalez.azurewebsites.net/api';
    // _baseUrl = 'https://localhost:7261/api';
    _base_url='https://217.64.21.237:7261/api'
    async getResource(url) {
        try {
            const result = await fetch(`${this._base_url}${url}`);
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
            const response = await fetch(`${this._base_url}/Announcement/create-announcement`, {
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
            const response = await fetch(`${this._base_url}/Announcement/get-all-active-announcements?PageNumber=${pageNumber}&PageSize=${pageSize}`, {
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

    async GetFilterAnnouncements(filter,pageNumber = 1, pageSize = 10){
        try {
            const response = await fetch(`${this._base_url}/Announcement/filter-announcements?&PageNumber=${pageNumber}&PageSize=${pageSize}&${filter}`, {
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

    async GetUserLimits(token){
        try {
            const response = await fetch(`${this._base_url}/Announcement/get-user-limit`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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
            const response = await fetch(`${this._base_url}/Announcement/get-active-announcement-by-id/${id}`, {
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

    async GetAnnouncementByIDAuthorize(id,token){
        try {

            const response = await fetch(`${this._base_url}/Announcement/get-announcement-by-id/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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

    async GetAllAnnouncementsByUserId(token){
        try {

            const response = await fetch(`${this._base_url}/Announcement/get-all-announcements-by-user-id`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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

    async GetAllActiveAnnouncementsByUserId(token){
        try {

            const response = await fetch(`${this._base_url}/Announcement/get-all-active-announcements-by-user-id`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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

    async GetAllInactiveAnnouncementsByUserId(token){
        try {

            const response = await fetch(`${this._base_url}/Announcement/get-all-inactive-announcements-by-user-id`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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

    async GetAllWaitingAnnouncementsByUserId(token){
        try {

            const response = await fetch(`${this._base_url}/Announcement/get-all-waiting-announcements-by-user-id`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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

    async MakeAnnouncementInactiveAuthorize(id, token){
        try {

            const response = await fetch(`${this._base_url}/Announcement/make-announcement-inactive/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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

    async MakeAnnouncementActiveAuthorize(id, token){
        try {

            const response = await fetch(`${this._base_url}/Announcement/reactivate-announcement/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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

    async DeleteAnnouncementAuthorize(id, token){
        try {

            const response = await fetch(`${this._base_url}/Announcement/delete-announcement/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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

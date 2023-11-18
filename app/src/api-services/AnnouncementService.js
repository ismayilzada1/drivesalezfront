import { json } from "react-router-dom";

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

    async SendNewAnnouncement(data) {
        try {
            const accessToken = localStorage.getItem("accessToken");
            if (!accessToken) {
                throw new Error("Access token not available.");
            }

            const response = await fetch(`${this._baseUrl}/Announcement/create-announcement`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data),
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

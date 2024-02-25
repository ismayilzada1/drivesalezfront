import React from 'react';
import AnnouncementCardUserProfile from '../AnnouncementCardUserProfile';
import AnnouncementCard from "../AnnouncementCard";

const AnnouncementsContainer = ({ announcements}) => {
    return (

        // <div className="container-fluid pt-3">
        //     <div className="row">
        //         {announcements?.map((announcement, index) => (
        //             <div className="col-lg-3 col-md-6 col-sm-12 mb-2" key={index}>
        //                 <AnnouncementCardUserProfile key={announcement.id} {...announcement} />
        //             </div>
        //         ))}
        //     </div>
        // </div>

    <div className="container-fluid pt-3 ">
        <div
            className="d-flex flex-row flex-wrap justify-content-start align-items-center announcement-cards-container">
            {announcements?.map((car, index) => (
                <div key={index} className="col-lg-3 mb-2">
                    <AnnouncementCardUserProfile {...car} />
                </div>
            ))}
        </div>
    </div>


)
    ;
};

export default AnnouncementsContainer;

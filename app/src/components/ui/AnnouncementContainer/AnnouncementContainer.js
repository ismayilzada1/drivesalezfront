import React from 'react';
import AnnouncementCardUserProfile from '../announcementCardUserProfile';

const AnnouncementsContainer = ({ announcements}) => {
    return (

            <div className="container-fluid pt-3">
                <div className="row">
                    {announcements?.map((announcement, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2" key={index}>
                            <AnnouncementCardUserProfile key={announcement.id} {...announcement} />
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default AnnouncementsContainer;

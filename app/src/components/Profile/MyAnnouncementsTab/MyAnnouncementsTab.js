import React,{useState} from "react";
import "./MyAnnouncementsTab.css"
import AccountTab from "../AccountTab";
import ProfileTab from "../ProfileTab";

const MyAnnouncementsTab=()=>{


    return (
            <div className="mt-3">

                <nav>
                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                    <button className="nav-link active me-4" id="nav-all-announcements-tab" data-bs-toggle="tab" data-bs-target="#nav-all-announcements" type="button" role="tab" aria-controls="nav-all-announcements" aria-selected="true">
                        All Anouncements (0)
                    </button>

                    <button className="nav-link me-4" id="nav-active-announcements-tab" data-bs-toggle="tab" data-bs-target="#nav-active-announcements" type="button" role="tab" aria-controls="nav-active-announcements" aria-selected="false">
                        Active Announcements (0)
                    </button>


                    <button className="nav-link me-4" id="nav-waiting-announcements-tab" data-bs-toggle="tab" data-bs-target="#nav-waiting-announcements" type="button" role="tab" aria-controls="nav-waiting-announcements" aria-selected="false">
                        Waiting Announcements (0)
                    </button>

                    <button className="nav-link me-4" id="nav-inactive-announcements-tab" data-bs-toggle="tab" data-bs-target="#nav-inactive-announcements" type="button" role="tab" aria-controls="nav-inactive-announcements" aria-selected="false">
                        Inactive Announcements (0)
                    </button>
                </div>
            </nav>


                <div className="tab-content" id="nav-tabContent">

                <div className="tab-pane fade show active" id="nav-all-announcements" role="tabpanel" aria-labelledby="nav-home-tab">
                    All Announcements
                </div>
                <div className="tab-pane fade" id="nav-active-announcements" role="tabpanel" aria-labelledby="nav-profile-tab">
                    Active Announcements
                </div>
                <div className="tab-pane fade" id="nav-waiting-announcements" role="tabpanel" aria-labelledby="nav-contact-tab">
                    Waiting Announcements
                </div>

                    <div className="tab-pane fade" id="nav-inactive-announcements" role="tabpanel" aria-labelledby="nav-contact-tab">
                        Inactive Announcements
                    </div>

            </div>

            </div>
    );
}

export default MyAnnouncementsTab;
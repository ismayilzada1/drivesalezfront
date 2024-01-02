import React, {useEffect} from 'react';
import './announcementCardUserProfile.css'
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const AnnouncementCardUserProfile = (announcement) => {
    const {id, make,model,price,mileage,mileageType,engineVolume,fuelType,year,currency,imageUrl } = announcement;
    const { t } = useTranslation();
    const navigate=useNavigate();
    const createLabelValue = (label, value) => (
        <li className="list-group-item m-0 p-2">
            <span className="label info-key">{t(label)}:</span>
            <span className="value">{value}</span>
        </li>
    );

    const handleCardClick=()=>{
        navigate(`/AnnouncementDetailsUserProfile/${id}`);
    }



    return (
            <a>
                <div className="col-sm-3">
                    <div className="card iq-mb-3 announcement-card" onClick={handleCardClick}>

                        {imageUrl && (
                            <img
                                src={imageUrl.url}
                                className="card-img-top img-fluid tall-image"
                                alt="vehicle-image"
                            />
                        )}

                        <div className="card-body announcement-card-body">
                            <h4 className="card-title">{make?.makeName} {model?.modelName}</h4>

                            <ul className="list-group list-group-flush m-0 p-0 b-0">
                                {createLabelValue ("fuelType", t(fuelType?.fuelType))}
                                {createLabelValue ("year", year?.year)}
                                {createLabelValue ("mileage", `${mileage} ${mileageType}`)}
                                {createLabelValue ("engineVolume", engineVolume)}
                            </ul>
                            <p className="card-title  float-end h5 m-2 opacity-50">{announcement?.announcementState}</p>
                            <h5 className="card-title text-success float-start h3 mt-2">{price} {currency?.currencyName}</h5>
                        </div>

                    </div>
                </div>
            </a>

    );
};

export default AnnouncementCardUserProfile;
import React from "react";
import "./AnnouncementCard.css";

const AnnouncementCard = (props) => {
    const { title, imageUrl, fuelType, year, mileage, price, location } = props;

    const createLabelValue = (label, value) => (
        <li className="list-group-item">
            <span className="label info-key">{label}:</span>
            <span className="value">{value}</span>
        </li>
    );

    return (
        <div className="col">
            <div className="card announcement-card">
                <img src={imageUrl} className="card-img-top img-fluid tall-image" alt={title} />
                <div className="card-body announcement-card-body">
                    <h5 className="card-title">{title}</h5>
                    <ul className="list-group list-group-flush">
                        {createLabelValue("Fuel Type", fuelType)}
                        {createLabelValue("Year", year)}
                        {createLabelValue("Mileage", `${mileage} km`)}
                        {createLabelValue("Location", location)}
                    </ul>
                    <h5 className="card-title text-success float-end h3 mt-2">{price} USD</h5>
                </div>
            </div>
        </div>
    );
}

export default AnnouncementCard;

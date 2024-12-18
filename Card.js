import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.country.imageUrl} alt="country image"/>
            <div className="card-info">
                <span className="country-name">{props.country.location}</span>
                <a href={props.country.googleMapsUrl}>View on Google Maps</a>
                <h2>{props.country.title}</h2>
                <p className="dates">{`${props.country.startDate} - ${props.country.endDate}`}</p>
                <p className="description">{props.country.description}</p>
            </div>
        </div>
    )
}
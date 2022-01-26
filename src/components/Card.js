import React from "react";
import Star from "../images/star.png";

export default function Card({img, rating, reviewCount, country, title, price}){
    return (
        <section className="card">
            <img className="card--image" src={`../images/${img}`} alt="swimmer"/>
            <p><img className="rating--icon" src={Star} alt="star"/>{rating} <span className="gray">({reviewCount}) - {country}</span></p>
            <p>{title}</p>
            <p><b>From ${price}</b> / person</p>
        </section>
    )
}
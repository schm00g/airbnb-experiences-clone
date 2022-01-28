import React from "react";
import Star from "../images/star.png";

export default function Card({img, rating, reviewCount, country, title, price, openSpots}){
    return (
        <section className="card">
            {openSpots === 0 &&
                <div className="card--badge">SOLD OUT</div>
            }
            <img className="card--image" src={require(`../images/${img}`)} alt="card"/>
            <p><img className="rating--icon" src={Star} alt="star"/>{rating} <span className="gray">({reviewCount}) - {country}</span></p>
            <p>{title}</p>
            <p><b>From ${price}</b> / person</p>
        </section>
    )
}
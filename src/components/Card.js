import React from "react";
import Star from "../images/star.png";

export default function Card(props){
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT";
    } else if (props.location === "Online"){
        badgeText = "ONLINE";
    }
    return (
        <section className="card">
            {badgeText &&
                <div className="card--badge">{badgeText}</div>
            }
            <img className="card--image" src={require(`../images/${props.coverImg}`)} alt="card"/>
            <p><img className="rating--icon" src={Star} alt="star"/>{props.rating} <span className="gray">({props.reviewCount}) - {props.country}</span></p>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </section>
    )
}
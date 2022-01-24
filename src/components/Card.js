import React from "react";
import CardImage from "../images/katie-zaferes.png";
import Star from "../images/star.png";

export default function Card(){
    return (
        <section className="card">
            <img className="card--image" src={CardImage} alt="swimmer"/>
            <p><img className="rating--icon" src={Star} alt="star"/>5.0 <span className="gray">(6) - USA</span></p>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </section>
    )
}
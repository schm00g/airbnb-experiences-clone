import React from 'react';
import Grid from '../images/photo-grid.png';

export default function Hero(){
    return (
        <section className="hero">
            <img className="photo--grid" src={Grid} alt="photo grid"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}
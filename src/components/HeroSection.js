import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import Logo from '../images/DOE_TMP.gif';
import Background from '../images/SatelliteEarth.gif';

function herosection() {
    return (
        <div className='hero-container'>
            <img className='background-animation' src={Background} alt='No Image' />
            <img className='logo-header' src={Logo} alt='No Image' />
            <h1 className='tagline'>Saving the Earth isn't a chore, it's a game.</h1>
        </div>
    )
}

export default herosection

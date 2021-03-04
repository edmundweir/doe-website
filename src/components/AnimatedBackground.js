import React from 'react';
import { Button } from './Button';
import './AnimatedBackground.css';
import '../App.css';
import Background from '../images/SatelliteEarth.gif';

function AnimatedBackground(props) {
    return (
        <div className='animation-container'>
            <img className='background-animation' src={Background} alt='No Image' />
            {props.content}
        </div>
    )
}

export default AnimatedBackground
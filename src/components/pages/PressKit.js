import React from 'react';
import './PressKit.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import Background from '../../images/SatelliteEarth.gif';

function PressKit () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <Titlebox>
                    <h2>Press Kit</h2>
                </Titlebox>
                <Textbox>
                    <h2>The Challenge</h2>
                    <br />
                    <p>
                        Here we are.
                    </p>
                </Textbox>        
            </div>        
        </>
    )
}

export default PressKit;
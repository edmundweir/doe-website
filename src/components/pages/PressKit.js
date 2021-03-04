import React from 'react';
import './PressKit.css';
import '../../App.css';
import Footer from '../Footer';
import Textbox from '../Textbox';
import Background from '../../images/SatelliteEarth.gif';

function PressKit () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <h1>Press Kit</h1>
                <Textbox>
                    <h2>The Challenge</h2>
                    <br />
                    <p>
                        Here we are.
                    </p>
                </Textbox>        
            </div>        
            <Footer />
        </>
    )
}

export default PressKit;
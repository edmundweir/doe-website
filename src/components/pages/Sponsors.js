import React from 'react';
import './PressKit.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import Background from '../../images/SatelliteEarth.gif';

function Sponsors () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <Titlebox>
                    <h2 className="titlebox">Sponsors</h2>
                </Titlebox>
                <Textbox>
                    <p>
                        Pioneering environmental initiatives and fancy time pumps don't just appear from nowhere - they are made by a small but dedicated team of people that need to feed and house themselves!
                    </p> <br />
                    <p>
                        If you are interested in sponsoring Descendants Of Earth, please send an email to contact@descendantsofearth.com and we will be in touch.
                    </p>
                </Textbox>        
            </div>        
        </>
    )
}

export default Sponsors;
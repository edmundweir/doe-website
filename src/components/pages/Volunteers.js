import React from 'react';
import './PressKit.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import Background from '../../images/SatelliteEarth.gif';

function Volunteers () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <Titlebox>
                    <h2 className="titlebox" id="page-title">Volunteers</h2>
                </Titlebox>
                <Textbox>
                    <p>
                        Do you have digital, artistic, musical or written skills that could assist Descendants Of Earth? Are you interested in supporting a pioneering project in environmental alternate-reality gaming? If so, we would love to speak to you!
                    </p> <br />
                    <p>
                        Please send an email to contact@descendantsofearth.com with your name and area of expertise and we will be in touch.
                    </p>
                </Textbox>        
            </div>        
        </>
    )
}

export default Volunteers;
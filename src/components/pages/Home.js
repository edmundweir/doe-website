import React from 'react';
import '../../App.css';
import './Home.css';
import Background from '../../images/SatelliteEarth.gif';
import Logo from '../../images/DOE_TMP.gif';
import Cards from '../Cards';
import Textbox from '../Textbox';

function Home () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className="hero-section">
                <img className='hero-logo' src={Logo} alt='Descendants Of Earth' />
                <h2 className='tagline'>Climate action is a multiplayer game.</h2>
            </div>
            <Cards />

            <Textbox>
                <h1 className='textbox-heading'>
                    Greetings Ancestor!
                </h1><br />
                <p> We are your descendants from the year 2412 and we need your help to save life on Earth.
                </p><br />
                <p>
                    In the future climate change has reshaped Earth into an uninhabitable wasteland. The only way we can change the timeline we are on now is to change the past itself.
                </p><br />
                <p>
                    Use our Time Pump to send resources you save through real environmental action into the future and help us regenerate the planet.
                </p><br />
                <p>
                    We’re running out of time. Quick, sign up for access to the Time Pump!
                </p>
            </Textbox>
        </>
    )
}

export default Home;
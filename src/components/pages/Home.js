import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Textbox from '../Textbox';

function Home () {
    return (
        <>
            <HeroSection />
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
            <Footer />
        </>
    )
}

export default Home;
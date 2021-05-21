import React from 'react';
import './PressKit.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import Logo from '../../images/DOE-Logo-v7-3.gif';
import LogoStatic from '../../images/DOE_Logo_May21.png';
import Banner from '../../images/Samp0_Sunset_Logo.png';
import Background from '../../images/backgrounds/shot_greenlight_crop.png';

function PressKit () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <Titlebox>
                    <h2 className="titlebox">Press Kit</h2>
                </Titlebox>
                <Textbox>
                    <p>
                        <i>FOR EMBARGOED RELEASE: June 5, 2021.</i> 
                    </p> <br /> <br />
                    <img className='hero-logo' src={Logo} alt='Descendants Of Earth' />
                    <br />
                    <h1 className="press-kit-heading">Play a game. Save the actual world. </h1>
                    <h3 className="press-kit-subheading">Reshape Earth’s future with real action in new climate survival game</h3>
                    <br /> <br />
                    <p>
                        <strong>MELBOURNE, June 5, 2021 - Descendants of Earth</strong> launched their Kickstarter campaign for a new game that is 400 years ahead of its time. 
                        Using real climate action to progress a time-bending storyline, players experience how their actions change the future and compete to see whose actions have the biggest impact. 
                        Team up or play solo as you build a settlement strong enough to survive the wastelands in the year 2412.
                    </p> <br />
                    <p>
                        “Descendants Of Earth is a new breed of social impact gaming, where enjoyment and immersion meet tangible outcomes for the player and the environment,” said co-founder Natalia Shafa.
                    </p> <br />
                    <p>
                        Help your descendants survive a climate-changed future by sending resources forward in time. 
                        Earn resources by inputting completed climate actions into your phone. Resources earned in-game are split into Energy, Water and Materials. 
                        The more resources players send to their descendants, the more their world improves. 
                    </p> <br />
                    <p>
                        “We are running out of time to stop runaway climate change, but games are a perfect avenue for generating the knowledge and willpower needed to save ourselves and our planet,” said co-founder Edmund Weir.
                    </p> <br />
                    <p>
                        Entry into the game’s early access program is available as a reward on their Kickstarter. 
                        Other rewards include locking in the name of your settlement or team, naming a mutant species, voicing a character and a range of merchandise. 
                        Early backers get the opportunity to shape the game itself while saving the actual world.
                    </p> <br />
                    <br />
                    <center><p>###</p></center>
                    <br />
                    <h3 className="boilerplate">About Descendants Of Earth:</h3>
                    <p>
                        Descendants Of Earth is an international startup formed in 2019, made up of team members from Australia and the United States. 
                        Their mission is to make environmental action fun and accessible in order to reach the critical mass of participation needed to prevent irreversible climate change and repair Earth’s ecosystems. 
                        The co-founders are Natalia Shafa and Edmund Weir. Natalia hails from Seattle, USA, while Edmund is a Melbourne Native. 
                        Since teaming up with Landing Site Studios (USA), the project has matured rapidly, with a full release expected for late 2021.                   
                    </p> <br /> <br />
                    <h3 className="boilerplate">Press Contact:</h3>
                    <p>
                        Natalia Shafa <br />
                        contact@descendantsofEarth.com <br />
                        <a href='https://www.DescendantsofEarth.com/' target='_blank'>https://www.DescendantsofEarth.com/</a> <br />
                        <a href='https://www.LandingSiteStudios.com/' target='_blank'>https://www.LandingSiteStudios.com/</a>
                    </p>
                    
                </Textbox>
                <br />
                <Textbox>
                    <h1 className="press-kit-heading">Promotional Images</h1>
                    <img className='media-imgs' src={Banner} alt='Descendants Of Earth' />
                    <br /> <br />
                    <img className='media-imgs' src={LogoStatic} alt='Descendants Of Earth' />
                </Textbox>      
            </div>        
        </>
    )
}

export default PressKit;
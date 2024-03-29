import React from 'react';
import './PressKit.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import Logo from '../../images/DOE-Logo-v7-3.gif';
import LogoStatic from '../../images/DOE_Logo_May21.png';
import Banner from '../../images/Sampo_PinkSunset2.png';
import SampoSweet2 from '../../images/SampoSweet2.png';
import SampoSweet3 from '../../images/SampoSweet3.png';
import SampoSweet4 from '../../images/SampoSweet4.png';
import Scientists4 from '../../images/Scientists4.png';
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
                        <i>FOR EMBARGOED RELEASE: July 24, 2021.</i> 
                    </p> <br /> <br />
                    <img className='hero-logo' src={Logo} alt='Descendants Of Earth' />
                    <br />
                    <h1 className="press-kit-heading">Gamifying Real Action to Prevent A Climate Crisis</h1>
                    <h3 className="press-kit-subheading">Reshape Earth’s future with real action in new climate survival mobile game</h3>
                    <br /> <br />
                    <p>
                        <strong>MELBOURNE, July 24, 2021 - Descendants of Earth</strong> launched their Kickstarter campaign for a new game that is 400 years ahead of its time. 
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
                        “We are running out of time to stop runaway climate change, but games are perfect for generating the knowledge, 
                        willpower and optimism needed to save ourselves and our planet,” said co-founder Edmund Weir.
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
                        Their mission is to make environmental action fun and accessible in order to reach the critical mass of participation needed to prevent irreversible climate change. 
                        The game is co-founded by Natalia Shafa and Edmund Weir. Natalia hails from Seattle, USA, and is a marketing veteran and sci-fi author. 
                        Edmund is an urban planner and game designer from Melbourne, Australia. 
                        The project has teamed up with Landing Site Studios (USA), with a full release expected for early 2022.                   
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
                    <img className='media-imgs' src={SampoSweet2} alt='Descendants Of Earth' />
                    <br /><br />
                    <img className='media-imgs' src={SampoSweet3} alt='Descendants Of Earth' />
                    <br /><br />
                    <img className='media-imgs' src={SampoSweet4} alt='Descendants Of Earth' />
                    <br /> <br />
                    <img className='media-imgs' src={Scientists4} alt='Descendants Of Earth' />
                    <br /> <br />
                    <img className='media-imgs' src={LogoStatic} alt='Descendants Of Earth' />
                    <br /><br />
                    <p>
                        Download our Press Kit for May 2021 <a href="https://www.fromsmash.com/DOE-PressKit-May2021" target="_blank">here.</a>
                    </p>
                </Textbox>      
            </div>        
        </>
    )
}

export default PressKit;
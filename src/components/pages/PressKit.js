import React from 'react';
import './PressKit.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import Logo from '../../images/DOE-Logo-v7-3.gif';
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
                        <i>FOR EMBARGOED RELEASE: May 21, 2021.</i> 
                    </p> <br /> <br />
                    <img className='hero-logo' src={Logo} alt='Descendants Of Earth' />
                    <br />
                    <h1 className="press-kit-heading">Play a game. Save the actual world. </h1>
                    <h3 className="press-kit-subheading">Reshape Earth’s future with real action in new climate survival game</h3>
                    <br /> <br />
                    <p>
                        <strong>MELBOURNE, May 21, 2021 - Descendants of Earth</strong> launched their Kickstarter campaign for a new game that is 400 years ahead of its time. 
                        Using real climate action to progress a time-bending storyline, players experience how their actions change the future and compete to see whose actions have the biggest impact. 
                        Team up or play solo as you build a settlement strong enough to survive the wastelands in the year 2412.
                    </p> <br />
                    <p>
                        “Descendants Of Earth is a new breed of social impact gaming, where enjoyment and immersion meet tangible outcomes for the player and the environment.” said co-founder Natalia Shafa.
                    </p> <br />
                    <p>
                        To send resources into the future, players input completed climate actions into their phone. 
                        Resources earned in-game are split into Energy, Water and Materials. 
                        The more resources players send to their descendants, the more their world improves. 
                    </p> <br />
                    <p>
                        “We are running out of time to stop runaway climate change, but games are a perfect avenue for generating the knowledge and willpower needed to turn our fate around.” said co-founder Edmund Weir.
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
                        Descendants Of Earth are an international startup formed in 2019, made up of team members from Australia and the United States. 
                        They were formed on the principle that climate action needs to be exciting if we are to build a movement broad enough to face the challenges ahead. 
                        Of the two co-founders, Natalia Shafa is a marketing manager and sci-fi author from Seattle, USA, and Edmund Weir is an urban planner, environmentalist and software developer from Melbourne, Australia.
                    <br /> <br />
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
            </div>        
        </>
    )
}

export default PressKit;
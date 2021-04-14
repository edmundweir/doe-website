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
                    <h2 className="titlebox">Press Kit</h2>
                </Titlebox>
                <Textbox>
                    <h1>Multiplayer environmental mobile game rewards players for real-world climate action </h1>
                    <h3>Environmentalism meets survival simulator with world first in alternate reality gaming</h3>
                    <br /> <br />
                    <p>
                        <strong>MELBOURNE, May 17, 2021 - Descendants of Earth</strong> launched their three-week Kickstarter crowdfunding campaign today for their upcoming dystopian climate-action mobile game. Descendants of Earth, the first mobile game of it’s kind, merges global survival gameplay with real-world environmental action. Players are contacted by their descendants from the year 2412 from a climate-collapsed future. In order to change Earth’s timeline, they must take real-world environmental action and send their saved resources to their descendants. 
                    </p> <br />
                    <p>
                        <i>“Descendants of Earth connects our actions today to their consequences hundreds of years from now, and shows us that the future is changeable,”</i> said co-founder Edmund Weir.
                    </p> <br />
                    <p>
                        In the future, a team of scientists create a mysterious structure that pumps matter through time. They call it ‘the Pipeline’ and use it to reach into the ancient past to communicate with their ancestors (the player) in a desperate plea for help. Players take environmental action to save resources and send them through the Pipeline and into the future to help their descendants rebuild civilization and shift humanity’s timeline toward a planet that can sustain life once more.
                    </p> <br />
                    <p>
                        Resources earned in-game are split into Energy, Water and Materials. The more resources players send to their descendants, the more their world improves. Descendants must be sent resources to keep them alive and thriving. Their daily vitals can be tracked through their mind, heart, and gut health bars. If they are kept happy, more descendants will join their settlement. If players stop sending resources, sickly descendants will leave in search of greener pastures. Players can join a patch and cooperate with other ‘ancestors’ to compete on a wider scale: by neighborhood, school, group or city.
                    </p> <br />
                    <p>
                    <strong>Key Features:</strong>
                    </p>
                    <ul>
                        <li>
                            Earn resources to rebuild a dying Earth by taking real climate action and recording it with your phone
                        </li>
                        <li>
                            Use your resources to build up a settlement for your descendants to survive the harsh future climate
                        </li>
                        <li>
                            Continuous action stabilizes the climate and changes the landscape to a world that can support more life
                        </li>
                        <li>
                            Players also assist a team of scientists and engineers in operating an experimental machine that pumps materials through time
                        </li>
                        <li>
                            Live game map connects players to geo-tagged action challenges and green businesses in their local area
                        </li>
                    </ul>
                </Textbox>        
            </div>        
        </>
    )
}

export default PressKit;
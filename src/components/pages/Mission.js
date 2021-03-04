import React from 'react';
import './Mission.css';
import '../../App.css';
import Footer from '../Footer';
import Textbox from '../Textbox';
import Background from '../../images/SatelliteEarth.gif';

function Mission () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <h1>Mission</h1>
                <Textbox>
                    <h2>What can be done about climate change?</h2>
                    <br />
                    <p>
                        More than 80% of Australians are worried about climate change, but don’t know how to make a real impact and feel helpless to go up against the mammoth fossil fuel industry and other polluters. 
                    </p> <br />
                    <p>
                    Descendants of Earth is a mobile game that merges real world environmental action with post-apocalyptic gameplay. DoE makes it easy to take action on your own or cooperatively, and to have fun while you do it.
                    </p> 
                </Textbox>
                <Textbox>
                    <h2>What are we building?</h2>
                    <br />
                    <ol>
                        <li>A <strong>tool</strong> to help you fight climate change more effectively by providing you with potential actions and their material impacts.</li>
                        <li>A <strong>game</strong> to explore, compete in with your friends and feel a sense of achievement for your actions.</li>
                        <li>An <strong>organising platform</strong> for activists and climate-focused groups.</li>
                        <li>A <strong>freely available</strong> app that lowers the barriers to entry for climate action.</li>
                    </ol>
                </Textbox>
                <Textbox>
                    <h2>How is DoE changing attitudes towards environmental action?</h2>
                    <br />
                    <p>
                        Descendants of Earth fights environmental paralysis by: 
                    </p>
                    <ol>
                        <li>Connecting our actions today to their long-term, generational impacts (both positive & negative) through science-based storytelling.</li>
                        <li>Demonstrating the value of different environmental actions (in terms of energy, water and materials saved) so that players can make educated decisions on how to use their time and resources most effectively.</li>
                        <li>Bringing players together so that they can engage in environmental action on a larger scale and forge a sense of community through cooperation.</li>
                        <li>Engaging players of all ages to cultivate a culture of action and optimism toward our climate future.</li>
                    </ol>
                </Textbox>          
            </div>        
            <Footer />
        </>
    )
}

export default Mission;
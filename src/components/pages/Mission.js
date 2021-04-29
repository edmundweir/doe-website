import React from 'react';
import './Mission.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import Background from '../../images//backgrounds/shot_aurora1_crop.png';

function Mission () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <Titlebox>
                    <h2>Mission</h2>
                </Titlebox>
                <Textbox>
                    <h2>What is Descendants Of Earth?</h2>
                    <br />
                    <p>
                        Descendants of Earth (DOE) is a mobile game that merges real world environmental action with climate survival gameplay. 
                        DOE makes it easy to take action on your own or cooperatively, and to have fun while you do it. <br /><br />
                        DOE is:
                    </p>
                    <ol>
                        <li>A <strong>tool</strong> to help you fight climate change more effectively by providing you with potential actions and their material impacts.</li>
                        <li>A <strong>game</strong> to explore, compete in with your friends and experience a sense of achievement for your actions.</li>
                        <li>An <strong>organising platform</strong> for activists and climate-focused groups.</li>
                        <li>A <strong>freely available app</strong> that lowers the barriers to entry for climate action.</li>
                    </ol>
                </Textbox>
                <Textbox>
                    <h2>How does DOE change attitudes towards climate action?</h2>
                    <br />
                    <ul>
                        <li>Connect your actions today to their long-term, generational impacts (both positive & negative) through storytelling based on the most up-to-date science.</li>
                        <li>Find the value of different environmental actions (in terms of energy, water and materials saved) so you can make educated decisions on how to use your time and resources most effectively to combat climate change.</li>
                        <li>Kick ass for the planet at scale and forge a sense of community while you do it by teaming up with mates new and old.</li>
                    </ul>
                </Textbox>          
            </div>        
        </>
    )
}

export default Mission;
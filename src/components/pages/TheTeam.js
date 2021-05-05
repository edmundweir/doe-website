import React from 'react';
import './PressKit.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import Background from '../../images/backgrounds/shot_aurora2_crop.png';

function TheTeam () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <Titlebox>
                    <h2 className="titlebox">The Team</h2>
                </Titlebox>
                <Textbox>
                    <p>
                    Descendants Of Earth is an international startup formed in 2019 by a team from Australia and the United States. <br /><br />
                    </p> <br />
                    <center><h2>The Team</h2></center>
                    <p>
                        <strong>Natalia Shafa</strong> (USA), <i>Co-Founder</i> <br />
                        Climate fiction author, marketing veteran and serial innovator. 
                        Natalia has helped design and write DOE while leading our outreach campaign.
                    </p> <br />
                    <p>
                        <strong>Edmund Weir</strong> (AUS), <i>Co-Founder</i> <br />
                        Urban planner, environmentalist and software developer. 
                        Edmund has also helped design and write DOE while leading our website and app development. 
                        He also assists with environmental impact valuations.
                    </p> <br />
                    <p>
                        DOE could not be what it is without the help of the <a href='www.landingsitestudios.com' target='_blank'>Landing Site Studios Collective</a>, which includes the following artists:
                    </p> <br />
                    <p>
                        <strong>Ian Helm</strong> (USA)<br />
                        Creative powerhouse and conjurer of the weird and wonderful. 
                        Ian has helped visualise the future world of DOE with his drawings, models, animations, characters and writing as our resident art director.
                    </p> <br />
                    <p>
                        <strong>Sarajane Helm</strong> (USA)<br />
                        Wielding an unbeatable eye for detail and a library of homegrown textures, 
                        Sarajane brings that extra crunchy layer of realism and delightfully playful flourish to our characters, environments and text.
                    </p> <br />
                    <p>
                        <strong>Bryan Helm</strong> (USA)<br />
                        Prepare to go on an inter-dimensional journey as Bryan redefines what music can be and 
                        explores the uplifting effect it can have on the mind. In doing so he provides a soundtrack to DOE that is like no other.
                    </p> <br />
                </Textbox>        
            </div>        
        </>
    )
}

export default TheTeam;
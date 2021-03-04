import React from 'react';
import './Kickstarter.css';
import '../../App.css';
import Footer from '../Footer';
import Textbox from '../Textbox';
import Background from '../../images/SatelliteEarth.gif';

function Kickstarter () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <h1>Kickstarter</h1>
                <Textbox>
                    <p>
                    In May 2020, we are launching a crowdfunding campaign on Kickstarter to raise capital for improvements to the game. Crowdfunders can pay to reserve their profile name, access the alpha version, join our chatrooms and get limited edition merchandise.
                    </p> <br />
                    <p>
                    Through the crowdfunding campaign we will add new story content as ‘chapters’ in the wider arc. We will add new challenges for players to face, and an in-game map where players can post potential environmental actions in their local area, and where we can promote green businesses.
                    </p>
                </Textbox> 
                <Textbox>
                    <h2>Gameplay</h2>
                    <br />
                    <p>
                    The core gameplay loop consists of: </p>
                    <ol>
                        <li>
                            Finding an action that is achievable in real life in the lists provided within the game.
                        </li>
                        <li>
                        Acting in their home, workplace or community and logging it in-game.
                        </li>
                        <li>
                        Improving their descendants’ settlement and caring for their vitals and wellbeing with resources and rewards earned from action.
                        </li>
                    </ol> <br />
                    <hr/> <br />
                    <p>
                    For example, my descendent’s vitals were running low, so I took public transport to work today instead of driving my car, thus earning 329 energy units, which I can then use to send a care package to my descendant through the Pipeline to keep them alive and happy. This action also earned me 500 life points (experience points), which leveled me up to level three and caused a tree to sprout in the future, increasing oxygen levels for my descendants. I gained access to more constructible items, including a workbench and waterpump, which will further improve my settlement and require more resources to craft.
                    </p> <br />
                    <hr/> <br />
                    <p>
                    There are three primary mechanics the player is challenged by:</p>
                    <ol>
                        <li>
                        Managing the health and wellbeing of the descendants, which are split into mind, heart and gut health, in a style akin to an apocalyptic version of The Sims. If properly attended to, the player’s tribe of descendants will grow in number; if not, then the descendants will leave in search of better conditions.
                        </li>
                        <li>
                        Constructing a settlement for your descendants, similar in style and mechanics to Fallout Shelter. Improving your settlement increases its population capacity, while opening up new interactions with the descendants. A stronger settlement is also necessary to survive the dangerous weather events that plague the world.
                        </li>
                        <li>
                        Maintaining the connection between our times, which requires a constant effort to sustain. If the player stops sending resources, the connection to their descendants will start to fray, and they will lose their visual feed of the future (except for the interface) until they take an environmental action.
                        </li>
                    </ol>
                </Textbox>
                <Textbox>
                    <h2>The Story So Far</h2>
                    <br />
                    <p>The storyline in Descendants Of Earth centers around:</p>
                    <ul>
                        <li>Uncovering the mysterious origins of the Pipeline</li>
                        <li>Assisting the team of engineers that have connected to our time known as ‘The Pipers’</li>
                        <li>Learning about the history of Earth in the 392 years that have passed</li>
                        <li>Building a relationship with our descendants and making amends for the challenges we have inflicted upon them.</li>
                    </ul><br />
                    <p>
                    The Pipeline is a reappropriated oil pipeline that runs in a loop around Earth’s northern latitudes, connecting Northern Europe, Asia and North America. It was abandoned by its creators towards the end of the 21st Century, and bears the markings of two different corporations. It’s constructors appear to have been experimenting in time-dilation technology before they mysteriously vanished. The early chapters of the game will be set in these barren regions. However, as the narrative expands, the Pipeline will be extended into southern latitudes towards the equator, where new areas, old cities and different factions lie in wait for the players to explore.
                    </p> <br />
                    <p>
                    The team of engineers known as The Pipers have established their headquarters in an abandoned climate research station on the remote island of Jan Mayen, off the coast of Greenland. Here, they have constructed a Time Pump that looks somewhat like a windmill and detects temporal shifts that occur through changes to the timeline by player action. At the heart of the machine lies a time crystal that is turned by the arms of the windmill, and which detects changes to the reality. When a shift occurs, the materials produced in their dimension are identified by the Time Pump and rerouted into the Pipeline to be sent off to the descendants linked to the ancestor (the player) that took action. The team of engineers is made up of multiple departments, including Temporal Observation, Engineering, Climatology, Biology and IT, all of whom have particular needs and associated questlines.
                    </p> <br />
                    <p>
                    Life on Earth has changed dramatically, with rising temperature, sea levels, drought and fire driving most of the remaining human population towards the poles where the climate has become strangely tropical. The society that has emerged from these challenges is one without borders or a single clearly defined authority. Instead, it is made up of a multitude of groups and factions that the Pipers aim to connect through the Pipeline.
                    </p> <br />
                    <p>
                    The descendants have heard stories of their ancestors' folly, but have only now come face to face with the people that reshaped the Earth. They expected to meet ignorant barbarians in 2020, and have been surprised to encounter people much like themselves. Now they are curious to know what life was like before it collapsed, and are eager for us to understand the urgency of our environmental problems.
                    </p>
                </Textbox>
                <Textbox>
                    <h2>Financing The Operation</h2>
                    <br />
                    <p>
                        Once the full game is released it will be free to download.
                        <br /><br />
                        However, to make sure we can run our servers and continue to improve the game world, we are relying on the following revenue streams:
                        <br /><br />
                        <strong>Green business map & product list:</strong> By linking players to green product suppliers through our in-game action lists we earn an income from advertising. E.g. Under the ‘Install a solar panel’ action, the player can click ‘Buy Now for $99’ to be linked to an advertised seller.
                        <br/><br/>
                        <strong>Carbon offsets:</strong> Purchased within the app to earn in-game resource rewards. Each purchase made will contribute to a tally of trees you have planted through a nonprofit partnership.
                        <br/><br/>
                        <strong>In-game purchases:</strong>Through updates to the game we build out our virtual shopfront. In it players can buy special game contents, including outfits for their characters, access to new storylines and acceleration of the construction of important buildings which would otherwise take days or weeks (e.g. ‘pay $1 to instant-build your workshop and unlock new building options!’).
                        <br/><br/>
                        <strong>Resource marketplace:</strong>If you want to spend money on your Descendants' wellbeing, that's great - except you won't buy those resources from us, you will buy them from other players through our resource marketplace. We'll take a cut, sure, but the rest goes directly to the player that sold you their hard-earned resources.
                    </p>
                </Textbox>         
            </div>        
            <Footer />
        </>
    )
}

export default Kickstarter;
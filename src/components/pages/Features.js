import React from 'react';
import './Features.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import Background from '../../images/SatelliteEarth.gif';

function Roadmap () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <Titlebox>
                    <h2>Features</h2>
                </Titlebox>
                <Textbox>
                    <h2>Overview:</h2>
                    <br />
                    <ol>
                        <li>
                            Earn resources to rebuild a dying Earth by taking real climate action and recording it with your phone.
                        </li>
                        <li>
                            Use your resources to build up a settlement for your descendants to survive the harsh future climate.
                        </li>
                        <li>
                            Continuous action stabilizes the climate and changes the landscape to a world that can support more life.
                        </li>
                        <li>
                            Players also assist a team of scientists and engineers in operating an experimental machine that pumps materials through time.
                        </li>
                        <li>
                            Live game map connects players to geo-tagged action challenges and green businesses in their local area.
                        </li>
                    </ol>
                </Textbox> <br />
                 <Textbox>
                    <h2>Features We've Created Already:</h2>
                    <br />
                    <p>
                    
                        <strong>Impact-Based Rewards:</strong> Resources earned in-game are split into Energy, Water and Materials, and are based on the average impact of those actions in our time. Once sent through the Pipeline, those resources are converted into the materials your descendants need to build a settlement in the year 2412. This allows DOE to function as an environmental footprint calculator, so that you can track your impact and progress.
                        <br /><br />
                        <strong>Environmental Action Database:</strong> DOE’s categorized list of environmental actions can be taken from home, your workplace or throughout your community. Actions include step-by-step instructions, links to external guides, and their expected impact.
                        <br /><br />
                        <strong>Quests:</strong> You will receive your quests from a team of engineers who operate the Pipeline that connects our timelines. They are in constant need of assistance to maintain the connection. Quests come from multiple departments, including Temporal Observation, Engineering, Climatology, Oceanography and more, who all require your urgent assistance!
                        <br /><br />
                        <strong>Player Profiles:</strong> Keep track of your actions, resources, and achievements on your profile. Watch your environmental impact build up over time with DOE’s footprint calculator and compete with friends (or enemies!). Profiles can be set to public, friends-only or private.
                        <br /><br />
                        <strong>Descendant Vitals: </strong>Send resources to keep your Descendants alive and thriving! Track their vitals daily through their mind, heart, and gut health bars. Keep them happy, and more descendants will join your settlement. Stop sending resources, and sickly descendants will leave in search of greener pastures.
                        <br /><br />
                        <strong>Create Custom Actions: </strong>Got a great environmental action that you can’t find on the actions list? Get credit where credit is due, and submit it as custom action for review! If we love it and add it to DOE’s public database for all to use, you’ll earn bonus resources as a thank-you and get your name in the credits for all time (or at least until the next collapse occurs and all knowledge is lost).
                        <br /><br />
                        <strong>Multiplayer:</strong> Climate action is a multi-player game - none of us can do this alone! Use DOE’s Friend List to team up with your mates to tackle larger actions in your area or compete against each other for bragging rights.
                        <br /><br />
                        <strong>Online Resource Bank: </strong>The resources you earn from your actions are saved on our servers in the cloud, so they are available for you (and your descendants) from any device you login from.
                        <br />
                    </p>
                </Textbox> <br />
                <Textbox>
                    <h2>Features We'll Be Adding:</h2>
                    <br />
                    <p>
                    
                        <strong>World Improvements with Level Progression:</strong> The more resources you send to your descendants, the more their world improves. Remember, you are in their past, and with each choice you make, you change and improve humanity’s timeline. The future is changeable, so remember to compost, damn it!
                        <br /><br />
                        <strong>Action Verification System:</strong> Let’s get verified! Put your photo where your mouth is by verifying larger actions with photographic proof. Then it’s time to verify actions by other players and receive a portion of their earned resources for your efforts.
                        <br /><br />
                        <strong>Natural Disasters:</strong> The climate has changed dramatically in the last 400 years! From super storms to wildfires, droughts to floods, insect plagues and algae blooms, life has been pushed to the brink. These are the enemies you face and why your help is needed. Your descendants will need a robust settlement to survive these dangers, or beware!
                        <br /><br />
                        <strong>Patches:</strong> Create or join as many patches as you want. A patch, like a guild or clan, allows you to work with your patchmates on cooperative goals and compete against rival patches. This means that groups of friends, families, schools, cities, heck nations, planets, alien races, can compete under their very own patch. Which liberal city is really the most woke? Which hippie household? Your dad loves to talk about environmentalism, but how often does he drive his three cars? Time to rub his nose in it with a patch!
                        <br /><br />
                        <strong>Constructible Items & Buildings: </strong>Build up your settlement and help your descendants survive the harsh climate of 2412! Spend your hard-earned resources on tools, structures, and vehicles to keep your descendants healthy and resilient so they can maintain their vitals and increase their numbers. Unlock new building options as your settlement grows.
                        <br /><br />
                        <strong>Cooperative Settlement Building: </strong>Build a shared settlement with other members of your patch. Get out those peacock feathers because this is a competition baby and you are going to win! Take pride in your efforts in-game and make your competitors cry with the most lavish base a post-apocalyptic survivor could ask for.
                        <br /><br />
                        <strong>High Scores:</strong> See how you rank compared to other players and compete for achievements and glory.
                        <br /><br />
                        <strong>Achievements: </strong>Earn achievements for major accomplishments and milestones. You just finished the laboratory restoration story chapter?  You’ve  earned the ‘Lab Technician’ achievement and received  the ‘Technician’ title on your profile, unlocking The Lab as an explorable area. Did you just complete your fifth cooperative action? You’ve earned the ‘Co-Worker’ achievement and can now post your own shared actions to DOE’s global map.
                        <br /><br />
                        <strong>Action Map:</strong> Use the Action Map to post shared actions in your local area, like ‘Cleanup needed in Central Park!’ or ‘March for the climate on May 22nd!’ Use the map to find collective actions in your area and join in. Check in once you reach the location to send the resources you earn for the action to your descendants!
                        <br /><br />
                        <strong>Putting Green Business on the Map:</strong> Are you a green business? Get verified by DOE and we’ll put your name on our in-game action map.
                        <br /><br />
                        <strong>Green Product Shop:</strong> Do you have a green product that saves waste, water, or energy? Maybe your product is made from recycled materials? Get verified by DOE and we’ll put your product in our in-game store. All products in the DOE store display the resources players can save by using them. Once purchased, those resources are added to the player’s account to be used by their descendants in the future.
                        <br /><br />
                        <strong>Classroom Use:</strong> Are you an educator looking to teach climate education in your classroom? Teach your students climate action through a fun mobile interface while claiming your class as a patch. Your students can compete against each other or cooperate to compete as a patch against other classrooms.
                        <br />
                    </p>
                </Textbox>          
            </div>        
        </>
    )
}

export default Roadmap;
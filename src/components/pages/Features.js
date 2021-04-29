import React from 'react';
import './Features.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import Background from '../../images/backgrounds/shot_dawnbreaks_crop.png';

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
                    
                        <strong>Impact-Based Rewards:</strong> Resources earned in-game are split into Energy, Water and Materials based on the average impact of those real-world actions. Once sent through the Pipeline, resources are converted into materials your descendants need to build settlements in the year 2412. DoE gamifies an environmental footprint calculator so that tracking your impact is fun and challenging.
                        <br /><br />
                        <strong>Environmental Action Database:</strong> DOE’s categorized list of environmental actions can be taken from home, your workplace or throughout your community. Actions include step-by-step instructions, links to external guides, and their expected impact.
                        <br /><br />
                        <strong>Quests:</strong> You receive your quests from a team of time-science engineers who operate the Pipeline. They are in constant need of assistance to maintain the connection. Quests come from multiple departments:Temporal Observation, Engineering, Climatology, Oceanography and more, who all need your help. There's lots to do!
                        <br /><br />
                        <strong>Player Profiles:</strong> Keep track of your actions, resources, and achievements through your profile. Watch your environmental impact build up over time with DOE’s footprint calculator and compete with friends (or enemies!). Profiles can be set to public, friends-only or private.
                        <br /><br />
                        <strong>Descendant Vitals: </strong>Save resources to keep your Descendants thriving! Track their vitals daily through mind, heart, and gut health bars. More descendants will join a prosperous settlement; stop sending resources, and sickly descendants will leave in search of greener pastures.
                        <br /><br />
                        <strong>Create Custom Actions: </strong>Got a great environmental action that you can’t find on the actions list? Get credit where credit is due, and submit it as custom action for review! If we love it and add it to DOE’s public database for all to use, you’ll earn bonus resources and get your name in the credits for all time (or at least until the next collapse occurs and all knowledge is lost).
                        <br /><br />
                        <strong>Multiplayer:</strong> Climate action is a multi-player game - none of us can do this alone! Use DOE’s Friend List to team up with your mates and tackle larger actions in your area, or compete against each other for bragging rights.
                        <br /><br />
                        <strong>Online Resource Bank: </strong>The resources you earn from your actions are saved on our servers in the cloud, so they are available for you (and your descendants) from any device you login from.
                        <br />
                    </p>
                </Textbox> <br />
                <Textbox>
                    <h2>Features We'll Be Adding:</h2>
                    <br />
                    <p>
                    
                        <strong>World Improvements with Level Progression:</strong> The more resources you send to your descendants, the more their world improves. 
                        Remember, you are in their past, and with each choice you make, you change and improve humanity’s timeline. 
                        The future is changeable, so remember to compost, damn it!
                        <br /><br />
                        <strong>Action Verification System:</strong> Put your photo where your mouth is with photographic proof of larger actions! 
                        Verify actions by other players and receive a portion of their earned resources for your efforts.
                        <br /><br />
                        <strong>Natural Disasters:</strong> The climate has changed dramatically in the last 400 years! 
                        From superstorms to wildfires, droughts to floods, insect plagues to algae blooms, life has been pushed to the brink. 
                        These are the enemies you face and why your help is needed. 
                        Your descendants will need a robust settlement to survive these dangers!
                        <br /><br />
                        <strong>Patches:</strong> A patch, like a guild or clan, allows you to work with your patchmates on cooperative goals and compete against rivals. 
                        Create or join as many patches as you want. 
                        Groups of friends, families, schools, cities, nations, planets, heck even alien races can compete under their very own patch. 
                        Which liberal city is really the most woke? Which hippie household? 
                        Your dad loves to talk about environmentalism, but how often does he drive his three cars? Time to rub his nose in it with your patch!
                        <br /><br />
                        <strong>Constructible Items & Buildings: </strong>Build up your settlement and help your descendants survive the harsh climate of 2412!
                        Spend your hard-earned resources on tools, structures, and vehicles to keep your descendants healthy and resilient so they can maintain their vitals and increase their numbers. 
                        Unlock new building options as your settlement grows!
                        <br /><br />
                        <strong>Cooperative Settlement Building: </strong>Build a shared settlement with other members of your patch. 
                        Get out those peacock feathers because this is a competition baby and you are going to win! 
                        Take pride in your efforts in-game and make your competitors cry with the most lavish base a post-apocalyptic survivor could ask for. 
                        Build a future you are proud to show off!
                        <br /><br />
                        <strong>High Scores:</strong> See how you rank compared to other players and compete for achievements and glory.
                        <br /><br />
                        <strong>Achievements: </strong>Earn achievements for major accomplishments and milestones.
                        You just finished the Laboratory Restoration chapter? Congrats, you’ve just earned the ‘Lab Technician’ achievement, received a ‘Technician’ title on your profile, and unlocked The Lab as an explorable area.
                        Did you just complete your fifth cooperative action? 
                        You’ve earned the ‘Co-Worker’ achievement and can now post your own shared actions to DOE’s global map.
                        <br /><br />
                        <strong>Action Map:</strong> Use the Action Map to post local shared actions, like ‘Cleanup needed in the park!’ or ‘March for the climate on May 22nd!’
                        Find collective actions in your area and join in. 
                        Check in once you reach the location and send the resources you earn to your descendants.
                        <br /><br />
                        <strong>Putting Green Business on the Map:</strong> Are you a green business? Get verified by DOE and we’ll put your name on our in-game action map.
                        <br /><br />
                        <strong>Green Product Shop:</strong> Do you have a green product that saves waste, water, or energy? Is it made from recycled materials? Get verified by DOE and we’ll add your product to our in-game store.
                        All products in the DOE store display the resources players can save by purchasing them. 
                        Those resources are added to the player’s account to be used by their descendants in the future.
                        <br /><br />
                        <strong>Classroom Use:</strong> Are you an educator looking to tackle climate science in your classroom? 
                        Explore climate action through a fun mobile interface while claiming your class as a patch. 
                        Your students can compete against each other or cooperate against other classrooms around the world!
                        <br />
                    </p>
                </Textbox>          
            </div>        
        </>
    )
}

export default Roadmap;
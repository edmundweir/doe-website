import React from 'react';
import './Roadmap.css';
import '../../App.css';
import Footer from '../Footer';
import Textbox from '../Textbox';
import Background from '../../images/SatelliteEarth.gif';

function Roadmap () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <h1>Roadmap</h1>
                <Textbox>
                    <h2>Game Features (Current & Future)</h2>
                    <br />
                    <p>
                    
                        <strong>Action verification system:</strong> Take photo proof of larger actions as proof. These photos are then randomly distributed to at least two players in the verification queue. The verifiers assess the validity of the action and earn a small resource reward for participating in the verification process.
                        <br /><br />
                        <strong>Custom actions:</strong> Submit new environmental actions for consideration to our Action List. This not only expands the action list, but builds player loyalty through inclusion.
                        <br /><br />
                        <strong>Constructible items and buildings:</strong> Spend your resources on constructible objects that will be permanently added to their settlement (unless destroyed) which improve the health and wellbeing of their descendants, add prestige to their profile and unlock new content.
                        <br /><br />
                        <strong>High scores:</strong> See how you rank compared to other players and compete for achievements and glory.
                        <br /><br />
                        <strong>Daily challenges: </strong>Keep the game experience engaging and competitive with new daily challenges intended to appeal to both casual players (who may only play once in a while) and hardcore players (that want to rack up trophies).
                        <br /><br />
                        <strong>Achievements: </strong>Track your progress and earn bragging rights with our achievement system.
                        <br /><br />
                        <strong>Story chapters:</strong> New story content added on a regular basis to keep players coming back to play.
                        <br /><br />
                        <strong>World improvements with level progression: </strong>Flora and wildlife returning to the world as the player levels up to remind the player that the future is changeable and to provide and uplifting experience.
                        <br /><br />
                        Multiplayer features:
                        Friends lists
                        To help players team up and compete with friends.
                        In-game chat
                        To add a social element to the gameplay experience.
                        Patches
                        Which work like clans or guilds except the player can join multiple patches and have the insignias of their patches worn by their descendants.
                        Encourage teamwork and community building.
                        Cooperative base construction for patches
                        To give the patches something to work on and build together.
                        Visit other players’ settlements
                        Take pride in your efforts in-game.

                        Global action map: Players can spend resources to place an action challenge on the map where they see one can be taken

                        Shared Challenges: Players can sign up to challenges in their local area and set a time and date to go and work on them with other players.

                        New areas: Explore outside of their base.
                    </p>
                </Textbox>             
            </div>        
            <Footer />
        </>
    )
}

export default Roadmap;
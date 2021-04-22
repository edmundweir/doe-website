import React from 'react';
import './Updates.css';
import '../../../App.css';
import Textbox from '../../Textbox';
import Titlebox from '../../Titlebox';
import { Link } from 'react-router-dom';
import Background from '../../../images/SatelliteEarth.gif';

function GooglePlay () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container' onLoad={scrollToTop}>
                <Titlebox>
                    <h1>Closed testing has begun on Google Play!</h1>
                    <br />
                    <center><p><i>January 2021</i></p></center>
                </Titlebox>
                <Textbox>
                    <p>
                        In January this year we began closed testing as part of our pre-alpha program on Google Play. At present we are testing the following features:
                    </p> <br />
                    <ul>
                        <li>
                            Environmental action lists
                        </li>
                        <li>
                            Resource rewards for actions taken
                        </li>
                        <li>
                            Offline income for ongoing actions
                        </li>
                        <li>
                            Player profiles
                        </li>
                        <li>
                            Descendant vitals
                        </li>
                        <li>
                            Action and interface tutorial
                        </li>
                        <li>
                            Authentification
                        </li>
                        <li>
                            Descendant movement and pathing
                        </li>
                        <li>
                            Interface navigation
                        </li>
                    </ul>
                    <br />
                    <p>
                        With this milestone behind us, the team is excited to stride forward into full alpha testing after our Kickstarter this May!
                    </p>
                    <br />
                    <br />
                    <center>
                        <Link to='/' onClick={scrollToTop}>
                            Back
                        </Link>
                    </center>
                </Textbox>        
            </div>     
        </>
    )
}

const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
}

export default GooglePlay;
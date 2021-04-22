import React from 'react';
import './Updates.css';
import '../../../App.css';
import Textbox from '../../Textbox';
import Titlebox from '../../Titlebox';
import { Link } from 'react-router-dom';
import Background from '../../../images/SatelliteEarth.gif';

function NewWebsite () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container' onLoad={scrollToTop}>
                <Titlebox>
                    <h1>Our new website is live!</h1>
                    <br />
                    <center><p><i>March 2021</i></p></center>
                </Titlebox>
                <Textbox>
                    <p>
                        Further improvements will be added through rolling updates over the coming few months. If you have any suggestions for changes or information you would like to see added, please let us know through our handy contact form (which you can find a link to in our footer). Have fun exploring and we will see you in the future!
                    </p>
                    <br />
                    <br />
                    <center>
                        <Link to='/' onClick={scrollToTop}>
                            Back
                        </Link>
                    </center>
                </Textbox>
                <br />     
            </div>     
        </>
    )
}

const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
}

export default NewWebsite;
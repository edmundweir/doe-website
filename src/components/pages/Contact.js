import React from 'react';
import './Contact.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import ContactForm from '../ContactForm';
import Background from '../../images/SatelliteEarth.gif';

function Contact () {
    return (
        <>
            <img className='background-animation' src={Background} alt='No Image' />
            <div className='page-container'>
                <Titlebox>
                    <h2>Contact Us</h2>
                </Titlebox>
                <Textbox>
                    <ContactForm />
                    <br />
                    <p>
                        You can also make contact with our team at contact@descendantsofearth.com.
                    </p>
                </Textbox>      
            </div>        
        </>
    )
}

export default Contact;
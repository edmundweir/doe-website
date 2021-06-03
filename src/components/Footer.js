import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import Logo from '../images/DOE_Icon_Glowing_3.png';
import Textbox from './Textbox';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About</h2>
                        <Link onClick={scrollToTop} to='/welcome-to-country' >Welcome To Country</Link>
                        <Link onClick={scrollToTop} to='/the-team' >The Team</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contacts</h2>
                        <Link onClick={scrollToTop} to='/contact' >Contact Form</Link>
                        <Link onClick={scrollToTop} to='/volunteers' >Volunteers</Link>
                        <Link onClick={scrollToTop} to='/sponsors' >Sponsors</Link>
                    </div>
                </div>
            </div> 
            <section className='social-media'>
                <div className='social-media-wrap'>
                    {/*<div className='social-icons'>
                        <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f'/>
                        </Link>
                        <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram'/>
                        </Link>
                        <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='YouTube'>
                            <i className='fab fa-youtube'/>
                        </Link>
                        <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                            <i className='fab fa-twitter'/>
                        </Link>
                    </div>*/}
                </div>
            </section>

            <div className='footer-logo'>
                <Link onClick={scrollToTop} to='/' >
                    <img className='thumbnail-logo' src={Logo} alt='Descendants Of Earth'/>
                </Link>
            </div>

            <div>
                    <p className='top-button' onClick={scrollToTop}>
                        Back to top.
                    </p>
                    <br />
                    <center><p className='website-rights'>
                        Copyright © Descendants Of Earth 2021
                    </p></center>
            </div>       
        </div>
    )
}

const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
}

export default Footer

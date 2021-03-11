import React from 'react';
import { Button } from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';
import Logo from '../images/DOE_Thumbnail.png';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join our mailing list to get first access to Descendants Of Earth!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-areas'>
                {/* NOTE: Wrapping the footer-input in a <form> means it will automatically submit if you hit enter */}
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>    
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>Our Team</Link>
                        <Link to='/'>Acknowledgements</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Volunteers</Link>
                        <Link to='/'>Sponsors</Link>
                    </div>
                </div>
            </div> 
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/'>
                            <img className='thumbnail-logo' src={Logo} alt='Descendants Of Earth'/>
                        </Link>
                    </div>
                    <small className='website-rights'>
                        Copyright © Descendants Of Earth 2021
                    </small>
                    <div className='social-icons'>
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
                    </div>
                </div>
            </section>       
        </div>
    )
}

export default Footer

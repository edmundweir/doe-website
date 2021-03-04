import React from 'react';
import { Button } from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the adventure newsletter to receive our best vacation deals.
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
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms Of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencers</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>YouTube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div> 
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRVL <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>
                        TRVL copyright 2021
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

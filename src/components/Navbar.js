import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button.js';
import Thumbnail from '../images/DOE_Thumbnail.png';

function Navbar() {
    // i do not yet know hot to add comments inside a <> fragment
    // the {click ? 'fas fa-times' : 'fas fa-bars'} code switches the class when clicked
    // <ul> refers to unordered list, and <li> is a list item

    // FUNCTIONS:
    // 'const' is basically the same as 'let' but it is slightly more memory efficient
    // it is used when the variable is never going to have another value ever (it remains constant)
    // you can, however, change the internal values of a const function assuming they are not constants

    // set the initial state and value of click and setclick to false with const [click, setClick] = useState(false);
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    // switch the state of the click to it's opposite value when clicked
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    // hide the button if the width is less than 960 (i.e. mobile device)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    }

    //we are utilizing useEffect here to make sure that showbuttn executes with an empty array whenever screen is resized
    //this is so we don't have extra buttons/elements hanging around in there if we resize
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img className='logo-header' src={Thumbnail} alt='No Image' width='80' height='80'/>
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>                      
                        <li className='nav-item'>
                            <Link to='/mission' className='nav-links' onClick={closeMobileMenu}>
                                Mission
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/roadmap' className='nav-links' onClick={closeMobileMenu}>
                                Roadmap
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/kickstarter' className='nav-links' onClick={closeMobileMenu}>
                                KickStarter
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/press-kit' className='nav-links' onClick={closeMobileMenu}>
                                Press Kit
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar

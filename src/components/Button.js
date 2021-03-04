import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

//set our style class to an array to alternate between
const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    // if the coding component is true (it has a style) then set it to that
    // otherwise use first style in array
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    //below, we use className={`btn ${style} ${size}} to set the classes to whatever we would like
    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            > 
                {children}
            </button>
        </Link>
    )
};
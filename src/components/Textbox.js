import React from 'react';
import './Textbox.css';
import TextboxTopLeft from '../images/Textbox_TopLeft.png';
import TextboxTopMiddle from '../images/Textbox_TopMiddle.png';
import TextboxTopRight from '../images/Textbox_TopRight.png';
import TextboxBorder from '../images/Textbox-Border.png';
import TextboxBottomLeft from '../images/Textbox_BotLeft.png';
import TextboxBottomMiddle from '../images/Textbox_BotMiddle.png';
import TextboxBottomRight from '../images/Textbox_BotRight.png';

function Textbox(props) {
    return (
        <>
            <div class="textbox-container">
                <div class="textbox-vertical-block">
                    <img class="textbox-block" src={TextboxTopLeft} />
                    <img class="textbox-block" src={TextboxTopMiddle} />
                    <img class="textbox-block" src={TextboxTopRight} />
                </div>
                <div class="textbox-vertical-block textbox-center-block">
                    <img class="textbox-block" src={TextboxBorder} />
                    <div class="text-area"> 
                        {props.children}
                    </div>
                    <img class="textbox-block" src={TextboxBorder} />
                </div>
                <div class="textbox-vertical-block">
                    <img class="textbox-block" src={TextboxBottomLeft} />
                    <img class="textbox-block" src={TextboxBottomMiddle} />
                    <img class="textbox-block" src={TextboxBottomRight} />
                </div>
            </div>
        </>
    )
}

export default Textbox
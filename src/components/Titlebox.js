import React from 'react';
import './Titlebox.css';
import TitleboxTopLeft from '../images/Titlebox_V2/Titlebox_TopLeft.png';
import TitleboxTopMiddle from '../images/Titlebox_V2/Titlebox_TopMid.png';
import TitleboxTopRight from '../images/Titlebox_V2/Titlebox_TopRight.png';
import TextboxBorder from '../images/Titlebox_V2/Titlebox_Border.png';
import TitleboxBottomLeft from '../images/Titlebox_V2/Titlebox_BotLeft.png';
import TitleboxBottomMiddle from '../images/Titlebox_V2/Titlebox_BotMid.png';
import TitleboxBottomRight from '../images/Titlebox_V2/Titlebox_BotRight.png';

function Titlebox(props) {
    return (
        <>
            <div class="titlebox-container">
                <div class="titlebox-vertical-block-top">
                    <img class="titlebox-block" src={TitleboxTopLeft} />
                    <img class="titlebox-block" id="top-middle" src={TitleboxTopMiddle}/>
                    <img class="titlebox-block" src={TitleboxTopRight} />
                </div>
                <div class="titlebox-vertical-block titlebox-center-block">
                    <img class="titlebox-block" id="side-border" src={TextboxBorder} />
                    <div class="text-area"> 
                        {props.children}
                    </div>
                    <img class="titlebox-block" id="side-border" src={TextboxBorder} />
                </div>
                <div class="titlebox-vertical-block-bot">
                    <img class="titlebox-block" src={TitleboxBottomLeft} />
                    <img class="titlebox-block" id="bot-middle" src={TitleboxBottomMiddle} />
                    <img class="titlebox-block" src={TitleboxBottomRight} />
                </div>
            </div>
        </>
    )
}

export default Titlebox
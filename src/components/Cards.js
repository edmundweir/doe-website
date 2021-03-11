import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Thumbnail from '../images/DOE_Thumbnail.png';
import GooglePlay from '../images/Google-Play-Rounded.png';
import Trello from '../images/Apps-Trello-icon.png';

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src={Thumbnail}
                            text='Our new website is live!'
                            label='Web Content'
                            path='/'
                        />
                        <CardItem 
                            src={Trello}
                            text='Follow our development on Trello'
                            label="What's next?"
                            path='/'
                        />
                    </ul>
                    <ul className='cards__items'>
                        
                        <CardItem 
                            src={GooglePlay}
                            text='Now testing on Google Play'
                            label='Alpha Testing'
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

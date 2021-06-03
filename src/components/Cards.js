import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Thumbnail from '../images/DOE_Thumbnail.png';
import GooglePlay from '../images/Google-Play-Rounded.png';
import Trello from '../images/Apps-Trello-icon.png';
import Kickstarter from '../images/Kickstarter_Promo.png';

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
                            path='/updates-new-website'
                        />
                        <CardItem 
                            src={Trello}
                            text='Follow our development on Trello'
                            label="What's next?"
                            path='/trello'
                        />
                    </ul>
                    <ul className='cards__items'>
                        
                        <CardItem 
                            src={GooglePlay}
                            text='Now testing on Google Play, iOS coming soon!'
                            label='Alpha Testing'
                            path='/updates-google-play'
                        />
                        <CardItem 
                            src={Kickstarter}
                            text='Campaign launching June 12!'
                            label='Crowdfunding'
                            path='/kickstarter'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

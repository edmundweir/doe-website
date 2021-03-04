import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

// Decrease card transparency

function Cards() {
    return (
        <div className='cards'>
            <h1>Development Updates</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='/images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Rainforest.'
                            label='Testing'
                            path='/services'
                        />
                        <CardItem 
                            src='/images/img-2.jpg'
                            text='Travel through the islands of Bali in a private cruise.'
                            label='Player Profiles'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src='/images/img-3.jpg'
                            text='Set sail in the Atlantic Ocean visiting uncharted waters.'
                            label='Servers Online'
                            path='/services'
                        />
                        <CardItem 
                            src='/images/img-4.jpg'
                            text='Experience football on an island in the middle of the Caspian Sea.'
                            label='Quests'
                            path='/services'
                        />
                        <CardItem 
                            src='/images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour.'
                            label='Suggest Actions'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

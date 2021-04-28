import React from 'react';
import './WelcomeToCountry.css';
import '../../App.css';
import Textbox from '../Textbox';
import Titlebox from '../Titlebox';
import Background from '../../images/Gumtree.jpg';

function PressKit () {
    return (
        <>
            <img className='background-image' src={Background} alt='No Image' />
            <div className='page-container'>
                <Titlebox>
                    <h2>Welcome To Country</h2>
                </Titlebox>
                <Textbox>
                    <p>
                        The team at Descendants Of Earth wish to acknowledge the traditional owners of the land upon which this project was largely developed, specifically the Djadjawurung, Taungurong, Woiworung and Boonwurrung Nations from the broader Kulin Alliance. 
                        We are humbled by their understanding of and continuing connection to land, culture and community, and remember that sovereignty was neved ceded in Australia.
                    </p> <br />
                    <p>
                        Indigenous people have always been the original environmental protectors, and indigenous knowledge is an essential part of any sustainable future on Earth.
                    </p> <br />
                    <p>
                        Part of the inspiration for Descendants Of Earth comes from the idea of 'Ratja Yaliyali' - the vine of love that stretches through time. You can find the concept of Ratja Yaliyali described by the artist Gawurra in the following video:  
                    </p> <br />
                    <center><iframe src="https://www.youtube.com/embed/CZn9qjZep8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                    <br />
                    <br />
                    <p>
                        For more of Gawurra's music, please visit <a href="https://caamamusic.com.au/product/ratja-yaliyali/" target="_blank"> here.</a>
                    </p>
                </Textbox>        
            </div>        
        </>
    )
}

export default PressKit;
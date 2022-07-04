import React from 'react';
import Carousel from 'nuka-carousel';
import madina from '../../images/masjid-nawbi.jpg';
import hussainShrin from '../../images/shrin-hussain.jpg';
import bagdad from '../../images/bagdad-sharif.jpg';

const Slider = () => {
    const imageLink = [madina, hussainShrin, bagdad]
    return (
        <div>
            <div className=' xs:hidden lg:flex'>
                <Carousel
                    className=''
                    enableKeyboardControls={true}
                    autoplay={true}
                    autoplayInterval={3000}
                    wrapAround={true}
                    slidesToShow={1}
                >
                    {
                        imageLink.map(image => <img className='w-full' src={image} />)
                    }
                </Carousel>
            </div>
            <div className='m-auto'>
                <img src={madina} className='xs:flex lg:hidden  object-cover' alt=''/>
            </div>
        </div>
    );
};

export default Slider;